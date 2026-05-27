import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { StatCard } from "@/components/cards/stat-card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { Reveal } from "@/components/motion/reveal";
import { PrimaryButton, SecondaryButton } from "@/components/ui/site-buttons";
import { Tag } from "@/components/ui/tag";
import { heroStats } from "@/data/home";

export function HomeHero() {
  return (
    <Section
      className="editorial-grid border-line/70 relative -mt-[4.75rem] overflow-hidden border-b pt-28 sm:pt-32 lg:pt-36"
      spacing="none"
    >
      <div
        className="bg-foreground/4 pointer-events-none absolute top-28 right-[6vw] hidden h-52 w-px lg:block"
        aria-hidden="true"
      />
      <Container className="pb-12 sm:pb-16 lg:pb-20" size="wide">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.98fr)_24rem] lg:items-end">
          <Reveal>
            <Stack className="max-w-[47rem]" gap="md">
              <div className="flex flex-wrap gap-2">
                <Tag tone="accent">Personal digital hub</Tag>
                <Tag>Static-first</Tag>
              </div>
              <div>
                <h1 className="font-heading max-w-[46rem] text-[4.2rem] leading-[0.92] font-medium text-balance sm:text-[5.8rem] lg:text-[6.75rem]">
                  Daniel Łaszkowicz
                </h1>
                <p className="text-muted-foreground mt-6 max-w-[41rem] text-lg leading-8 text-pretty sm:text-[1.15rem] sm:leading-8">
                  A calm editorial foundation for cybersecurity, homelab notes,
                  vibe-coded tools, photography, journal fragments, and the
                  systems behind modern personal work.
                </p>
              </div>
              <div className="flex flex-col gap-3 pt-1 sm:flex-row">
                <PrimaryButton asChild>
                  <Link href="/projects">
                    Explore projects
                    <ArrowRight
                      className="size-4"
                      data-icon="inline-end"
                      aria-hidden="true"
                    />
                  </Link>
                </PrimaryButton>
                <SecondaryButton asChild>
                  <Link href="/journal">Read the journal</Link>
                </SecondaryButton>
              </div>
            </Stack>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative grid gap-3 sm:grid-cols-3 lg:translate-y-6 lg:grid-cols-1">
              {heroStats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
