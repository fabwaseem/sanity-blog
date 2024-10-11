import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <input
          type={type}
          className={cn(
            "flex h-14  rounded-xl border border-input/50 w-full bg-black/50 text-white  px-4 py-2  ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            icon ? "pl-12" : "pl-4",
            className
          )}
          ref={ref}
          {...props}
        />
        {icon && (
          <div className="absolute top-3.5  left-0 flex items-center pl-3">
            {icon}
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
