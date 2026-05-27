import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type SectionSpacing = "none" | "tight" | "default" | "loose";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  spacing?: SectionSpacing;
};

const sectionSpacing: Record<SectionSpacing, string> = {
  none: "py-0",
  tight: "section-spacing-tight",
  default: "section-spacing",
  loose: "py-24 sm:py-32 lg:py-40",
};

export function Section({
  className,
  spacing = "default",
  ...props
}: SectionProps) {
  return (
    <section className={cn(sectionSpacing[spacing], className)} {...props} />
  );
}
