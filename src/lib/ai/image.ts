import "server-only";

const GEN_URL =
  process.env.QWEN_IMAGE_API_URL ??
  "https://ai.api.nvidia.com/v1/genai/black-forest-labs/flux.1-dev";
const EDIT_URL =
  process.env.QWEN_IMAGE_EDIT_API_URL ??
  "https://ai.api.nvidia.com/v1/genai/black-forest-labs/flux.1-kontext-dev";
const TIMEOUT_MS = 90_000;

function toDataUrl(base64: string): string {
  const mime = base64.startsWith("/9j") ? "image/jpeg" : "image/png";
  return `data:${mime};base64,${base64}`;
}

async function postImage(
  url: string,
  apiKey: string | undefined,
  body: Record<string, unknown>,
): Promise<string | null> {
  if (!apiKey) return null;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    if (!response.ok) return null;
    const data = (await response.json()) as {
      artifacts?: { base64?: string }[];
      data?: { b64_json?: string }[];
    };
    const base64 = data.artifacts?.[0]?.base64 ?? data.data?.[0]?.b64_json;
    return base64 ? toDataUrl(base64) : null;
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

export function isImageGenerationEnabled(): boolean {
  return Boolean(process.env.QWEN_IMAGE_API_KEY);
}

export async function generateSlideImage(prompt: string): Promise<string | null> {
  return postImage(GEN_URL, process.env.QWEN_IMAGE_API_KEY, {
    prompt,
    seed: Math.floor(Math.random() * 2 ** 31),
    width: 1024,
    height: 1024,
    steps: 8,
    cfg_scale: 3.5,
  });
}

export async function refineSlideImage(
  prompt: string,
  imageDataUrl: string,
): Promise<string | null> {
  const edited = await postImage(EDIT_URL, process.env.QWEN_IMAGE_EDIT_API_KEY, {
    prompt,
    image: imageDataUrl,
    steps: 8,
    cfg_scale: 3.5,
    seed: Math.floor(Math.random() * 2 ** 31),
  });
  if (edited) return edited;
  return generateSlideImage(prompt);
}
