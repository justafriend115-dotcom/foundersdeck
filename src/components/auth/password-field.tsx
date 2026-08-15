"use client";

import { Check, Eye, EyeOff, X } from "lucide-react";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import {
  PASSWORD_RULES,
  checkPasswordRules,
  passwordStrength,
  type PasswordRuleCheck,
} from "@/lib/password-rules";
import { cn } from "@/lib/utils";

const STRENGTH_BAR = ["", "bg-red-500", "bg-orange-500", "bg-brand-400", "bg-navy-800"];
const STRENGTH_TEXT = ["", "text-red-500", "text-orange-500", "text-brand-400", "text-brand-300"];

export function PasswordField({
  value,
  onChange,
  id,
  name,
  autoComplete,
  placeholder,
  showRules = true,
  className,
}: {
  value: string;
  onChange: (value: string) => void;
  id: string;
  name: string;
  autoComplete: string;
  placeholder?: string;
  showRules?: boolean;
  className?: string;
}) {
  const [show, setShow] = useState(false);
  const strength = passwordStrength(value);
  const rules: PasswordRuleCheck = checkPasswordRules(value);
  const panelOpen = showRules && value.length > 0;

  return (
    <div className={className}>
      <div className="relative">
        <Input
          id={id}
          name={name}
          type={show ? "text" : "password"}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          required
          autoComplete={autoComplete}
          placeholder={placeholder}
          className="pr-10"
        />
        <button
          type="button"
          onClick={() => setShow((v) => !v)}
          aria-label={show ? "Hide password" : "Show password"}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
        >
          {show ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
        </button>
      </div>

      <div
        className={cn(
          "grid transition-all duration-300 ease-out",
          panelOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          {/* Strength meter */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-1 gap-1.5">
              {[1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className={cn(
                    "h-1.5 flex-1 rounded-full transition-all duration-500 ease-out",
                    i <= strength.score ? STRENGTH_BAR[strength.score] : "bg-navy-800",
                  )}
                  style={{ transitionDelay: `${i * 70}ms` }}
                />
              ))}
            </div>
            <span
              className={cn(
                "shrink-0 text-xs font-semibold transition-colors duration-300",
                STRENGTH_TEXT[strength.score],
              )}
            >
              {strength.label}
            </span>
          </div>

          {/* Rule checklist */}
          <ul className="mt-2.5 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
            {PASSWORD_RULES.map((rule) => {
              const met = rules[rule.id];
              return (
                <li
                  key={rule.id}
                  className={cn(
                    "flex items-center gap-1.5 text-xs transition-colors duration-300",
                    met ? "text-emerald-600" : "text-muted-foreground",
                  )}
                >
                  <span
                    className={cn(
                      "flex size-4 shrink-0 items-center justify-center rounded-full transition-colors duration-300",
                      met ? "rule-pop bg-emerald-500" : "bg-navy-800",
                    )}
                  >
                    {met ? (
                      <Check className="size-3 text-white" />
                    ) : (
                      <X className="size-3 text-navy-400" />
                    )}
                  </span>
                  {rule.label}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}