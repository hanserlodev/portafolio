export default function ProjectDetailLoading() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back button skeleton */}
        <div className="h-6 w-40 bg-secondary rounded animate-pulse mb-8" />

        {/* Title skeleton */}
        <div className="h-12 w-3/4 bg-secondary rounded animate-pulse mb-4" />

        {/* Description skeleton */}
        <div className="space-y-2 mb-8">
          <div className="h-6 w-full bg-secondary rounded animate-pulse" />
          <div className="h-6 w-2/3 bg-secondary rounded animate-pulse" />
        </div>

        {/* Tags skeleton */}
        <div className="flex gap-2 mb-8">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-8 w-20 bg-secondary rounded-full animate-pulse"
            />
          ))}
        </div>

        {/* Buttons skeleton */}
        <div className="flex gap-4 mb-12">
          <div className="h-12 w-32 bg-secondary rounded-lg animate-pulse" />
          <div className="h-12 w-32 bg-secondary rounded-lg animate-pulse" />
        </div>

        {/* Image skeleton */}
        <div className="w-full h-96 bg-secondary rounded-xl animate-pulse mb-12" />

        {/* Content skeleton */}
        <div className="space-y-4">
          <div className="h-8 w-64 bg-secondary rounded animate-pulse" />
          <div className="h-4 w-full bg-secondary rounded animate-pulse" />
          <div className="h-4 w-full bg-secondary rounded animate-pulse" />
          <div className="h-4 w-3/4 bg-secondary rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}
