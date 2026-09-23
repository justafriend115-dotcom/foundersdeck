export function BetaBanner() {
  return (
    <div className="relative z-50 bg-[#C9A441]/10 border-b border-[#C9A441]/25 px-4 py-2 text-center text-xs sm:text-sm">
      <span className="relative mr-2 inline-flex size-2 align-middle">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C9A441] opacity-60" />
        <span className="relative inline-flex size-2 rounded-full bg-[#C9A441]" />
      </span>
      <span className="font-semibold text-[#C9A441]">Private Beta</span>
      <span className="mx-2 text-muted-foreground">·</span>
      <span className="text-muted-foreground">
        You&apos;re among the first founders with full access. Feedback shapes what we build next.
      </span>
    </div>
  );
}
