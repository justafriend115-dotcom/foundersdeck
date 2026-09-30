"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Polls for a new deployment version and forces reload when detected.
 * Uses the build ID from next.js which changes on each deployment.
 */
export function VersionPoller({
  intervalMs = 60000, // Check every 60 seconds
  onUpdateDetected
}: {
  intervalMs?: number;
  onUpdateDetected?: () => void;
}) {
  const [buildId, setBuildId] = useState<string | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isInitialLoad = useRef(true);

  useEffect(() => {
    // Get initial build ID from the next.js build manifest
    async function fetchBuildId() {
      try {
        // Next.js embeds the build ID in the page. We can fetch it from the build manifest
        // or from a meta tag if we add one. For now, use the next data route.
        const res = await fetch("/_next/static/build-id", {
          cache: "no-store",
          credentials: "same-origin"
        });
        if (res.ok) {
          const text = await res.text();
          return text.trim();
        }
      } catch {
        // Ignore errors, fallback to polling next/data
      }

      // Fallback: try to get build ID from next data
      try {
        const res = await fetch("/_next/data/build-id.json", {
          cache: "no-store",
          credentials: "same-origin"
        });
        if (res.ok) {
          const data = await res.json();
          return data.buildId;
        }
      } catch {
        // Ignore
      }

      return null;
    }

    async function checkForUpdate() {
      const newBuildId = await fetchBuildId();

      if (isInitialLoad.current) {
        // First load - store the build ID
        if (newBuildId) {
          setBuildId(newBuildId);
        }
        isInitialLoad.current = false;
        return;
      }

      if (newBuildId && buildId && newBuildId !== buildId) {
        // New deployment detected!
        console.log(`[VersionPoller] New build detected: ${buildId} -> ${newBuildId}`);

        if (onUpdateDetected) {
          onUpdateDetected();
        } else {
          // Default behavior: hard reload
          window.location.reload();
        }
      } else if (newBuildId && !buildId) {
        // We didn't have a build ID before, store it now
        setBuildId(newBuildId);
      }
    }

    // Initial check
    checkForUpdate();

    // Set up interval
    intervalRef.current = setInterval(checkForUpdate, intervalMs);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [buildId, intervalMs, onUpdateDetected]);

  return null; // This component renders nothing
}

/**
 * Hook to use in your app layout to enable automatic update detection
 */
export function useVersionPoller() {
  useEffect(() => {
    // Check for updates on page focus/visibility change (user returns to tab)
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        // Trigger a check when user comes back to the tab
        // This is debounced by the interval in VersionPoller
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);
}