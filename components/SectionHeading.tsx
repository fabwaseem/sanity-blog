import { cn } from "@/lib/utils";
import React from "react";

const SectionHeading = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h6
      className={cn(
        "text-primary uppercase font-popins text-xl font-medium mb-3",
        className
      )}
    >
      {children}
    </h6>
  );
};

export default SectionHeading;
