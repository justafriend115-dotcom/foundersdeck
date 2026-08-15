export const PASSWORD_MIN_LENGTH = 8;
export const PASSWORD_MAX_LENGTH = 72;

export const PASSWORD_RULES = [
  { id: "length", label: "8–72 characters" },
  { id: "lowercase", label: "One lowercase letter" },
  { id: "uppercase", label: "One uppercase letter" },
  { id: "number", label: "One number" },
  { id: "symbol", label: "One symbol (!@#$…)" },
] as const;

export type PasswordRuleId = (typeof PASSWORD_RULES)[number]["id"];
export type PasswordRuleCheck = Record<PasswordRuleId, boolean>;

export function checkPasswordRules(value: string): PasswordRuleCheck {
  return {
    length: value.length >= PASSWORD_MIN_LENGTH && value.length <= PASSWORD_MAX_LENGTH,
    lowercase: /[a-z]/.test(value),
    uppercase: /[A-Z]/.test(value),
    number: /\d/.test(value),
    symbol: /[^A-Za-z0-9\s]/.test(value),
  };
}

const RULE_MESSAGES: Record<PasswordRuleId, string> = {
  length: "8–72 characters",
  lowercase: "a lowercase letter",
  uppercase: "an uppercase letter",
  number: "a number",
  symbol: "a symbol",
};

export function validatePassword(value: string): string | null {
  if (value.length < PASSWORD_MIN_LENGTH) {
    return `Password must be at least ${PASSWORD_MIN_LENGTH} characters.`;
  }
  if (value.length > PASSWORD_MAX_LENGTH) {
    return `Password must be at most ${PASSWORD_MAX_LENGTH} characters.`;
  }
  const rules = checkPasswordRules(value);
  for (const rule of PASSWORD_RULES) {
    if (!rules[rule.id]) {
      return `Password needs ${RULE_MESSAGES[rule.id]}.`;
    }
  }
  return null;
}

export function passwordStrength(value: string): { score: number; label: string } {
  if (!value) return { score: 0, label: "" };
  const rules = checkPasswordRules(value);
  const variety = [rules.lowercase, rules.uppercase, rules.number, rules.symbol].filter(
    Boolean,
  ).length;

  let score = 0;
  if (rules.length) score = 1;
  if (variety >= 2 && value.length >= 8) score = 2;
  if (variety >= 3 && value.length >= 10) score = 3;
  if (variety === 4 && value.length >= 12) score = 4;

  const labels = ["", "Too weak", "Weak", "Fair", "Strong"];
  return { score, label: labels[score] };
}