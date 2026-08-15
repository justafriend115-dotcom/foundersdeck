"use client";

import { ExternalLink, Search } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { StartupProfile } from "@/lib/scraper/types";
import { scrapeStartup } from "@/lib/scraper";

export function ScraperWidget() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const initialResults: StartupProfile[] = [];
  const [results, setResults] = useState(initialResults);

  async function handleSearch(event: React.FormEvent) {
    event.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setResults([]);
    try {
      const data = await scrapeStartup(query.trim());
      setResults(data);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <h3 className="text-base font-bold text-foreground">Public Startup Data</h3>
      <p className="mt-1 text-xs text-muted-foreground">
        Configure source endpoints + API keys in .env.local to pull from Crunchbase, PitchBook, AngelList, and other sources.
      </p>
      <form onSubmit={handleSearch} className="mt-3 flex gap-2">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search startup..."
          className="flex-1"
        />
        <Button type="submit" variant="gradient" size="sm" disabled={loading || !query.trim()}>
          <Search className="size-4" />
          Search
        </Button>
      </form>
      <div className="mt-4 space-y-2">
        {results.map((r) => (
          <a
            key={r.id}
            href={r.website ? `https://${r.website.replace(/^https?:\/\//, "")}` : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 rounded-lg border border-border bg-muted/40 px-3 py-3 transition-colors hover:bg-muted"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-semibold text-foreground truncate">{r.name}</h4>
                <span className="text-[10px] font-medium text-muted-foreground">{r.source}</span>
              </div>
              <p className="mt-0.5 text-xs text-muted-foreground truncate">
                {r.industry || "Unknown"} · {r.stage || "Unknown"} · {r.funding || "Unknown"}
              </p>
              <p className="mt-1 text-[11px] text-muted-foreground line-clamp-2">{r.description}</p>
            </div>
            <ExternalLink className="size-4 shrink-0 text-muted-foreground" />
          </a>
        ))}
        {results.length === 0 && !loading && (
          <p className="text-xs text-muted-foreground">Enter a startup name to see aggregated results.</p>
        )}
      </div>
    </div>
  );
}