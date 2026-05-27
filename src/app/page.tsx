import { HomeContactCta } from "@/components/sections/home-contact-cta";
import { HomeCurrentFocus } from "@/components/sections/home-current-focus";
import { HomeFeaturedProjects } from "@/components/sections/home-featured-projects";
import { HomeGalleryPreview } from "@/components/sections/home-gallery-preview";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeJournalPreview } from "@/components/sections/home-journal-preview";
import { HomeSkillsTools } from "@/components/sections/home-skills-tools";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeCurrentFocus />
      <HomeFeaturedProjects />
      <HomeJournalPreview />
      <HomeGalleryPreview />
      <HomeSkillsTools />
      <HomeContactCta />
    </>
  );
}
