import { cn } from "@/lib/utils";
import React, { forwardRef, InputHTMLAttributes } from "react";

type CheckboxProps = InputHTMLAttributes<HTMLInputElement>;

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, className, ...props }, ref) => {
    return (
      <input
        type="checkbox"
        id={id}
        ref={ref}
        className={cn(
          "w-4 h-4 text-primary bg-background border border-input rounded-sm focus:ring-primary focus:ring-offset-background focus:ring-2 ",
          className
        )}
        {...props}
      />
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
