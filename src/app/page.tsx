import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { homepageSections } from "@/lib/site";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Section className="archive-grid border-border border-b py-20 sm:py-28 lg:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="max-w-5xl">
              <p className="text-muted-foreground mb-6 font-mono text-xs tracking-[0.2em] uppercase">
                Personal digital hub
              </p>
              <h1 className="font-heading text-6xl leading-[0.9] font-medium text-balance sm:text-7xl lg:text-8xl">
                Daniel Łaszkowicz
              </h1>
            </div>
            <p className="text-muted-foreground max-w-xl text-lg leading-8">
              A calm editorial archive for projects, cybersecurity, homelab
              work, vibe coding, gallery entries, journal notes,
              self-improvement systems, and the practical setup behind it all.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="border-border bg-border grid gap-px overflow-hidden rounded-lg border md:grid-cols-2">
            {homepageSections.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group bg-card hover:bg-secondary/70 p-6 transition-colors sm:p-8"
              >
                <div className="flex items-start justify-between gap-6">
                  <h2 className="font-heading text-3xl font-medium">
                    {item.label}
                  </h2>
                  <span className="text-muted-foreground group-hover:text-foreground font-mono text-xs transition-colors">
                    0{homepageSections.indexOf(item) + 1}
                  </span>
                </div>
                <p className="text-muted-foreground mt-6 max-w-md text-sm leading-6">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
