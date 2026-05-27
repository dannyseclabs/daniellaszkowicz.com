import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type GridColumns = "auto" | "two" | "three" | "four";
type GridGap = "sm" | "md" | "lg";

type GridProps = ComponentPropsWithoutRef<"div"> & {
  columns?: GridColumns;
  gap?: GridGap;
};

const columns: Record<GridColumns, string> = {
  auto: "grid-cols-1",
  two: "grid-cols-1 md:grid-cols-2",
  three: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
  four: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

const gaps: Record<GridGap, string> = {
  sm: "gap-4",
  md: "gap-5 sm:gap-6",
  lg: "gap-6 sm:gap-8",
};

export function Grid({
  className,
  columns: columnCount = "auto",
  gap = "md",
  ...props
}: GridProps) {
  return (
    <div
      className={cn("grid", columns[columnCount], gaps[gap], className)}
      {...props}
    />
  );
}
