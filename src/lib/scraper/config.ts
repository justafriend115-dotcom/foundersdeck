import type { ScraperSourceConfig } from "./types";

export const SCRAPER_SOURCES: ScraperSourceConfig[] = [
  {
    name: "Crunchbase",
    enabled: false, // set true + provide endpoint/apiKey in .env.local
    endpoint: process.env.CRUNCHBASE_API_URL || "",
    apiKey: process.env.CRUNCHBASE_API_KEY || "",
    fields: ["name", "industry", "funding", "website"],
  },
  {
    name: "PitchBook",
    enabled: false,
    endpoint: process.env.PITCHBOOK_API_URL || "",
    apiKey: process.env.PITCHBOOK_API_KEY || "",
    fields: ["name", "stage", "funding", "website"],
  },
  {
    name: "AngelList",
    enabled: false,
    endpoint: process.env.ANGELLIST_API_URL || "",
    apiKey: process.env.ANGELLIST_API_KEY || "",
    fields: ["name", "industry", "stage", "website"],
  },
];
