# Frontend Stack

This site is configured as a premium-capable, static-first portfolio foundation. The packages below are installed to support polished interface work, motion, galleries, 3D experiments, MDX writing, forms, SEO, analytics, and code quality without making the default app heavy.

## Installed Packages

### Core UI and Utilities

- `lucide-react`: primary icon set for interface controls and shadcn-compatible icons.
- `@tabler/icons-react`: secondary icon set when Tabler has a better editorial or portfolio symbol.
- `clsx`: conditional class composition.
- `tailwind-merge`: conflict-safe Tailwind class merging.
- `class-variance-authority`: component variant APIs for shadcn-style primitives.
- `zod`: schema validation for forms, content metadata, and typed config.

### shadcn/ui Source Components

Installed into `src/components/ui`:

- `accordion`
- `avatar`
- `badge`
- `button`
- `card`
- `command`
- `dialog`
- `dropdown-menu`
- `input`
- `input-group`
- `select`
- `separator`
- `sheet`
- `skeleton`
- `tabs`
- `textarea`
- `tooltip`

Supporting shadcn dependencies installed by the CLI include `radix-ui`, `cmdk`, `tw-animate-css`, and `shadcn` for Tailwind CSS integration. These components are local source, so customize them in the repo instead of treating shadcn as a black-box component library.

### Motion and Interactions

- `motion`: React animation primitives for route sections, reveal effects, and small interaction states.
- `gsap`: timeline-based animation for complex editorial sequences.
- `lenis`: smooth scrolling for selected immersive pages.
- `@react-spring/web`: physics-based motion for tactile UI or generative interactions.
- `react-intersection-observer`: viewport detection for lazy reveal and media loading.
- `split-type`: text splitting for precise headline animation.

### Gallery and Carousel

- `embla-carousel-react`: lightweight carousel foundation for custom portfolio galleries.
- `swiper`: feature-rich carousel for complex touch galleries when Embla is not enough.
- `react-photo-album`: responsive photo grids and editorial image layouts.
- `yet-another-react-lightbox`: full-screen image viewing for galleries.

### 3D and Advanced Visuals

- `three`: low-level WebGL and 3D rendering.
- `@react-three/fiber`: React renderer for Three.js scenes.
- `@react-three/drei`: helpers for React Three Fiber scenes.
- `ogl`: smaller WebGL toolkit for shader-led effects when React Three Fiber is too much.

### MDX and Blog

- `next-mdx-remote`: render MDX content in Next.js without turning content into app routes by default.
- `gray-matter`: parse frontmatter from MDX files.
- `reading-time`: estimate article reading time.
- `@mdx-js/react`: MDX React runtime utilities.
- `remark-gfm`: GitHub-flavored Markdown support.
- `rehype-slug`: heading IDs for article sections.
- `rehype-autolink-headings`: direct heading anchor links.

### Forms

- `react-hook-form`: performant client-side form state.
- `@hookform/resolvers`: Zod and other schema resolvers for forms.
- `zod`: shared validation schemas.

### SEO, Analytics, and Performance

- `next-sitemap`: sitemap and robots generation after builds.
- `@vercel/analytics`: Vercel Web Analytics, mounted in `src/app/layout.tsx`.
- `@vercel/speed-insights`: Vercel Speed Insights, mounted in `src/app/layout.tsx`.

### Code Quality

- `prettier`: formatting.
- `prettier-plugin-tailwindcss`: stable Tailwind class ordering.
- `eslint-config-prettier`: disables ESLint rules that conflict with Prettier.

## Heavy Packages

Treat these as route-local tools, not global app dependencies:

- `three`, `@react-three/fiber`, `@react-three/drei`
- `ogl`
- `gsap`
- `lenis`
- `swiper`
- `yet-another-react-lightbox`
- `react-photo-album` for large galleries
- `@react-spring/web` for complex animated scenes
- `split-type` for animated typography

`motion` and `embla-carousel-react` are more reasonable for small UI islands, but they should still be imported only where needed.

## Dynamic Import Rules

Use `next/dynamic` for components that depend on browser APIs, large animation timelines, WebGL, or full-screen media viewers.

Good candidates for dynamic imports:

- 3D scenes using `three`, `@react-three/fiber`, `@react-three/drei`, or `ogl`
- Lightboxes using `yet-another-react-lightbox`
- Feature-rich carousels using `swiper`
- GSAP timeline sections
- Lenis smooth-scroll wrappers
- SplitType headline animations
- Photo-heavy gallery routes

Use `{ ssr: false }` only when the component cannot render on the server because it needs `window`, canvas, WebGL, layout measurements, or other browser-only APIs. Otherwise, prefer Server Components plus a small Client Component for the interactive part.

## Animation and 3D Rules

- Motion should clarify hierarchy, pacing, or interaction. Do not animate every section by default.
- Keep navigation, reading, and core content usable with JavaScript disabled where practical.
- Respect `prefers-reduced-motion` for all decorative movement.
- Avoid global smooth scrolling. Use Lenis only for specific immersive pages.
- Keep 3D/WebGL behind dynamic imports and provide a static fallback or strong non-3D layout.
- Do not put 3D scenes in the root layout or shared navigation.
- Keep one primary visual idea per page. Avoid stacking carousels, parallax, shaders, and text-splitting in the same viewport unless there is a strong editorial reason.

## Performance Guidelines

- Server Components are the default. Add `"use client"` only to focused interactive islands.
- Keep MDX and portfolio content static or build-time parsed until a real CMS is introduced.
- Use `next/image` for local and remote imagery once visual assets are added.
- Use `next/font` for fonts to avoid layout shift.
- Keep analytics and speed insights as the only global client scripts for now.
- Prefer Embla over Swiper for simple carousels.
- Prefer CSS transitions or `motion` for small UI details before reaching for GSAP.
- Run `npm run build` and `npm run check` before publishing larger changes.
- Watch route bundle sizes when adding visual pages. Heavy imports should appear only in the route that needs them.
- Do not add authentication, backend APIs, database clients, or CMS SDKs until the site actually needs them.

## Useful Commands

- `npm run dev`: start local development.
- `npm run build`: production build, followed by sitemap generation.
- `npm run lint`: run ESLint.
- `npm run typecheck`: run TypeScript without emitting files.
- `npm run format`: format the project.
- `npm run check`: lint, typecheck, and verify formatting.
