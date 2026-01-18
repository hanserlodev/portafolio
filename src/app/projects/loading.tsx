export default function ProjectsLoading() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title Skeleton */}
        <div className="text-center mb-12">
          <div className="h-12 w-64 bg-secondary rounded-lg mx-auto mb-4 animate-pulse" />
          <div className="h-6 w-96 bg-secondary rounded-lg mx-auto animate-pulse" />
        </div>

        {/* Filter Buttons Skeleton */}
        <div className="flex justify-center gap-4 mb-12">
          <div className="h-10 w-32 bg-secondary rounded-lg animate-pulse" />
          <div className="h-10 w-32 bg-secondary rounded-lg animate-pulse" />
        </div>

        {/* Projects Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-secondary rounded-xl overflow-hidden border border-border"
            >
              <div className="h-56 bg-muted animate-pulse" />
              <div className="p-6 space-y-4">
                <div className="h-6 bg-muted rounded animate-pulse" />
                <div className="h-4 bg-muted rounded animate-pulse" />
                <div className="h-4 w-3/4 bg-muted rounded animate-pulse" />
                <div className="flex gap-2">
                  <div className="h-6 w-16 bg-muted rounded-full animate-pulse" />
                  <div className="h-6 w-16 bg-muted rounded-full animate-pulse" />
                  <div className="h-6 w-16 bg-muted rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
