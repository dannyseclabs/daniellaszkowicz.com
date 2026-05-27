import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Link from "next/link";

import { Prose } from "@/components/layout/prose";

type AnchorProps = ComponentPropsWithoutRef<"a">;
type HeadingProps = ComponentPropsWithoutRef<"h2">;

function MdxLink({ href, children, ...props }: AnchorProps) {
  if (!href) {
    return <a {...props}>{children}</a>;
  }

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} rel="noreferrer" target="_blank" {...props}>
      {children}
    </a>
  );
}

function MdxHeading({ children, ...props }: HeadingProps) {
  return <h2 {...props}>{children}</h2>;
}

export function MdxProse({ children }: { children: ReactNode }) {
  return <Prose>{children}</Prose>;
}

export const mdxComponents = {
  a: MdxLink,
  h2: MdxHeading,
  wrapper: MdxProse,
};
