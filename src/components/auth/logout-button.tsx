"use client";

import { LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";

export function LogoutButton() {
  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/login";
  }

  return (
    <Button variant="outline" size="sm" onClick={handleLogout}>
      <LogOut />
      Log out
    </Button>
  );
}
