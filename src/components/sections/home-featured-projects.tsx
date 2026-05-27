import Link from "next/link";

import { ProjectCard } from "@/components/cards/project-card";
import { Container } from "@/components/layout/container";
import { Grid } from "@/components/layout/grid";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { GhostButton } from "@/components/ui/site-buttons";
import { featuredProjects } from "@/data/home";

export function HomeFeaturedProjects() {
  return (
    <Section
      className="border-line/70 bg-surface/48 border-y"
      id="projects"
      spacing="tight"
    >
      <Container size="wide">
        <SectionHeading
          action={
            <GhostButton asChild>
              <Link href="/projects">Project archive</Link>
            </GhostButton>
          }
          eyebrow="Featured projects"
          title="Project slots before the real case studies arrive."
          description="Cards are ready for polished builds, experiments, utilities, and security or homelab artifacts."
        />
        <Grid columns="three" gap="sm">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
