import { LoadingScreen, Skeleton } from "@/components/ui/loading-screen";

export default function DataRoomLoading() {
  return (
    <LoadingScreen title="Data Room">
      <div>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Skeleton className="h-9 w-40" />
            <Skeleton className="mt-2 h-4 w-64" />
          </div>
          <div className="flex gap-2">
            <Skeleton className="h-9 w-24 rounded-lg" />
            <Skeleton className="h-9 w-28 rounded-lg" />
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="rounded-xl border border-border bg-card p-5">
              <div className="mb-3 flex items-center justify-between">
                <Skeleton className="size-9 rounded-lg" />
                <Skeleton className="h-5 w-16 rounded-full" />
              </div>
              <Skeleton className="mb-1 h-4 w-36" />
              <Skeleton className="h-3 w-24" />
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-xl border border-border bg-card p-6">
          <Skeleton className="mb-4 h-4 w-28" />
          <div className="space-y-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-4 rounded-lg border border-border p-3">
                <Skeleton className="size-8 rounded" />
                <div className="flex-1">
                  <Skeleton className="mb-1 h-4 w-48" />
                  <Skeleton className="h-3 w-24" />
                </div>
                <Skeleton className="h-3 w-20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </LoadingScreen>
  );
}
