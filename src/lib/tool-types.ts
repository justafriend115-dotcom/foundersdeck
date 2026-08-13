export type Stage = "cold" | "warm" | "pitching" | "closed";

export interface Meeting {
  id: string;
  date: string;
  outcome: string;
  followUp: string;
}

export interface Investor {
  id: string;
  name: string;
  firm: string;
  stage: Stage;
  notes: string;
  meetings: Meeting[];
}

export interface Scenario {
  id: "best" | "realistic" | "worst";
  label: string;
  description: string;
  years: string[];
}

export interface Risk {
  id: string;
  name: string;
  likelihood: number;
  impact: number;
  mitigation: string;
}

export interface ContingencyState {
  scenarios: Scenario[];
  risks: Risk[];
  pivots: Record<string, string>;
}

export interface FinancialState {
  model: string;
  monthlyRevenue: number;
  growthPct: number;
  fixedCosts: number;
  variablePct: number;
}
