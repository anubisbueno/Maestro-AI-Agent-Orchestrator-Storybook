import { Badge as ShadcnBadge, type badgeVariants } from "../../../components/ui/badge";
import { cn } from "../../../lib/utils";
import type { VariantProps } from "class-variance-authority";

const statusStyles = {
  online: "bg-status-online/20 text-green-800 border-transparent",
  offline: "bg-status-offline/20 text-gray-600 border-transparent",
  busy: "bg-status-busy/20 text-amber-800 border-transparent",
  error: "bg-status-error/20 text-red-800 border-transparent",
} as const;

type StatusVariant = keyof typeof statusStyles;
type ShadcnVariant = NonNullable<VariantProps<typeof badgeVariants>["variant"]>;
type BadgeVariant = ShadcnVariant | StatusVariant;

type BadgeProps = Omit<React.ComponentProps<typeof ShadcnBadge>, "variant"> & {
  variant?: BadgeVariant;
};

function Badge({ variant = "default", className, ...props }: BadgeProps) {
  const statusClass = statusStyles[variant as StatusVariant];

  if (statusClass) {
    return <ShadcnBadge variant="outline" className={cn(statusClass, className)} {...props} />;
  }

  return <ShadcnBadge variant={variant as ShadcnVariant} className={className} {...props} />;
}

export { Badge, type BadgeProps, type BadgeVariant };
