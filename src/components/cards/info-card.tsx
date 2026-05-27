import type { ReactNode } from "react";

import { Surface } from "@/components/layout/surface";
import { cn } from "@/lib/utils";

type InfoCardProps = {
  eyebrow?: string;
  title: string;
  description: string;
  meta?: ReactNode;
  className?: string;
};

export function InfoCard({
  eyebrow,
  title,
  description,
  meta,
  className,
}: InfoCardProps) {
  return (
    <Surface className={cn("p-5", className)} interactive>
      <div className="flex min-h-full flex-col gap-6">
        <div>
          {eyebrow ? (
            <p className="text-muted-foreground mb-3 font-mono text-xs tracking-[0.18em] uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h3 className="font-heading text-[1.65rem] leading-tight font-medium text-balance">
            {title}
          </h3>
          <p className="text-muted-foreground mt-3 text-sm leading-6 text-pretty">
            {description}
          </p>
        </div>
        {meta ? <div className="mt-auto">{meta}</div> : null}
      </div>
    </Surface>
  );
}
