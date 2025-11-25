export default function OpportunitySkeleton() {
  return (
    <div className="card-modern animate-pulse">
      {/* Category Badge Skeleton */}
      <div className="h-6 w-32 bg-slate-200 rounded-full mb-4"></div>
      
      {/* Title Skeleton */}
      <div className="h-7 bg-slate-200 rounded-lg mb-3 w-3/4"></div>
      
      {/* Organization Skeleton */}
      <div className="h-5 bg-slate-200 rounded-lg mb-4 w-1/2"></div>
      
      {/* Description Skeleton */}
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-slate-200 rounded w-full"></div>
        <div className="h-4 bg-slate-200 rounded w-5/6"></div>
        <div className="h-4 bg-slate-200 rounded w-4/6"></div>
      </div>
      
      {/* Metadata Skeleton */}
      <div className="flex items-center gap-4 mb-4">
        <div className="h-4 w-24 bg-slate-200 rounded"></div>
        <div className="h-4 w-20 bg-slate-200 rounded"></div>
      </div>
      
      {/* Button Skeleton */}
      <div className="h-10 bg-slate-200 rounded-lg w-full"></div>
    </div>
  )
}
