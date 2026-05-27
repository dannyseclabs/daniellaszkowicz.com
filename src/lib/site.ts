export const siteConfig = {
  name: "Daniel Łaszkowicz",
  url: "https://daniellaszkowicz.com",
  description:
    "A premium personal digital hub for projects, cybersecurity, homelab notes, vibe coding, gallery work, journaling, and personal systems.",
};

export const navItems = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/journal", label: "Journal" },
  { href: "/gallery", label: "Gallery" },
  { href: "/cyber", label: "Cyber" },
  { href: "/lab", label: "Lab" },
  { href: "/uses", label: "Uses" },
  { href: "/contact", label: "Contact" },
] as const;

export const routeIntros = {
  about: {
    eyebrow: "Personal archive",
    title: "About",
    description:
      "The longer-form story behind the work, habits, technical interests, and systems shaping this digital hub.",
  },
  projects: {
    eyebrow: "Selected builds",
    title: "Projects",
    description:
      "A curated index of polished work, experiments, vibe-coded tools, and technical explorations.",
  },
  journal: {
    eyebrow: "Notes and essays",
    title: "Journal",
    description:
      "Personal writing, field notes, reflections, and editorial dispatches from the archive.",
  },
  gallery: {
    eyebrow: "Visual log",
    title: "Gallery",
    description:
      "A quiet visual archive for images, objects, places, screenshots, and moments worth saving.",
  },
  cyber: {
    eyebrow: "Security notebook",
    title: "Cybersecurity",
    description:
      "Threat modeling notes, defensive thinking, labs, tooling, and research without the theatrics.",
  },
  lab: {
    eyebrow: "Home infrastructure",
    title: "Homelab",
    description:
      "Servers, services, network diagrams, self-hosted tools, and lessons from maintaining a personal lab.",
  },
  uses: {
    eyebrow: "Setup",
    title: "Uses",
    description:
      "Hardware, software, desk objects, rituals, and the practical tools behind the work.",
  },
  contact: {
    eyebrow: "Signal",
    title: "Contact",
    description:
      "A simple static contact page for future links, availability, and preferred ways to reach Daniel.",
  },
} as const;

export const homepageSections = [
  {
    label: "Projects",
    href: "/projects",
    description:
      "Case studies, utility builds, and experiments with a practical edge.",
  },
  {
    label: "Cybersecurity",
    href: "/cyber",
    description:
      "Security notes, defensive thinking, and research written plainly.",
  },
  {
    label: "Homelab",
    href: "/lab",
    description:
      "Infrastructure, self-hosting, network diagrams, and operating notes.",
  },
  {
    label: "Journal",
    href: "/journal",
    description:
      "Personal essays, field notes, progress logs, and editorial fragments.",
  },
] as const;
