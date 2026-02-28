import { cn } from "../../../lib/utils";

const sizes = {
  sm: "size-8 text-xs",
  md: "size-10 text-sm",
  lg: "size-12 text-base",
} as const;

interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: keyof typeof sizes;
  className?: string;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function Avatar({ src, alt, name, size = "md", className }: AvatarProps) {
  const initials = name ? getInitials(name) : "?";
  const label = alt ?? name ?? "avatar";

  return (
    <span
      data-slot="avatar"
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-brand-navy font-medium text-white select-none",
        sizes[size],
        className,
      )}
      role="img"
      aria-label={label}
    >
      {src ? (
        <img src={src} alt={label} className="aspect-square size-full object-cover" />
      ) : (
        initials
      )}
    </span>
  );
}

export { Avatar, type AvatarProps };
