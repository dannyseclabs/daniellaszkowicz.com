import { InfoCard } from "@/components/cards/info-card";
import { Container } from "@/components/layout/container";
import { Grid } from "@/components/layout/grid";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Tag } from "@/components/ui/tag";
import { currentFocusItems } from "@/data/home";

export function HomeCurrentFocus() {
  return (
    <Section id="current-focus">
      <Container size="wide">
        <SectionHeading
          eyebrow="Current focus"
          title="A few clear lanes, kept intentionally quiet."
          description="The foundation is organized around repeatable pillars: secure thinking, useful infrastructure, practical builds, and writing that compounds."
        />
        <Grid columns="three">
          {currentFocusItems.map((item) => (
            <InfoCard
              key={item.title}
              description={item.description}
              eyebrow={item.eyebrow}
              meta={<Tag tone="warm">{item.status}</Tag>}
              title={item.title}
            />
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
