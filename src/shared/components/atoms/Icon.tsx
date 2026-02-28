import { cn } from "../../../lib/utils";
import type { LucideIcon } from "lucide-react";

const sizes = {
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
} as const;

interface IconProps {
  icon: LucideIcon;
  size?: keyof typeof sizes;
  className?: string;
  label?: string;
}

function Icon({ icon: LucideIcon, size = "md", className, label }: IconProps) {
  return (
    <LucideIcon className={cn(sizes[size], className)} aria-hidden={!label} aria-label={label} />
  );
}

export { Icon, type IconProps };
