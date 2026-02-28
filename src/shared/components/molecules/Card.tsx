import { cn } from "../../../lib/utils";

interface CardProps {
  shadow?: boolean;
  className?: string;
  children: React.ReactNode;
}

function CardRoot({ shadow, className, children }: CardProps) {
  return (
    <div
      data-slot="card"
      className={cn(
        "rounded-md border border-border bg-card text-card-foreground",
        shadow && "shadow-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}

function CardHeader({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div data-slot="card-header" className={cn("border-b border-border px-4 py-3", className)}>
      {children}
    </div>
  );
}

function CardBody({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div data-slot="card-content" className={cn("px-4 py-4", className)}>
      {children}
    </div>
  );
}

function CardFooter({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div data-slot="card-footer" className={cn("border-t border-border px-4 py-3", className)}>
      {children}
    </div>
  );
}

const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});

export { Card };
