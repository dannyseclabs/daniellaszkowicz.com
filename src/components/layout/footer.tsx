import Link from "next/link";

import { Container } from "@/components/layout/container";
import { navItems, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-border bg-secondary/35 border-t">
      <Container className="py-10 sm:py-12">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:items-end">
          <div>
            <p className="font-heading text-2xl font-medium">
              {siteConfig.name}
            </p>
            <p className="text-muted-foreground mt-3 max-w-md text-sm leading-6">
              A calm personal archive for technical work, security thinking,
              home infrastructure, writing, and useful systems.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-4 gap-y-3 md:justify-end">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
