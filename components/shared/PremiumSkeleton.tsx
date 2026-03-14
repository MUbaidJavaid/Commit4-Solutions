import { cn } from "@/lib/utils";

function Shimmer({ className }: { className?: string }) {
  return (
    <div className={cn("relative overflow-hidden rounded-xl bg-muted/60", className)}>
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

interface PremiumSkeletonProps {
  className?: string;
  children: React.ReactNode;
}

const PremiumSkeleton = ({ className, children }: PremiumSkeletonProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-card/70 border border-border/60 shadow-md",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 -translate-x-full animate-[shimmer_2.2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="relative">{children}</div>
    </div>
  );
};

export default PremiumSkeleton;

export function BlogCardSkeleton() {
  return (
    <div className="card-premium p-0 overflow-hidden">
      <Shimmer className="h-48 rounded-none rounded-t-2xl" />
      <div className="p-5 space-y-3">
        <div className="flex gap-2">
          <Shimmer className="h-5 w-16 rounded-full" />
          <Shimmer className="h-5 w-20 rounded-full" />
        </div>
        <Shimmer className="h-5 w-4/5" />
        <Shimmer className="h-4 w-full" />
        <Shimmer className="h-4 w-3/5" />
        <div className="flex items-center gap-2 pt-2">
          <Shimmer className="h-7 w-7 rounded-full" />
          <Shimmer className="h-3 w-24" />
        </div>
      </div>
    </div>
  );
}

export function ProjectCardSkeleton() {
  return (
    <div className="card-premium p-0 overflow-hidden">
      <Shimmer className="h-56 rounded-none rounded-t-2xl" />
      <div className="p-5 space-y-3">
        <Shimmer className="h-5 w-3/4" />
        <Shimmer className="h-4 w-full" />
        <div className="flex gap-2 pt-1">
          <Shimmer className="h-6 w-14 rounded-full" />
          <Shimmer className="h-6 w-14 rounded-full" />
          <Shimmer className="h-6 w-14 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function ServiceCardSkeleton() {
  return (
    <div className="card-premium p-6 space-y-4">
      <Shimmer className="h-10 w-10 rounded-xl" />
      <Shimmer className="h-5 w-2/3" />
      <Shimmer className="h-4 w-full" />
      <Shimmer className="h-4 w-4/5" />
      <Shimmer className="h-8 w-28 rounded-full" />
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="section-padding py-32 space-y-6">
      <Shimmer className="h-6 w-40 rounded-full" />
      <Shimmer className="h-12 w-3/4 max-w-xl" />
      <Shimmer className="h-12 w-2/3 max-w-md" />
      <Shimmer className="h-5 w-full max-w-lg" />
      <div className="flex gap-4 pt-4">
        <Shimmer className="h-12 w-40 rounded-full" />
        <Shimmer className="h-12 w-36 rounded-full" />
      </div>
    </div>
  );
}

export function BlogListSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <BlogCardSkeleton key={i} />
      ))}
    </div>
  );
}
