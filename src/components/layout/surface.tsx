import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type SurfaceVariant = "default" | "muted" | "elevated" | "transparent";

type SurfaceProps = ComponentPropsWithoutRef<"div"> & {
  variant?: SurfaceVariant;
  interactive?: boolean;
};

const variants: Record<SurfaceVariant, string> = {
  default: "border-line bg-card text-card-foreground",
  muted: "border-line bg-surface-muted text-foreground",
  elevated: "border-line bg-surface-elevated text-card-foreground shadow-soft",
  transparent: "border-line bg-transparent text-foreground",
};

export function Surface({
  className,
  variant = "default",
  interactive = false,
  ...props
}: SurfaceProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-panel)] border",
        variants[variant],
        interactive && "hover-lift",
        className,
      )}
      {...props}
    />
  );
}
