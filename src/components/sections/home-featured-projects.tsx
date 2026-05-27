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
    <Section className="bg-surface/55 border-line border-y" id="projects">
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
        <Grid columns="three">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
