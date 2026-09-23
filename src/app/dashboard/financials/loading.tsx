import { LoadingScreen, Skeleton } from "@/components/ui/loading-screen";

export default function FinancialsLoading() {
  return (
    <LoadingScreen title="Financials">
      <div>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Skeleton className="h-9 w-56" />
            <Skeleton className="mt-2 h-4 w-72" />
          </div>
          <div className="flex gap-2">
            <Skeleton className="h-9 w-28 rounded-lg" />
            <Skeleton className="h-9 w-28 rounded-lg" />
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="rounded-xl border border-border bg-card p-5">
              <Skeleton className="mb-3 h-3 w-28" />
              <Skeleton className="mb-1 h-8 w-24" />
              <Skeleton className="h-3 w-16" />
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <Skeleton className="mb-6 h-4 w-32" />
            <Skeleton className="h-48 w-full rounded-lg" />
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <Skeleton className="mb-6 h-4 w-36" />
            <Skeleton className="h-48 w-full rounded-lg" />
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-border bg-card p-6">
          <Skeleton className="mb-4 h-4 w-40" />
          <div className="space-y-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-4">
                <Skeleton className="h-8 flex-1 rounded" />
                <Skeleton className="h-8 w-32 rounded" />
                <Skeleton className="h-8 w-32 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </LoadingScreen>
  );
}
