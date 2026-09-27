import { NextResponse } from "next/server";
import { generateAiTextWithUsage, getProviderInfo } from "@/lib/ai/provider";

export async function GET() {
  const info = getProviderInfo();
  
  try {
    const result = await generateAiTextWithUsage(
      "You are a helpful assistant.",
      "Say 'Groq is working!'",
      100
    );

    return NextResponse.json({
      ok: true,
      provider: info.provider,
      model: info.model,
      response: result.text,
      usage: {
        input: result.inputTokens,
        output: result.outputTokens,
      },
    });
  } catch (error: any) {
    return NextResponse.json({
      ok: false,
      provider: info.provider,
      error: error.message,
    }, { status: 500 });
  }
}
