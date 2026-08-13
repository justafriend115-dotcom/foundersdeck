"use client";

import { useCallback, useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, fallback: T) {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === "undefined") return fallback;
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : fallback;
    } catch {
      return fallback;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // storage unavailable — stub mode keeps state in memory
    }
  }, [key, value]);

  const reset = useCallback(() => setValue(fallback), [fallback]);

  return [value, setValue, reset] as const;
}

export function storageKey(userId: string, tool: string): string {
  return `fd:${userId}:${tool}`;
}
