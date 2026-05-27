import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Container } from "@/components/layout/container";
import { navItems, siteConfig } from "@/lib/site";

export function Navbar() {
  return (
    <header className="border-line bg-background/86 supports-[backdrop-filter]:bg-background/78 sticky top-0 z-40 border-b backdrop-blur-xl">
      <Container size="wide">
        <nav
          aria-label="Primary navigation"
          className="flex min-h-16 items-center justify-between gap-6 py-3"
        >
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="Home"
          >
            <span className="border-foreground/20 bg-foreground text-background group-hover:bg-primary grid size-9 place-items-center rounded-sm border text-[0.68rem] font-semibold transition-colors">
              DŁ
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-sm font-medium">{siteConfig.name}</span>
              <span className="text-muted-foreground mt-1 font-mono text-[0.62rem] tracking-[0.18em] uppercase">
                Digital hub
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:bg-secondary hover:text-foreground focus-visible:ring-ring rounded-sm px-3 py-2 text-sm transition-colors focus-visible:ring-3 focus-visible:outline-none"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <details className="group relative md:hidden">
            <summary className="border-line bg-card hover:bg-secondary flex size-11 cursor-pointer list-none items-center justify-center rounded-md border transition-colors [&::-webkit-details-marker]:hidden">
              <Menu className="size-4 group-open:hidden" aria-hidden="true" />
              <X
                className="hidden size-4 group-open:block"
                aria-hidden="true"
              />
              <span className="sr-only">Toggle navigation</span>
            </summary>
            <div className="border-line bg-popover shadow-lift absolute top-[calc(100%+0.75rem)] right-0 w-[min(22rem,calc(100vw-2.5rem))] rounded-lg border p-2">
              <div className="grid gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-muted-foreground hover:bg-secondary hover:text-foreground focus-visible:ring-ring rounded-md px-3 py-3 text-sm transition-colors focus-visible:ring-3 focus-visible:outline-none"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </details>
        </nav>
      </Container>
    </header>
  );
}
