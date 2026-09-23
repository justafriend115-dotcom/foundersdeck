import { LoadingScreen, Skeleton } from "@/components/ui/loading-screen";

export default function DashboardLoading() {
  return (
    <LoadingScreen title="Dashboard">
      <div>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Skeleton className="h-9 w-56" />
            <Skeleton className="mt-2 h-4 w-72" />
          </div>
          <Skeleton className="h-6 w-20 rounded-full" />
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <Skeleton className="h-3 w-32" />
                  <Skeleton className="mt-3 h-8 w-16" />
                </div>
                <Skeleton className="size-11 rounded-xl" />
              </div>
            </div>
          ))}
        </div>

        <Skeleton className="mt-6 h-24 w-full rounded-2xl" />

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          <div className="rounded-xl border border-border bg-card p-6 lg:col-span-2">
            <Skeleton className="h-4 w-28" />
            <div className="mt-4 space-y-2.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="h-12 w-full rounded-lg" />
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 lg:col-span-3">
            <Skeleton className="h-4 w-32" />
            <div className="mt-4 space-y-1">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-14 w-full rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </LoadingScreen>
  );
}
