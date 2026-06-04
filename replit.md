# SpikeBis

A premium, futuristic single-page website for SpikeBis — a modern international IT company and digital solutions agency.

## Run & Operate

- `pnpm --filter @workspace/alice-solution run dev` — run the website (port auto-assigned)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS, Framer Motion
- UI: shadcn/ui components, Lucide React icons

## Where things live

- `artifacts/alice-solution/src/pages/Home.tsx` — entire single-page website (all 10 sections)
- `artifacts/alice-solution/src/index.css` — dark theme CSS variables + global styles
- `artifacts/alice-solution/src/App.tsx` — router (renders Home)

## Architecture decisions

- Single-page design with smooth anchor navigation (no multi-page routing)
- Framer Motion for all scroll-triggered animations, stagger effects, and hover states
- CSS custom properties for the dark navy/neon blue theme — defined in `:root` and `.dark`
- Glassmorphism card pattern: `backdrop-filter: blur(12px)` + semi-transparent dark navy bg + neon blue border glow
- Default dark mode enforced via `class="dark"` on `<html>` in index.html

## Product

A premium IT company website with: sticky glassmorphism navbar, animated hero with tech visuals, about + stats section with animated counters, 19-service grid with glassmorphism cards, portfolio showcase, testimonials, 3-tier pricing, contact form with WhatsApp/social links, and premium footer. Includes a 1.5s branded intro loading animation.

## User preferences

- Dark luxury theme: deep black (#050a14), royal blue (#1a56db), neon blue (#3b82f6) glow
- Premium futuristic corporate feel — Apple + Tesla + Cyberpunk aesthetic
- Glassmorphism effects throughout
- Space Grotesk + Inter fonts

## Gotchas

- The intro loading screen runs for 1.5s on every page load — this is intentional branding
- Google Fonts import must stay as the VERY FIRST line of index.css

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
