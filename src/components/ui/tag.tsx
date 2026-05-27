import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type TagTone = "neutral" | "accent" | "warm";

type TagProps = ComponentPropsWithoutRef<"span"> & {
  tone?: TagTone;
};

const tones: Record<TagTone, string> = {
  neutral: "border-line bg-background/70 text-muted-foreground",
  accent: "border-accent/35 bg-accent/12 text-accent-foreground",
  warm: "border-secondary bg-secondary/70 text-secondary-foreground",
};

export function Tag({ className, tone = "neutral", ...props }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex min-h-7 items-center rounded-full border px-3 py-1 font-mono text-[0.68rem] tracking-[0.14em] uppercase",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
