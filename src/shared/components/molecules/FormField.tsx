import { cn } from "@/lib/utils";
import { Input } from "@/shared/components/atoms/Input";
import { type InputHTMLAttributes, forwardRef, useId } from "react";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  hint?: string;
}

const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, hint, className, id: externalId, ...inputProps }, ref) => {
    const generatedId = useId();
    const id = externalId ?? generatedId;
    const errorId = `${id}-error`;
    const hintId = `${id}-hint`;

    return (
      <div className={cn("flex flex-col gap-1.5", className)}>
        <label htmlFor={id} className="text-sm font-medium text-foreground">
          {label}
        </label>
        <Input
          ref={ref}
          id={id}
          error={!!error}
          aria-describedby={error ? errorId : hint ? hintId : undefined}
          aria-invalid={!!error}
          {...inputProps}
        />
        {hint && !error && (
          <p id={hintId} className="text-xs text-muted-foreground">
            {hint}
          </p>
        )}
        {error && (
          <p id={errorId} role="alert" className="text-xs text-destructive">
            {error}
          </p>
        )}
      </div>
    );
  },
);
FormField.displayName = "FormField";

export { FormField };
