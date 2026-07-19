# Tridib Banik: Personal Portfolio

Personal portfolio site for **Tridib Banik**, Software Engineering student at McMaster University. It showcases projects, experience, technical skills, and contact links.

**Live site:** [tridib.vercel.app](https://tridib.vercel.app)  
**GitHub repository:** [github.com/tridibbanik17/Personal_Portfolio_of_Tridib](https://github.com/tridibbanik17/Personal_Portfolio_of_Tridib)

## Sections

- **Home:** intro and navigation
- **About:** background and story
- **Projects:** selected work (TrafficLightRL, PrepPush, Simulink CI)
- **Experience:** timeline and technical skills
- **Contact:** social links and resume

## Tech stack

**Language**
- **JavaScript:** language the app is written in (with JSX)

**Framework**
- **Tailwind CSS 4:** utility-first CSS framework for styling

**Libraries**
- **React 19:** UI library for pages and components
- **React Router:** page routes like `/about`, `/projects`, `/experience`, and `/contact`
- **Framer Motion:** animations and page transitions

**Tools**
- **Vite 6:** dev server and production bundler
- **Vercel:** hosts and deploys the live site
- **Git:** version control
- **VS Code:** code editor / IDE
- **Cursor:** AI-assisted coding in the editor

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
