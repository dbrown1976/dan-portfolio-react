# Technical Architecture

**Status:** Approved  
**Repository:** `dbrown1976/dan-portfolio-react`  
**Date:** 2026-06-24

This document records the approved technical architecture for the React implementation of Daniel Brown's portfolio.

It records implementation decisions only. It does not begin application implementation, scaffold the app, define application components, or implement routes.

---

## Approved Stack

| Area | Decision | Rationale |
|---|---|---|
| Framework | Next.js + React + TypeScript | Next.js provides a React-first application framework with strong support for static generation, metadata, route-level rendering, image optimization, and production deployment. TypeScript keeps route data, content models, component props, and asset manifests strict and maintainable. |
| Routing | Next App Router | The App Router maps cleanly to the specification's static routes and project route hierarchy. It also supports route metadata, layouts, redirects, and static generation without introducing a separate routing library. |
| Project route structure | `app/work/[projectSlug]/[[...slug]]` | This route shape supports project default routes, segment routes, and optional subsection routes from one project route boundary. It keeps the URL model aligned with `/work/{projectSlug}`, `/work/{projectSlug}/{segmentSlug}`, and `/work/{projectSlug}/{segmentSlug}/{subsectionSlug}` while allowing route validation to be driven by typed content data. |
| Styling | CSS Modules + CSS custom-property tokens | CSS Modules keep component styles locally scoped without a runtime styling dependency. CSS custom properties provide a direct way to expose Figma-derived design tokens for colour, typography, spacing, radius, borders, elevation, motion, and breakpoints. |
| State management | URL-derived state plus local UI state only | Selected tabs, project segments, and tertiary navigation states should come from the current route so deep linking, browser history, and active states stay consistent. Local React state should be limited to temporary interface state such as mobile menu open/closed and collapsed selector menus. No global state library is approved for the initial implementation. |
| Raster assets | Next Image | Next Image provides responsive image sizing, lazy loading, and optimization for screenshot-heavy project pages. This supports performance goals without requiring custom image-loading infrastructure. |
| Asset exports | Manifest-driven asset exports | Assets should be exported only from an approved manifest that records source, target path, format, dimensions, and alt-text requirements. This prevents ambiguous Figma layer names from leaking into the repository and keeps project imagery maintainable. |
| Unit and component testing | Vitest + React Testing Library | Vitest provides fast TypeScript-friendly unit tests. React Testing Library encourages user-facing component tests, which is appropriate for navigation controls, content rendering, and accessibility-oriented component behavior. |
| End-to-end and responsive testing | Playwright | Playwright should verify route loading, browser history, keyboard navigation, responsive breakpoints, and critical visual behavior across mobile, tablet, desktop, and wide desktop viewports. |
| Accessibility testing | axe | axe should be used for automated accessibility checks on main templates and key interaction states. It complements manual keyboard and screen-reader-oriented review rather than replacing it. |
| Deployment | Vercel | Vercel is the preferred deployment target for a Next.js portfolio because it supports GitHub integration, preview deployments, production hosting, image optimization, and the App Router deployment model with minimal operational overhead. |

---

## Implementation Boundaries

The approved stack allows foundation work to begin once the remaining pre-build documentation tasks are complete. It does not authorize exporting assets, building application screens, or implementing final visual pages without the corresponding approved route/content, token, and asset documentation.

Initial implementation should continue to follow the Portfolio Architecture Specification as the behavioural source of truth and the Figma files as the visual source of truth.

---

## Notes for Future Implementation

- Route state should be validated against typed project/content data.
- Project default routes should use the canonical route behavior approved in the architecture specification or subsequent decision log.
- Components should consume CSS custom-property tokens rather than hard-coded design values wherever tokens exist.
- Missing Figma token values should be flagged and added to the code token layer only after approval.
- Asset files should not be exported from Figma until the asset manifest is approved.
- Accessibility tests should be paired with manual keyboard testing for the header, mobile menu, segmented control, tertiary navigation, CV links, and contact links.
