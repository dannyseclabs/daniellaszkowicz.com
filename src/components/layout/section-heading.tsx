import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 flex flex-col gap-6 sm:mb-12 lg:flex-row lg:items-end lg:justify-between",
        align === "center" && "mx-auto max-w-3xl text-center lg:items-center",
        className,
      )}
    >
      <div className="max-w-3xl">
        {eyebrow ? (
          <p className="text-muted-foreground mb-4 font-mono text-xs tracking-[0.22em] uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="font-heading text-4xl leading-[1.02] font-medium text-balance sm:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="text-muted-foreground mt-5 max-w-2xl text-base leading-7 text-pretty sm:text-lg sm:leading-8">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
