# Outskill — React Landing Page

AI upskilling landing page built with React 18. No third-party UI libraries — pure React + inline styles + CSS variables.

## Getting Started

```bash
npm install
npm start
```

Runs on [http://localhost:3000](http://localhost:3000).

## Build for Production

```bash
npm run build
```

Output goes to the `build/` folder — ready to deploy to Netlify, Vercel, or any static host.

## Project Structure

```
src/
├── index.jsx              # React DOM entry point
├── index.css              # Global styles, CSS variables, keyframe animations
├── App.jsx                # Root component — composes all sections
│
├── hooks/
│   ├── useReveal.js       # IntersectionObserver-based scroll reveal
│   └── useMediaQuery.js   # Reactive media query hook (replaces window.innerWidth)
│
└── components/
    ├── Nav.jsx            # Fixed navbar with mobile hamburger drawer
    ├── Hero.jsx           # Full-height hero with stats
    ├── Marquee.jsx        # Auto-scrolling company logo strip
    ├── FeaturesStrip.jsx  # 4-up feature grid
    ├── Programs.jsx       # Program cards with hover effects
    ├── HowItWorks.jsx     # Interactive step selector
    ├── Testimonials.jsx   # Review cards grid
    ├── CTA.jsx            # Call-to-action banner
    └── Footer.jsx         # Footer with links + socials
```

## Design Tokens

All colours, surfaces, and borders live in CSS custom properties in `index.css`:

| Variable      | Value                    | Usage                  |
|---------------|--------------------------|------------------------|
| `--bg`        | `#080a0f`                | Page background        |
| `--surface`   | `#0f1218`                | Card/section surfaces  |
| `--surface2`  | `#161b24`                | Elevated surfaces      |
| `--accent`    | `#f0a500`                | Gold primary accent    |
| `--accent2`   | `#ff6b35`                | Orange secondary       |
| `--text`      | `#eef0f5`                | Primary text           |
| `--muted`     | `#6b7280`                | Subdued text           |
| `--muted2`    | `#9ca3af`                | Secondary text         |
| `--border`    | `rgba(255,255,255,0.07)` | Subtle borders         |

## Responsive Breakpoints

| Breakpoint | Behaviour                                      |
|------------|------------------------------------------------|
| `> 900px`  | Full desktop layout, 4-col features, 2-col How |
| `≤ 900px`  | 2-col features, single-col How It Works        |
| `≤ 768px`  | Mobile nav (hamburger), 2-col footer           |
| `≤ 480px`  | Single-col features and footer                 |

Breakpoints are managed via the `useMediaQuery` hook — no CSS media queries in component files.

## Fonts

- **Syne** (800) — headings, logo, stats
- **DM Sans** (300 / 400 / 500) — body text, buttons

Loaded from Google Fonts in `public/index.html`.
