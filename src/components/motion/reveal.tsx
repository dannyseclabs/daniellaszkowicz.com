import type { CSSProperties, ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type RevealProps = ComponentPropsWithoutRef<"div"> & {
  delay?: number;
};

export function Reveal({ className, delay = 0, style, ...props }: RevealProps) {
  return (
    <div
      className={cn("reveal", className)}
      style={{ "--reveal-delay": `${delay}ms`, ...style } as CSSProperties}
      {...props}
    />
  );
}
