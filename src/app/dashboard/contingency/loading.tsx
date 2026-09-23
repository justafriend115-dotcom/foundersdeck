import { LoadingScreen, Skeleton } from "@/components/ui/loading-screen";

export default function ContingencyLoading() {
  return (
    <LoadingScreen title="Contingency Planner">
      <div>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Skeleton className="h-9 w-52" />
            <Skeleton className="mt-2 h-4 w-72" />
          </div>
          <Skeleton className="h-9 w-36 rounded-lg" />
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-xl border border-border bg-card p-5">
              <Skeleton className="mb-3 h-3 w-28" />
              <Skeleton className="mb-2 h-8 w-16" />
              <Skeleton className="h-2 w-full rounded-full" />
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-5">
          <div className="rounded-xl border border-border bg-card p-6 lg:col-span-2">
            <Skeleton className="mb-4 h-4 w-28" />
            <div className="space-y-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-3 rounded-lg border border-border p-3">
                  <Skeleton className="size-3 rounded-full" />
                  <Skeleton className="h-3 flex-1" />
                  <Skeleton className="h-5 w-14 rounded-full" />
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 lg:col-span-3">
            <Skeleton className="mb-4 h-4 w-36" />
            <div className="space-y-3">
              <Skeleton className="mb-2 h-5 w-48" />
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-3/4" />
              <div className="mt-4 space-y-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Skeleton className="mt-0.5 size-5 rounded" />
                    <Skeleton className="h-3 flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </LoadingScreen>
  );
}
