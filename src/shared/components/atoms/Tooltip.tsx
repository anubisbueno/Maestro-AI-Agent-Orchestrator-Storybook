import { cn } from "@/lib/utils";
import { useId } from "react";

interface TooltipProps {
  text: string;
  children: React.ReactNode;
  className?: string;
}

function Tooltip({ text, children, className }: TooltipProps) {
  const id = useId();

  return (
    <span className={cn("group relative inline-flex", className)}>
      <span aria-describedby={id}>{children}</span>
      <span
        id={id}
        role="tooltip"
        data-slot="tooltip-content"
        className={cn(
          "pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2",
          "rounded-md bg-foreground px-2 py-1 text-xs text-background whitespace-nowrap",
          "opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100",
        )}
      >
        {text}
      </span>
    </span>
  );
}

export { Tooltip, type TooltipProps };
