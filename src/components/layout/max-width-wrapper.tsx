import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type MaxWidth = "prose" | "narrow" | "default" | "wide" | "full";

type MaxWidthWrapperProps = ComponentPropsWithoutRef<"div"> & {
  width?: MaxWidth;
};

const widths: Record<MaxWidth, string> = {
  prose: "max-w-[var(--content-width-prose)]",
  narrow: "max-w-3xl",
  default: "max-w-[var(--content-width)]",
  wide: "max-w-[var(--content-width-wide)]",
  full: "max-w-none",
};

export function MaxWidthWrapper({
  className,
  width = "default",
  ...props
}: MaxWidthWrapperProps) {
  return <div className={cn("w-full", widths[width], className)} {...props} />;
}
