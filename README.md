# Tridib Banik: Personal Portfolio

Personal portfolio site for **Tridib Banik**, Software Engineering student at McMaster University. It showcases projects, experience, technical skills, and contact links.

**Live repo:** [github.com/tridibbanik17/Personal_Portfolio_of_Tridib](https://github.com/tridibbanik17/Personal_Portfolio_of_Tridib)

## Sections

- **Home:** intro and navigation
- **About:** background and story
- **Projects:** selected work (TrafficLightRL, PrepPush, Simulink CI)
- **Experience:** timeline and technical skills
- **Contact:** social links and resume

## Tech stack

- **React 19:** UI library for pages and components
- **Vite 6:** Dev server and production bundler
- **React Router:** Page routes like `/about` and `/projects`
- **Framer Motion:** Animations and page transitions
- **Tailwind CSS 4:** Utility CSS styling

## Getting started

```bash
npm install
npm run dev
```

App runs at [http://localhost:5173](http://localhost:5173).

```bash
npm run build    # production build → dist/
npm run preview  # preview production build
npm run lint     # ESLint
```

## Deploy

Configured for Vercel (`vercel.json` SPA rewrites). `public/_redirects` is included for static hosts that need SPA fallback routing.
