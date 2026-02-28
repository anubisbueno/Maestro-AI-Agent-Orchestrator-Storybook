import { Input as ShadcnInput } from "../../../components/ui/input";
import { cn } from "../../../lib/utils";
import { forwardRef } from "react";

interface InputProps extends React.ComponentProps<typeof ShadcnInput> {
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ error, className, ...props }, ref) => {
  return (
    <ShadcnInput
      ref={ref}
      className={cn(error && "border-destructive focus-visible:ring-destructive/50", className)}
      aria-invalid={error || undefined}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input, type InputProps };
