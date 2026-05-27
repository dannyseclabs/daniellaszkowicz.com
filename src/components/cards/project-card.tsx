import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Surface } from "@/components/layout/surface";
import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  title: string;
  description: string;
  eyebrow?: string;
  href?: string;
  tags?: readonly string[];
  className?: string;
};

export function ProjectCard({
  title,
  description,
  eyebrow,
  href,
  tags,
  className,
}: ProjectCardProps) {
  const card = (
    <Surface
      className={cn("min-h-72 p-5 sm:p-6", className)}
      interactive={Boolean(href)}
      variant="elevated"
    >
      <div className="flex min-h-full flex-col">
        <div className="flex items-start justify-between gap-6">
          {eyebrow ? (
            <p className="text-muted-foreground font-mono text-xs tracking-[0.18em] uppercase">
              {eyebrow}
            </p>
          ) : null}
          {href ? (
            <ArrowUpRight
              className="text-muted-foreground group-hover/card:text-foreground size-4 transition-colors"
              aria-hidden="true"
            />
          ) : null}
        </div>
        <div className="mt-auto pt-14">
          <h3 className="font-heading text-3xl leading-tight font-medium text-balance">
            {title}
          </h3>
          <p className="text-muted-foreground mt-4 text-sm leading-6 text-pretty">
            {description}
          </p>
          {tags?.length ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </Surface>
  );

  if (!href) {
    return card;
  }

  return (
    <Link className="group/card block focus:outline-none" href={href}>
      {card}
    </Link>
  );
}
