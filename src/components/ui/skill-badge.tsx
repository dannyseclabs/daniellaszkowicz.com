import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type SkillBadgeProps = ComponentPropsWithoutRef<"span"> & {
  detail?: string;
};

export function SkillBadge({
  children,
  className,
  detail,
  ...props
}: SkillBadgeProps) {
  return (
    <span
      className={cn(
        "border-line bg-card text-foreground shadow-line inline-flex min-h-10 items-center gap-2 rounded-md border px-3 text-sm",
        className,
      )}
      {...props}
    >
      <span className="bg-accent size-1.5 rounded-full" aria-hidden="true" />
      <span>{children}</span>
      {detail ? (
        <span className="text-muted-foreground font-mono text-[0.68rem] uppercase">
          {detail}
        </span>
      ) : null}
    </span>
  );
}
