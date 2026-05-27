import Link from "next/link";

import { JournalCard } from "@/components/cards/journal-card";
import { Container } from "@/components/layout/container";
import { Grid } from "@/components/layout/grid";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { SecondaryButton } from "@/components/ui/site-buttons";
import { journalPreview } from "@/data/home";

export function HomeJournalPreview() {
  return (
    <Section id="journal" spacing="tight">
      <Container size="lg">
        <SectionHeading
          action={
            <SecondaryButton asChild>
              <Link href="/journal">Journal index</Link>
            </SecondaryButton>
          }
          eyebrow="Journal preview"
          title="Writing as a technical and personal instrument."
          description="The journal route is prepared for essays, notes, learning logs, and self-improvement systems without needing runtime fetching."
        />
        <Grid columns="two">
          {journalPreview.map((entry) => (
            <JournalCard key={entry.title} {...entry} />
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
