import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type ContainerSize = "sm" | "md" | "lg" | "xl" | "wide" | "full";

type ContainerProps = ComponentPropsWithoutRef<"div"> & {
  size?: ContainerSize;
};

const containerSizes: Record<ContainerSize, string> = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  wide: "max-w-[var(--content-width-wide)]",
  full: "max-w-none",
};

export function Container({
  className,
  size = "xl",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-[var(--page-gutter)]",
        containerSizes[size],
        className,
      )}
      {...props}
    />
  );
}
