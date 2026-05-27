import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type ProseProps = ComponentPropsWithoutRef<"article">;

export function Prose({ className, ...props }: ProseProps) {
  return (
    <article
      className={cn(
        "text-foreground max-w-[var(--content-width-prose)] text-base leading-8",
        "[&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4",
        "[&_blockquote]:border-line [&_blockquote]:font-heading [&_blockquote]:border-l [&_blockquote]:pl-5 [&_blockquote]:text-2xl [&_blockquote]:leading-snug",
        "[&_code]:bg-secondary [&_code]:rounded-sm [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-sm",
        "[&_h2]:font-heading [&_h2]:text-4xl [&_h2]:leading-tight [&_h2]:font-medium",
        "[&_h3]:font-heading [&_h3]:text-2xl [&_h3]:leading-tight [&_h3]:font-medium",
        "[&_li]:my-2 [&_p]:my-6 [&_ul]:my-6 [&_ul]:list-disc [&_ul]:pl-5",
        className,
      )}
      {...props}
    />
  );
}
