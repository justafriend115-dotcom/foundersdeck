import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/auth";

export const metadata = { title: "Admin — AI Spend" };

interface SpendRow {
  userId: string;
  name: string;
  email: string;
  plan: string;
  suspiciousActivity: boolean;
  totalCost: number;
  totalInputTokens: number;
  totalOutputTokens: number;
  generationCount: number;
}

async function fetchRows(): Promise<SpendRow[]> {
  const base = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
  const { cookies } = await import("next/headers");
  const cookieHeader = cookies()
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join("; ");
  const res = await fetch(`${base}/api/admin/spend`, {
    headers: { cookie: cookieHeader },
    cache: "no-store",
  });
  if (!res.ok) return [];
  const json = await res.json();
  return json.rows ?? [];
}

export default async function AdminSpendPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  if (!user.isAdmin) redirect("/dashboard");

  const rows = await fetchRows();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">AI Spend — last 30 days</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Per-user token usage and estimated cost. Flagged rows indicate anomalous generation
          volume.
        </p>
      </div>

      {rows.length === 0 ? (
        <p className="text-sm text-muted-foreground">No generation logs in this window.</p>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="min-w-full text-sm">
            <thead className="border-b border-border bg-card">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">User</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Plan</th>
                <th className="px-4 py-3 text-right font-medium text-muted-foreground">
                  Generations
                </th>
                <th className="px-4 py-3 text-right font-medium text-muted-foreground">
                  Input tokens
                </th>
                <th className="px-4 py-3 text-right font-medium text-muted-foreground">
                  Output tokens
                </th>
                <th className="px-4 py-3 text-right font-medium text-muted-foreground">
                  Est. cost
                </th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-background">
              {rows.map((row) => (
                <tr
                  key={row.userId}
                  className={row.suspiciousActivity ? "bg-red-50 dark:bg-red-950/20" : ""}
                >
                  <td className="px-4 py-3">
                    <p className="font-medium text-foreground">{row.name}</p>
                    <p className="text-xs text-muted-foreground">{row.email}</p>
                  </td>
                  <td className="px-4 py-3 capitalize text-foreground">{row.plan}</td>
                  <td className="px-4 py-3 text-right text-foreground">{row.generationCount}</td>
                  <td className="px-4 py-3 text-right text-foreground">
                    {row.totalInputTokens.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 text-right text-foreground">
                    {row.totalOutputTokens.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 text-right text-foreground">
                    ${row.totalCost.toFixed(4)}
                  </td>
                  <td className="px-4 py-3">
                    {row.suspiciousActivity ? (
                      <span className="inline-flex items-center rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700 dark:bg-red-900/30 dark:text-red-400">
                        Flagged
                      </span>
                    ) : (
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
                        OK
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
