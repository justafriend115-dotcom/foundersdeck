import { LoadingScreen, Skeleton } from "@/components/ui/loading-screen";

export default function PitchLoading() {
  return (
    <LoadingScreen title="Pitch Generator">
      <div>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Skeleton className="h-9 w-48" />
            <Skeleton className="mt-2 h-4 w-64" />
          </div>
          <Skeleton className="h-9 w-36 rounded-lg" />
        </div>

        <div className="mt-8 rounded-xl border border-border bg-card p-6">
          <Skeleton className="mb-4 h-4 w-40" />
          <div className="space-y-3">
            <Skeleton className="h-10 w-full rounded-lg" />
            <Skeleton className="h-10 w-full rounded-lg" />
            <Skeleton className="h-24 w-full rounded-lg" />
          </div>
          <Skeleton className="mt-4 h-10 w-40 rounded-lg" />
        </div>

        <div className="mt-6">
          <Skeleton className="mb-4 h-4 w-32" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="h-40 w-full rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    </LoadingScreen>
  );
}
