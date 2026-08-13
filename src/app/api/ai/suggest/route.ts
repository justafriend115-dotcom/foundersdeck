import { NextRequest, NextResponse } from "next/server";

import { requireUser } from "@/lib/auth/server";
import { generateSuggestion } from "@/lib/ai/suggest";
import type { SuggestionKind } from "@/lib/ai/types";

const KINDS: SuggestionKind[] = ["business-plan", "pitch"];

export async function POST(request: NextRequest) {
  const user = await requireUser();
  if (!user) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const kind = body?.kind;
  const section = String(body?.section ?? "").trim();
  if (!KINDS.includes(kind) || !section) {
    return NextResponse.json({ ok: false, error: "Invalid payload." }, { status: 400 });
  }

  const { text, provider } = await generateSuggestion(kind, section);
  return NextResponse.json({ ok: true, text, provider });
}
