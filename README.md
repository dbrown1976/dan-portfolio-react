# Dan Brown Portfolio

React implementation of my product design portfolio.

This project is based on an existing Figma portfolio design and component system. The goal is to faithfully implement the designed experience as a maintainable, accessible and extensible React application.

## Source of truth

* Portfolio design file: https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=116-40759
* Component library: https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=32-27192
* Architecture specification: `docs/portfolio-architecture-specification-v1.1.md`
* Technical architecture: `docs/technical-architecture.md`

## Project status

This project now has a Next.js application foundation based on the approved technical architecture.

The scaffold includes placeholder templates, route structure, typed canonical project route data and token CSS foundations. Final Figma components, final visual design, final portfolio copy and exported assets are intentionally not implemented yet.

## Local development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000.

## Available scripts

```bash
npm run dev        # Start the Next.js development server
npm run build      # Build the production app
npm run start      # Run the production build locally
npm run lint       # Run ESLint
npm run typecheck  # Run TypeScript without emitting files
npm run test       # Run Vitest unit/component tests
npm run test:e2e   # Run Playwright end-to-end tests
npm run format     # Check formatting with Prettier
```
