<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# Project Notes

This is Daniel Łaszkowicz's static-first personal digital hub built with Next.js App Router, Tailwind CSS v4, and shadcn/ui source components.

- Keep pages and layouts as Server Components by default. Add `"use client"` only to small interactive islands.
- Do not add a backend, authentication, CMS, or global state layer unless the owner explicitly asks for it.
- Keep the tone premium, editorial, calm, Scandinavian, and lightly technical. Avoid cyberpunk, gamer visuals, and generic SaaS dashboard patterns.
- Keep the homepage and editorial routes lightweight. Import heavy visual libraries only inside the component or route that needs them.
- Use `next/dynamic` for WebGL, large galleries, lightboxes, GSAP sequences, Lenis smooth scrolling, and other browser-only visual modules.
- Prefer static content, MDX files, and build-time parsing for writing. Avoid runtime content fetching unless a future data source requires it.
- shadcn/ui components live in `src/components/ui`; edit them as local source and keep variants consistent with `src/lib/utils.ts`.
- Run `npm run check` before shipping meaningful changes.
