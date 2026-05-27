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
        "mb-8 flex flex-col gap-5 sm:mb-10 lg:flex-row lg:items-end lg:justify-between",
        align === "center" && "mx-auto max-w-3xl text-center lg:items-center",
        className,
      )}
    >
      <div className="max-w-[var(--content-width-reading)]">
        {eyebrow ? (
          <p className="text-muted-foreground mb-3 font-mono text-xs tracking-[0.22em] uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="font-heading text-4xl leading-[1.04] font-medium text-balance sm:text-[2.8rem]">
          {title}
        </h2>
        {description ? (
          <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-7 text-pretty sm:text-[1.05rem] sm:leading-8">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
