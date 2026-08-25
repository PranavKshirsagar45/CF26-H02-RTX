# CityCare Hospital — Patient Portal Dashboard

A responsive React + Tailwind CSS recreation of the CityCare Hospital patient portal dashboard, built with a clean, component-based folder structure.

## ✨ Features

- **Fully responsive** — works from mobile (< 640px) up through tablet and large desktop screens, including a slide-in mobile sidebar.
- **Component-driven architecture** — every section of the UI (sidebar, header, hero, stats, health summary, lab reports, prescriptions, quick actions, banners, footer) is its own component in its own folder.
- **Centralized mock data** — all dashboard content lives in `src/data/dashboardData.js`, so swapping in a real API is a matter of replacing the data source, not rewriting components.
- **Icon system** via [`lucide-react`](https://lucide.dev/).
- **Utility-first styling** with Tailwind CSS and a small custom design-token extension (`brand` color scale, soft shadows, radii).

## 🗂️ Folder Structure

```
citycare-portal/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx                     # React entry point
    ├── App.jsx                      # Page layout / composition root
    ├── index.css                    # Tailwind directives + base styles
    ├── data/
    │   └── dashboardData.js         # Mock data for the whole dashboard
    └── components/
        ├── Sidebar/
        │   └── Sidebar.jsx          # Left navigation + emergency help card
        ├── Header/
        │   └── Header.jsx           # Greeting, search bar, notifications, profile
        ├── Hero/
        │   ├── HeroBanner.jsx       # "Your Health, Our Priority" hero section
        │   └── UpcomingAppointment.jsx
        ├── Stats/
        │   ├── StatsCards.jsx       # Grid wrapper
        │   └── StatCard.jsx         # Single metric card
        ├── HealthSummary/
        │   └── HealthSummary.jsx    # Vitals + circular health-score ring
        ├── LabReports/
        │   └── RecentLabReports.jsx
        ├── Prescriptions/
        │   └── RecentPrescriptions.jsx
        ├── QuickActions/
        │   └── QuickActions.jsx
        ├── CareBanner/
        │   └── CareBanner.jsx
        └── Footer/
            └── Footer.jsx           # Trust badges (support / privacy / care)
```

## 🚀 Getting Started

**Requirements:** Node.js 18+ and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open the printed local URL (usually http://localhost:5173)
```

### Production build

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build locally
```

## 📱 Responsive Behavior

| Breakpoint | Layout |
|---|---|
| `< 640px` (mobile) | Single column; sidebar becomes an off-canvas drawer opened via the hamburger icon; search bar moves below the greeting; stat cards wrap 2-per-row. |
| `640px – 1024px` (tablet) | Stat cards show 3-per-row; sidebar still off-canvas. |
| `≥ 1024px` (desktop) | Persistent sidebar, 5-column stat grid, 3-column summary/reports/prescriptions row, and the full hero layout with the appointment card and image side-by-side. |

## 🎨 Design Tokens

Defined in `tailwind.config.js`:

- **Brand color scale** (`brand-50` → `brand-900`) — indigo/violet, matching the original purple healthcare theme.
- **`shadow-card`** / **`shadow-soft`** — soft, low-opacity purple-tinted shadows used across all cards.
- **Font:** [Inter](https://fonts.google.com/specimen/Inter), loaded via Google Fonts in `index.html`.

## 🧩 Extending

- Replace the contents of `src/data/dashboardData.js` with data fetched from your backend (e.g., via `fetch`/React Query) — every component already consumes this shape as props/imports.
- Each nav item in `Sidebar.jsx` calls `onNavigate(id)`; wire this up to a router (React Router, etc.) to build out additional pages.
- All icons are swappable — the app only uses icons already bundled with `lucide-react`.

## 📦 Tech Stack

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/) — build tool & dev server
- [Tailwind CSS](https://tailwindcss.com/) — styling
- [lucide-react](https://lucide.dev/) — icon set
