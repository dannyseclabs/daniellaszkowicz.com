import Link from "next/link";

import { Container } from "@/components/layout/container";
import { navItems, siteConfig } from "@/lib/site";

export function Navbar() {
  return (
    <header className="border-border/70 bg-background/88 sticky top-0 z-40 border-b backdrop-blur-xl">
      <Container>
        <nav className="flex min-h-16 items-center justify-between gap-6 py-3">
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="Home"
          >
            <span className="border-foreground/20 bg-foreground text-background group-hover:bg-primary grid size-8 place-items-center rounded-sm border text-[0.68rem] font-semibold transition-colors">
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
                className="text-muted-foreground hover:bg-secondary hover:text-foreground rounded-sm px-3 py-2 text-sm transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </Container>
    </header>
  );
}
