import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Surface } from "@/components/layout/surface";
import { PrimaryButton, SecondaryButton } from "@/components/ui/site-buttons";

export function HomeContactCta() {
  return (
    <Section spacing="tight">
      <Container size="lg">
        <Surface className="p-6 sm:p-8 lg:p-10" variant="elevated">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-muted-foreground mb-5 font-mono text-xs tracking-[0.22em] uppercase">
                Contact
              </p>
              <h2 className="font-heading max-w-3xl text-4xl leading-tight font-medium text-balance sm:text-5xl">
                A simple signal path for future collaboration and conversation.
              </h2>
              <p className="text-muted-foreground mt-5 max-w-2xl text-base leading-7 text-pretty sm:text-lg sm:leading-8">
                The contact route is kept intentionally static for now, ready
                for preferred links, availability, and context when the content
                layer matures.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <PrimaryButton asChild>
                <Link href="/contact">
                  Contact page
                  <ArrowRight
                    className="size-4"
                    data-icon="inline-end"
                    aria-hidden="true"
                  />
                </Link>
              </PrimaryButton>
              <SecondaryButton asChild>
                <Link href="/about">About Daniel</Link>
              </SecondaryButton>
            </div>
          </div>
        </Surface>
      </Container>
    </Section>
  );
}
