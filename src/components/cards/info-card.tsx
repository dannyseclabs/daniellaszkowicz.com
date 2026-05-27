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
    <Surface className={cn("p-5 sm:p-6", className)} interactive>
      <div className="flex min-h-full flex-col gap-8">
        <div>
          {eyebrow ? (
            <p className="text-muted-foreground mb-4 font-mono text-xs tracking-[0.18em] uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h3 className="font-heading text-2xl leading-tight font-medium text-balance">
            {title}
          </h3>
          <p className="text-muted-foreground mt-4 text-sm leading-6 text-pretty">
            {description}
          </p>
        </div>
        {meta ? <div className="mt-auto">{meta}</div> : null}
      </div>
    </Surface>
  );
}
