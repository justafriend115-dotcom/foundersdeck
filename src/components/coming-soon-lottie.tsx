"use client";

import { useLottie } from "lottie-react";
import animationData from "@/lib/lottie-coming-soon.json";

export function ComingSoonLottie({ className }: { className?: string }) {
  const { View } = useLottie({
    animationData,
    loop: true,
    autoplay: true,
  });

  return <div className={className}>{View}</div>;
}