import { Container } from "@/components/layout/container";
import { Grid } from "@/components/layout/grid";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Surface } from "@/components/layout/surface";
import { SkillBadge } from "@/components/ui/skill-badge";
import { skillGroups } from "@/data/home";

export function HomeSkillsTools() {
  return (
    <Section id="skills">
      <Container size="wide">
        <SectionHeading
          eyebrow="Skills and tools"
          title="Technical without losing the human texture."
          description="A reusable system for showing tools, learning areas, and preferred working modes without turning the site into a resume grid."
        />
        <Grid columns="four">
          {skillGroups.map((group) => (
            <Surface className="p-5 sm:p-6" key={group.title}>
              <h3 className="font-heading text-2xl font-medium">
                {group.title}
              </h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <SkillBadge key={item}>{item}</SkillBadge>
                ))}
              </div>
            </Surface>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
