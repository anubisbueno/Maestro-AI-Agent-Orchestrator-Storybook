import { Skeleton as ShadcnSkeleton } from "../../../components/ui/skeleton";
import { cn } from "../../../lib/utils";

interface SkeletonProps extends React.ComponentProps<typeof ShadcnSkeleton> {
  className?: string;
}

function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <ShadcnSkeleton role="status" aria-label="Carregando..." className={cn(className)} {...props} />
  );
}

export { Skeleton };
