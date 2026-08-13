export type AiProvider = "openai" | "anthropic" | "mock";

const OPENAI_MODEL = process.env.AI_MODEL_OPENAI ?? "gpt-4o-mini";
const ANTHROPIC_MODEL = process.env.AI_MODEL_ANTHROPIC ?? "claude-3-5-haiku-latest";

export function getProviderInfo(): { provider: AiProvider; model: string | null } {
  if (process.env.OPENAI_API_KEY) {
    return { provider: "openai", model: OPENAI_MODEL };
  }
  if (process.env.ANTHROPIC_API_KEY) {
    return { provider: "anthropic", model: ANTHROPIC_MODEL };
  }
  return { provider: "mock", model: null };
}

async function fetchWithTimeout(
  url: string,
  init: RequestInit,
  timeoutMs: number,
): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

async function callOpenAI(
  system: string,
  prompt: string,
  maxTokens: number,
): Promise<string | null> {
  const response = await fetchWithTimeout(
    "https://api.openai.com/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: OPENAI_MODEL,
        temperature: 0.7,
        max_tokens: maxTokens,
        messages: [
          { role: "system", content: system },
          { role: "user", content: prompt },
        ],
      }),
    },
    45000,
  );
  if (!response.ok) return null;
  const json = await response.json().catch(() => null);
  return json?.choices?.[0]?.message?.content?.trim() || null;
}

async function callAnthropic(
  system: string,
  prompt: string,
  maxTokens: number,
): Promise<string | null> {
  const response = await fetchWithTimeout(
    "https://api.anthropic.com/v1/messages",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY ?? "",
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: ANTHROPIC_MODEL,
        max_tokens: maxTokens,
        temperature: 0.7,
        system,
        messages: [{ role: "user", content: prompt }],
      }),
    },
    45000,
  );
  if (!response.ok) return null;
  const json = await response.json().catch(() => null);
  return json?.content?.[0]?.text?.trim() || null;
}

export async function generateAiText(
  system: string,
  prompt: string,
  maxTokens = 500,
): Promise<string | null> {
  const { provider } = getProviderInfo();
  try {
    if (provider === "openai") return await callOpenAI(system, prompt, maxTokens);
    if (provider === "anthropic") return await callAnthropic(system, prompt, maxTokens);
    return null;
  } catch {
    return null;
  }
}
