import type { NextRequest } from "next/server";

const DEFAULT_MAX_BYTES = 256 * 1024;

export async function readJsonBody(
  request: NextRequest,
  maxBytes = DEFAULT_MAX_BYTES,
): Promise<unknown | null> {
  const text = await request.text().catch(() => null);
  if (text === null || text.length > maxBytes) return null;
  try {
    return JSON.parse(text) as unknown;
  } catch {
    return null;
  }
}
