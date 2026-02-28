


# MagentaCircuit — Project Context for Developers

---

## 1. Overview

**MagentaCircuit** is a single-page marketing website for an AI & automation agency. It targets B2B founders, agencies, and service businesses. The site is a dark-themed, enterprise-grade landing page with glassmorphism effects and premium cursor interactions.

- **Live URL:** https://magenta-circuit-flow.lovable.app
- **Stack:** React 18 + TypeScript + Vite + Tailwind CSS + shadcn/ui
- **Font:** Space Grotesk (Google Fonts)
- **Routing:** react-router-dom (single page at `/`, plus 404 catch-all)

---

## 2. Project Structure

```text
src/
├── pages/
│   ├── Index.tsx          # Main landing page — assembles all sections
│   └── NotFound.tsx
├── components/
│   ├── Header.tsx         # Fixed glassmorphic nav bar
│   ├── Hero.tsx           # Full-viewport hero with stats row
│   ├── Problems.tsx       # Pain points grid
│   ├── Services.tsx       # Service offerings grid
│   ├── HowItWorks.tsx     # 4-step horizontal timeline
│   ├── Benefits.tsx       # Outcomes grid
│   ├── Testimonials.tsx   # 3-column testimonial cards
│   ├── CTA.tsx            # Final call-to-action block
│   ├── Footer.tsx         # Minimal footer
│   ├── CustomCursor.tsx   # Custom cursor with magenta glow (desktop only)
│   ├── MagneticButton.tsx # CTA button with magnetic hover effect
│   ├── SpotlightCard.tsx  # Card with cursor-following spotlight
│   ├── NavLink.tsx        # react-router NavLink wrapper
│   └── ui/               # shadcn/ui primitives (do not edit directly)
├── hooks/
│   ├── use-cursor.tsx     # useCursor, useMagneticEffect, useCardSpotlight
│   └── use-mobile.tsx     # Mobile detection hook
├── lib/
│   └── utils.ts           # cn() utility (clsx + tailwind-merge)
└── index.css              # Design system: CSS variables, utilities, components
```

---

## 3. Design System (`src/index.css`)

### Color Palette (HSL CSS Variables)
| Token | Value | Usage |
|---|---|---|
| `--background` | `220 16% 5%` | Page background (deep charcoal) |
| `--card` | `220 14% 8%` | Card surfaces |
| `--secondary` | `220 12% 12%` | Elevated surfaces |
| `--muted` | `220 10% 14%` | Subtle backgrounds |
| `--accent` | `328 82% 52%` | Magenta — CTAs, glows, highlights |
| `--border` | `220 12% 14%` | Borders |
| `--foreground` | `0 0% 98%` | Primary text (near-white) |
| `--muted-foreground` | `220 8% 50%` | Secondary text |

### Key Utility Classes
| Class | Purpose |
|---|---|
| `.premium-card` | Elevated card with layered shadows, hover lift, inner highlight |
| `.glass` / `.glass-card` / `.glass-subtle` | Glassmorphism with `backdrop-filter: blur()` |
| `.glow-accent` / `.glow-accent-subtle` | Magenta box-shadow glow |
| `.text-gradient-accent` | Magenta-to-violet gradient text |
| `.orb-accent` / `.orb-secondary` | Large blurred background circles for ambient depth |
| `.section-container` | Standard section padding (`py-32 lg:py-40`) with overflow hidden |
| `.section-badge` / `.section-title` / `.section-subtitle` | Consistent section header pattern |
| `.btn-premium` | Button with shine overlay on hover |
| `.noise-overlay` | Subtle SVG noise texture via `::before` pseudo |
| `.bg-grid-pattern` / `.bg-dot-pattern` | Background texture patterns |
| `.radial-gradient-accent` / `.radial-gradient-subtle` | Top-down radial gradient overlays |
| `.section-divider` | Horizontal fade-in/fade-out border line |
| `.card-hover` | Hover transform + shadow transition |
| `.icon-container` / `.icon-container-accent` | Styled icon wrappers |

---

## 4. Custom Interaction System

All cursor effects are **desktop-only** (≥1024px, no touch, respects `prefers-reduced-motion`).

### `useCursor()` — Global cursor tracking
- Tracks mouse position via `requestAnimationFrame`
- Returns `{ position, isVisible, isEnabled }`
- Used by `CustomCursor.tsx` which renders a 3-layer glow (outer soft glow with lerp delay, inner glow, center dot)

### `useMagneticEffect(strength)` — Magnetic buttons
- Button subtly translates toward cursor on hover
- Default strength: `0.25` (range ~0.15–0.3)
- Used via `<MagneticButton>` component (wraps shadcn `<Button>`)

### `useCardSpotlight()` — Card spotlight
- Tracks cursor position relative to card bounds
- Renders radial gradient overlay + border highlight following cursor
- Used via `<SpotlightCard>` component wrapper

### Global cursor hiding
`Index.tsx` applies `cursor-none lg:cursor-none` on the root `<div>` to hide the native cursor on desktop.

---

## 5. Section Layout Pattern

Every section follows this structure:
```text
<section className="section-container">
  <!-- Background layers: gradients, orbs, patterns -->
  <div className="absolute inset-0 ..." />
  <div className="orb orb-accent ..." />

  <!-- Content -->
  <div className="relative z-10 max-w-6xl mx-auto">
    <div className="text-center mb-20">
      <div className="section-badge">...</div>
      <h2 className="section-title">...</h2>
      <p className="section-subtitle">...</p>
    </div>
    <!-- Grid of cards -->
  </div>

  <!-- Bottom divider -->
  <div className="section-divider" />
</section>
```

---

## 6. Component Conventions

- **Cards** use `<SpotlightCard className="premium-card rounded-2xl lg:rounded-3xl p-8 lg:p-10">` for interactive cards
- **CTA buttons** use `<MagneticButton variant="accent" className="rounded-full glow-accent btn-premium">` 
- **Icons** come from `lucide-react`, rendered at `w-6 h-6` with `text-accent`
- **Section numbering** (HowItWorks) uses accent-colored step indicators with `glow-accent-subtle`
- **shadcn/ui** components live in `src/components/ui/` — treat as library code, don't modify directly

---

## 7. Brand & Content Rules

- **Brand name:** MagentaCircuit
- **Tone:** Professional, outcome-focused, no buzzwords
- **Do NOT** name specific tools (Zapier, n8n, Make, etc.)
- **Do NOT** use flashy/cartoon visuals
- **Magenta** is accent only — never dominant
- All copy is finalized — do not change text content without approval

---

## 8. Key Dependencies

| Package | Purpose |
|---|---|
| `react-router-dom` | Routing (currently `/` and `*` 404) |
| `@tanstack/react-query` | Data fetching (configured, not yet used) |
| `lucide-react` | Icon library |
| `shadcn/ui` (Radix + CVA) | UI primitives |
| `recharts` | Charts (installed, not yet used) |
| `sonner` + `@radix-ui/react-toast` | Toast notifications |

---

## 9. Development

```bash
npm install
npm run dev        # Vite dev server on :8080
npm run build      # Production build
npm run test       # Vitest
```

Path alias: `@/` → `src/`
