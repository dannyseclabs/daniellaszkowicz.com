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
      className="editorial-grid border-line border-b pt-16 sm:pt-24 lg:pt-28"
      spacing="tight"
    >
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <Reveal>
            <Stack gap="lg">
              <div className="flex flex-wrap gap-2">
                <Tag tone="accent">Personal digital hub</Tag>
                <Tag>Static-first</Tag>
              </div>
              <div>
                <h1 className="font-heading max-w-5xl text-6xl leading-[0.92] font-medium text-balance sm:text-7xl lg:text-8xl">
                  Daniel Łaszkowicz
                </h1>
                <p className="text-muted-foreground mt-8 max-w-2xl text-lg leading-8 text-pretty sm:text-xl sm:leading-9">
                  A calm editorial foundation for cybersecurity, homelab notes,
                  vibe-coded tools, photography, journal fragments, and the
                  systems behind modern personal work.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
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
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
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
