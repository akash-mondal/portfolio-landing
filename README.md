# Akash Mondal — Portfolio

Personal portfolio for **Akash Mondal**, Co-Founder & CTO at Miny Labs. A frontend-only single-page React app with HLS background video, GSAP entrance animations, framer-motion transitions, and a section-aware navbar.

## Stack

- React 19 + Create React App (via [CRACO](https://craco.js.org/) for path aliases & ESLint config)
- Tailwind CSS + tailwindcss-animate
- Radix UI primitives + shadcn-style components
- framer-motion (page transitions) + GSAP (hero entrance)
- hls.js for the streaming hero background video
- lucide-react icons

## Project layout

```
.
├── public/
│   ├── index.html
│   └── resume.pdf          # served at /resume.pdf, opened by the Resume nav link
├── src/
│   ├── App.js              # loader + section-aware nav + sections
│   ├── components/
│   │   ├── portfolio/      # Hero, About, SelectedWorks, Experience, Stats, Footer, Navbar, LoadingScreen
│   │   └── ui/             # shadcn-style primitives
│   ├── hooks/
│   │   └── use-toast.js
│   ├── lib/
│   │   ├── portfolio-data.js  # single source of truth for all content
│   │   └── utils.js
│   ├── App.css
│   ├── index.css
│   └── index.js
├── craco.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

All copy, links, projects, experience entries, stats, and skill groups live in [src/lib/portfolio-data.js](src/lib/portfolio-data.js). Edit that one file to update the site.

## Local development

```bash
yarn install
yarn start         # http://localhost:3000
```

## Production build

```bash
yarn build         # outputs to ./build
```

## Resume

The PDF is served as a static asset from `public/resume.pdf` at the path `/resume.pdf`. The **Resume** link in the navbar opens it in a new tab. To swap in a new resume, replace `public/resume.pdf` and rebuild.

## Deploying to Vercel

This is a zero-config CRA deploy. With the [Vercel CLI](https://vercel.com/docs/cli) installed and authenticated:

```bash
vercel              # preview deploy
vercel --prod       # production deploy
```

Vercel auto-detects the framework as Create React App (build command `yarn build`, output directory `build`).

## Live deployment

> Production URL will be added after the first Vercel deploy.

## License

MIT — feel free to fork and adapt for your own portfolio.
