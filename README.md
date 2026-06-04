# KVANT — Next.js

Editorial executive-search landing page. Next.js 15 (App Router) + Tailwind + TypeScript.

## Run
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Stack notes
- **Fonts**: Cormorant Garamond (display serif) + Space Mono (labels), via next/font.
- **Hero**: canvas flow-field particle wave in `components/ParticleWave.tsx`. Tune density/motion via the `build()` and `draw()` functions.
- **Scroll reveals**: IntersectionObserver wrapper in `components/Reveal.tsx`.
- **Contact form**: UI only — wire `onClick` in `ContactFooter.tsx` to an API route or service when ready.
- **Palette**: defined in `tailwind.config.ts` (paper / ink / teal / stone / line).

## Structure
- `app/page.tsx` — assembles all sections
- `components/` — one file per section
