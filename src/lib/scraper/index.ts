import type { StartupProfile } from "./types";
import { SCRAPER_SOURCES } from "./config";

export async function scrapeStartup(query: string) {
  const results: StartupProfile[] = [];
  const enabledSources = SCRAPER_SOURCES.filter((s) => s.enabled && s.endpoint && s.apiKey);

  if (enabledSources.length === 0) {
    // Mock fallback when no real endpoints are configured:
    if (process.env.NODE_ENV === "development") {
      results.push({
        id: query.toLowerCase().replace(/\s+/g, "-") + "-demo",
        name: query + " (sample)",
        source: "Mock",
        industry: "SaaS",
        stage: "Seed",
        funding: "$2.5M",
        website: `https://${query.toLowerCase().replace(/\s+/g, "")}\.com`,
        description: "Demo result. Configure SCRAPER_SOURCES endpoints + API keys in .env.local for live data.",
        lastUpdated: new Date().toISOString(),
      });
    }
    return results;
  }

  for (const source of enabledSources) {
    try {
      // Placeholder for real API calls.
      // Configure endpoint + apiKey in .env.local to activate.
      // Example:
      // const res = await fetch(source.endpoint + '?q=' + encodeURIComponent(query), {
      //   headers: { 'Authorization': 'Bearer ' + source.apiKey },
      // });
      // const data = await res.json();
      // results.push(convertToProfile(data, source.name));
      void source;
    } catch {
      // Silently skip failed sources; aggregator continues.
    }
  }

  return results;
}
