import { cn } from "../../../lib/utils";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

function H1({ className, children }: TypographyProps) {
  return (
    <h1 className={cn("font-display text-3xl font-bold text-foreground", className)}>{children}</h1>
  );
}

function H2({ className, children }: TypographyProps) {
  return (
    <h2 className={cn("font-display text-2xl font-semibold text-foreground", className)}>
      {children}
    </h2>
  );
}

function H3({ className, children }: TypographyProps) {
  return (
    <h3 className={cn("font-display text-xl font-semibold text-foreground", className)}>
      {children}
    </h3>
  );
}

function Text({ className, children }: TypographyProps) {
  return <p className={cn("font-body text-base text-foreground", className)}>{children}</p>;
}

function Small({ className, children }: TypographyProps) {
  return <span className={cn("text-sm text-muted-foreground", className)}>{children}</span>;
}

export { H1, H2, H3, Text, Small };
