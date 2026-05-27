import Link from "next/link";

import { GalleryCard } from "@/components/cards/gallery-card";
import { Container } from "@/components/layout/container";
import { Grid } from "@/components/layout/grid";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { GhostButton } from "@/components/ui/site-buttons";
import { galleryPreview } from "@/data/home";

export function HomeGalleryPreview() {
  return (
    <Section
      className="border-line/70 bg-background/58 border-y"
      id="gallery"
      spacing="tight"
    >
      <Container size="wide">
        <SectionHeading
          action={
            <GhostButton asChild>
              <Link href="/gallery">Gallery archive</Link>
            </GhostButton>
          }
          eyebrow="Gallery preview"
          title="A visual archive for photographs, places, tools, and lab traces."
          description="The gallery is ready for real images later; for now the structure reserves rhythm, aspect ratio, and editorial framing."
        />
        <Grid columns="three" gap="sm">
          {galleryPreview.map((item) => (
            <GalleryCard key={item.title} {...item} />
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
