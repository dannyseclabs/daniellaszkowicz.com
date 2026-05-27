import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type SurfaceVariant = "default" | "muted" | "elevated" | "transparent";

type SurfaceProps = ComponentPropsWithoutRef<"div"> & {
  variant?: SurfaceVariant;
  interactive?: boolean;
};

const variants: Record<SurfaceVariant, string> = {
  default:
    "border-line/80 bg-card/86 text-card-foreground shadow-line backdrop-blur-sm",
  muted:
    "border-line/75 bg-surface-muted/78 text-foreground shadow-line backdrop-blur-sm",
  elevated:
    "border-line/80 bg-surface-elevated/88 text-card-foreground shadow-soft backdrop-blur-md",
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
