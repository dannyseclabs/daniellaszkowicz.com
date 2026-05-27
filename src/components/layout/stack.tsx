import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type StackGap = "xs" | "sm" | "md" | "lg" | "xl";

type StackProps = ComponentPropsWithoutRef<"div"> & {
  gap?: StackGap;
};

const gaps: Record<StackGap, string> = {
  xs: "gap-2",
  sm: "gap-3",
  md: "gap-5",
  lg: "gap-8",
  xl: "gap-12",
};

export function Stack({ className, gap = "md", ...props }: StackProps) {
  return (
    <div className={cn("flex flex-col", gaps[gap], className)} {...props} />
  );
}
