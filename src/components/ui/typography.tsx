import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const typographyVariants = cva("text-foreground font-normal", {
  variants: {
    variant: {
      subtitle1: "text-base leading-7",
      subtitle2: "text-sm font-medium",
      body1: "text-base",
      body2: "text-sm",
      button: "text-sm font-medium",
      caption: "text-xs",
      overline: "text-xs leading-8",
    },
  },
  defaultVariants: {
    variant: "body1",
  },
});

interface typographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  children?: React.ReactNode;
  as?: "p" | "span" | "blockquote";
}

const Typography = ({
  variant,
  children,
  className,
  as = "p",
  ...rest
}: typographyProps) => {
  const Tag = as;

  return (
    <Tag className={cn(typographyVariants({ variant }), className)} {...rest}>
      {children}
    </Tag>
  );
};

export default Typography;
