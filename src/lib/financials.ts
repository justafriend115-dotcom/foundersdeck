export interface RevenueModelPreset {
  id: string;
  label: string;
  description: string;
  defaults: {
    monthlyRevenue: number;
    growthPct: number;
    fixedCosts: number;
    variablePct: number;
  };
}

export const REVENUE_MODELS: RevenueModelPreset[] = [
  {
    id: "saas",
    label: "SaaS",
    description: "Subscription software",
    defaults: { monthlyRevenue: 5000, growthPct: 12, fixedCosts: 9000, variablePct: 15 },
  },
  {
    id: "product",
    label: "Physical product",
    description: "E-commerce / goods",
    defaults: { monthlyRevenue: 12000, growthPct: 6, fixedCosts: 8000, variablePct: 55 },
  },
  {
    id: "service",
    label: "Agency / services",
    description: "Retainers & projects",
    defaults: { monthlyRevenue: 15000, growthPct: 4, fixedCosts: 11000, variablePct: 30 },
  },
];

export interface MonthProjection {
  month: number;
  revenue: number;
  expenses: number;
  profit: number;
}

export function project12Months(
  monthlyRevenue: number,
  growthPct: number,
  fixedCosts: number,
  variablePct: number,
): MonthProjection[] {
  const rows: MonthProjection[] = [];
  let revenue = monthlyRevenue;
  for (let month = 1; month <= 12; month++) {
    const variable = (revenue * variablePct) / 100;
    const expenses = fixedCosts + variable;
    rows.push({
      month,
      revenue: Math.round(revenue),
      expenses: Math.round(expenses),
      profit: Math.round(revenue - expenses),
    });
    revenue *= 1 + growthPct / 100;
  }
  return rows;
}

export function breakEvenRevenue(fixedCosts: number, variablePct: number): number {
  const margin = 1 - variablePct / 100;
  return margin > 0 ? fixedCosts / margin : Infinity;
}

export function monthsToBreakEven(rows: MonthProjection[]): number | null {
  const index = rows.findIndex((row) => row.profit >= 0);
  return index === -1 ? null : index + 1;
}
