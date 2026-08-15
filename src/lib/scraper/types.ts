export interface StartupProfile {
  id: string;
  name: string;
  source: string;
  industry?: string;
  stage?: string;
  funding?: string;
  website?: string;
  description?: string;
  lastUpdated?: string;
}

export interface ScraperSourceConfig {
  name: string;
  enabled: boolean;
  endpoint?: string;
  apiKey?: string; // must be configured by user
  fields: string[];
}
