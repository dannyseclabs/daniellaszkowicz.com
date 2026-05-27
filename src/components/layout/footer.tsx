import Link from "next/link";

import { Container } from "@/components/layout/container";
import { navItems, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-line bg-surface/70 border-t">
      <Container className="py-10 sm:py-14" size="wide">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-end">
          <div>
            <p className="font-heading text-2xl font-medium">
              {siteConfig.name}
            </p>
            <p className="text-muted-foreground mt-3 max-w-md text-sm leading-6 text-pretty">
              A static-first personal hub for technical work, quiet security
              thinking, home infrastructure, writing, photography, and useful
              systems.
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-4 gap-y-3 md:justify-end"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground focus-visible:ring-ring rounded-sm text-sm transition-colors focus-visible:ring-3 focus-visible:outline-none"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="border-line text-muted-foreground mt-10 flex flex-col gap-3 border-t pt-6 font-mono text-[0.68rem] tracking-[0.16em] uppercase sm:flex-row sm:items-center sm:justify-between">
          <span>Static-first / editorial / technical</span>
          <span>Daniel Łaszkowicz</span>
        </div>
      </Container>
    </footer>
  );
}
