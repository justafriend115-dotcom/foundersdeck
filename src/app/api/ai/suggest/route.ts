import { NextRequest, NextResponse } from "next/server";

import { requireUser } from "@/lib/auth/server";
import { generateSuggestion } from "@/lib/ai/suggest";
import type { SuggestionKind } from "@/lib/ai/types";
import { readJsonBody } from "@/lib/request";

const KINDS: SuggestionKind[] = ["business-plan", "pitch"];

export async function POST(request: NextRequest) {
  const user = await requireUser();
  if (!user) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const body = (await readJsonBody(request, 16 * 1024)) as Record<string, unknown> | null;
  const kind: SuggestionKind | null = KINDS.includes(body?.kind as SuggestionKind)
    ? (body?.kind as SuggestionKind)
    : null;
  const section = String(body?.section ?? "").trim();
  if (!kind || !section) {
    return NextResponse.json({ ok: false, error: "Invalid payload." }, { status: 400 });
  }

  const { text, provider } = await generateSuggestion(kind, section);
  return NextResponse.json({ ok: true, text, provider });
}
