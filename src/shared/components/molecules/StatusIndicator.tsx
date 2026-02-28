import { cn } from "@/lib/utils";
import { Icon } from "@/shared/components/atoms/Icon";
import { AlertCircle, Check, Clock, Minus } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const config = {
  online: {
    dot: "bg-status-online",
    text: "text-green-800",
    label: "Online",
    icon: Check,
  },
  offline: {
    dot: "bg-status-offline",
    text: "text-gray-600",
    label: "Offline",
    icon: Minus,
  },
  busy: {
    dot: "bg-status-busy",
    text: "text-amber-800",
    label: "Busy",
    icon: Clock,
  },
  error: {
    dot: "bg-status-error",
    text: "text-red-800",
    label: "Error",
    icon: AlertCircle,
  },
} as const satisfies Record<string, { dot: string; text: string; label: string; icon: LucideIcon }>;

interface StatusIndicatorProps {
  status: keyof typeof config;
  className?: string;
}

function StatusIndicator({ status, className }: StatusIndicatorProps) {
  const { dot, text, label, icon } = config[status];

  return (
    <span className={cn("inline-flex items-center gap-1.5", text, className)}>
      <span className={cn("size-2 shrink-0 rounded-full", dot)} aria-hidden="true" />
      <Icon icon={icon} size="sm" className={text} />
      <span className="text-sm font-medium">{label}</span>
    </span>
  );
}

export { StatusIndicator };
