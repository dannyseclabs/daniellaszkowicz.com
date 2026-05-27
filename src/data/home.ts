export const heroStats = [
  {
    value: "01",
    label: "Static-first",
    description: "Fast pages, local content, careful dependencies.",
  },
  {
    value: "08",
    label: "Core routes",
    description:
      "Projects, journal, gallery, cyber, lab, uses, about, contact.",
  },
  {
    value: "∞",
    label: "Living archive",
    description: "Built to grow without becoming heavy.",
  },
] as const;

export const currentFocusItems = [
  {
    eyebrow: "Security",
    title: "Cybersecurity notes",
    description:
      "A calm place for threat modeling, defensive thinking, lab writeups, and practical security learning.",
    status: "Notebook",
  },
  {
    eyebrow: "Infrastructure",
    title: "Homelab systems",
    description:
      "Network diagrams, self-hosted services, operating notes, and the maintenance rituals behind the stack.",
    status: "Lab",
  },
  {
    eyebrow: "Building",
    title: "Vibe coding projects",
    description:
      "Small tools, experiments, and polished utilities shaped by taste, iteration, and pragmatic shipping.",
    status: "Workshop",
  },
] as const;

export const featuredProjects = [
  {
    eyebrow: "Project system",
    title: "Selected builds index",
    description:
      "A future home for case studies, useful experiments, and technical artifacts with concise editorial framing.",
    href: "/projects",
    tags: ["Vibe coding", "Tools", "Systems"],
  },
  {
    eyebrow: "Security lab",
    title: "Defensive research shelf",
    description:
      "A structured space for notes, references, exercises, and measured cybersecurity progress.",
    href: "/cyber",
    tags: ["Cyber", "Learning", "Notes"],
  },
  {
    eyebrow: "Home infrastructure",
    title: "Homelab operating log",
    description:
      "A durable route for self-hosting records, service maps, network thinking, and lessons learned.",
    href: "/lab",
    tags: ["Homelab", "Ops", "Setup"],
  },
] as const;

export const journalPreview = [
  {
    title: "Field notes for technical learning",
    excerpt:
      "A future stream for study logs, synthesis, reflections, and the quieter parts of building skill.",
    meta: "Journal / Learning",
    href: "/journal",
  },
  {
    title: "Personal systems and self-improvement",
    excerpt:
      "A place for routines, feedback loops, habits, and the practical architecture of getting better.",
    meta: "Journal / Systems",
    href: "/journal",
  },
] as const;

export const galleryPreview = [
  {
    title: "Photography",
    description:
      "Frames, places, light, objects, and visual notes from a more personal archive.",
    href: "/gallery",
  },
  {
    title: "Work surfaces",
    description:
      "Desk details, tools, physical setup, and the texture around the digital work.",
    href: "/uses",
  },
  {
    title: "Lab snapshots",
    description:
      "Infrastructure moments, diagrams, and the visual side of maintaining systems.",
    href: "/lab",
  },
] as const;

export const skillGroups = [
  {
    title: "Security",
    items: ["Threat modeling", "Defensive notes", "Labs", "Research"],
  },
  {
    title: "Systems",
    items: ["Homelab", "Self-hosting", "Networking", "Automation"],
  },
  {
    title: "Build",
    items: ["Next.js", "Tailwind CSS", "shadcn/ui", "Vercel"],
  },
  {
    title: "Editorial",
    items: ["MDX", "Photography", "Journaling", "Knowledge systems"],
  },
] as const;
