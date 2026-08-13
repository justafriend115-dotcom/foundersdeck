"use client";

import { useEffect, useRef, useState } from "react";

export function useRemoteState<T>(url: string, fallback: T) {
  const [value, setValue] = useState<T>(fallback);
  const [loaded, setLoaded] = useState(false);
  const loadedRef = useRef(false);

  useEffect(() => {
    let active = true;
    fetch(url)
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (active && data?.ok) {
          setValue(data.value as T);
        }
      })
      .catch(() => {
        // keep fallback on network errors
      })
      .finally(() => {
        if (active) {
          loadedRef.current = true;
          setLoaded(true);
        }
      });
    return () => {
      active = false;
    };
  }, [url]);

  useEffect(() => {
    if (!loadedRef.current) return;
    const timer = setTimeout(() => {
      fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ value }),
      }).catch(() => {
        // save failure is surfaced on next reload
      });
    }, 350);
    return () => clearTimeout(timer);
  }, [value, url]);

  return [value, setValue, loaded] as const;
}
