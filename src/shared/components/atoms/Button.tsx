import { Button as ShadcnButton, type buttonVariants } from "../../../components/ui/button";
import type { VariantProps } from "class-variance-authority";

const VARIANT_MAP = { primary: "default" } as const;
const SIZE_MAP = { md: "default" } as const;

type BrandVariant = "primary" | "secondary" | "ghost" | "outline" | "destructive" | "link";
type BrandSize = "sm" | "md" | "lg" | "icon";

type ButtonProps = Omit<React.ComponentProps<typeof ShadcnButton>, "variant" | "size"> & {
  variant?: BrandVariant;
  size?: BrandSize;
};

function Button({ variant = "primary", size = "md", ...props }: ButtonProps) {
  const mappedVariant = VARIANT_MAP[variant as keyof typeof VARIANT_MAP] ?? variant;
  const mappedSize = SIZE_MAP[size as keyof typeof SIZE_MAP] ?? size;

  return (
    <ShadcnButton
      variant={mappedVariant as VariantProps<typeof buttonVariants>["variant"]}
      size={mappedSize as VariantProps<typeof buttonVariants>["size"]}
      {...props}
    />
  );
}

export { Button, type ButtonProps };
