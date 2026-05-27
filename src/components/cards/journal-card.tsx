import Link from "next/link";

import { Surface } from "@/components/layout/surface";
import { cn } from "@/lib/utils";

type JournalCardProps = {
  title: string;
  excerpt: string;
  meta?: string;
  href?: string;
  className?: string;
};

export function JournalCard({
  title,
  excerpt,
  meta,
  href,
  className,
}: JournalCardProps) {
  const card = (
    <Surface
      className={cn("p-5 sm:p-6", className)}
      interactive={Boolean(href)}
    >
      {meta ? (
        <p className="text-muted-foreground mb-6 font-mono text-xs tracking-[0.18em] uppercase">
          {meta}
        </p>
      ) : null}
      <h3 className="font-heading text-3xl leading-tight font-medium text-balance">
        {title}
      </h3>
      <p className="text-muted-foreground mt-4 text-sm leading-6 text-pretty">
        {excerpt}
      </p>
    </Surface>
  );

  if (!href) {
    return card;
  }

  return (
    <Link className="block focus:outline-none" href={href}>
      {card}
    </Link>
  );
}
