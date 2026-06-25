# Asset Manifest

**Status:** First draft  
**Repository:** `dbrown1976/dan-portfolio-react`  
**Last updated:** 2026-06-25

This document identifies the visual assets likely needed to implement the portfolio from Figma.

It is a planning document only. It does not approve exports, add assets to the repository, implement visual design, or replace the Portfolio Architecture Specification as the behavioural source of truth.

## Sources

- `docs/portfolio-architecture-specification-v1.1.md`
- `docs/route-to-figma-frame-mapping.md`
- `src/content/portfolio.ts`
- Portfolio file: <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=116-40759>
- Component/design-system area: <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=32-27192>

## Planning Rules

- Treat the architecture specification as the route, behaviour, and content source of truth.
- Treat Figma as the visual source of truth.
- Do not export any row marked `Needs confirmation` until Dan confirms the exact Figma layer or export source.
- Export individual meaningful screenshots, diagrams, illustrations, or document assets where possible.
- Do not export whole cards, pages, navigation controls, text sections, badges, buttons, contact rows, or layout blocks as images.
- Keep cards, pages, navigation controls, text sections, badges, buttons, contact rows, and layout blocks as live HTML/CSS components.
- Every meaningful image must receive alt text in this manifest or in the future typed content model.
- Decorative images should use empty alt text and should not be announced by assistive technology.
- Use Next Image for raster assets in implementation.

## Confirmed Asset Decisions

- Use WebP by default for raster project imagery.
- Use SVG only for true vector icons or diagrams.
- Project-card thumbnails may be exported as meaningful image assets.
- Use expanded project-name prefixes in final filenames, not abbreviations.
- Contact icons should be implemented through the app icon system unless a Figma icon is genuinely bespoke.
- CV PDF download is required.
- CV inline rendering remains deferred. Do not decide yet between page images, a PDF viewer, or a structured HTML CV.
- Favicon and Open Graph/social preview assets are deferred until deployment/metadata work.
- Exact alt text remains `To confirm` until the actual export assets are selected.
- Exact Figma layer/node sources remain `Needs confirmation` unless already known from the route-to-Figma mapping.

## Recommended Folder Structure

This extends the specification's project-focused folder structure with a `site` folder for non-project page imagery.

```text
public/
  assets/
    site/
      home/
      work/
      about/
      contact/
    projects/
      next-generation-authoring/
      design-system/
      cloud-event-management/
      alert-notification/
      maps/
    cv/
    icons/
    social/
```

## Naming Convention

Use lowercase, hyphenated filenames.

Use these project prefixes:

```text
next-generation-authoring
design-system
cloud-event-management
alert-notification
maps
```

Do not use these project abbreviations in final filenames:

```text
nga
ds
cem
an
```

Recommended project asset pattern:

```text
{project-prefix}-{route-or-section}-{descriptor}.{ext}
```

For site-level and CV assets, use the route or asset type as the prefix.

Examples that follow the approved convention:

```text
next-generation-authoring-overview-hero.webp
next-generation-authoring-discovery-research-screenshot.webp
design-system-token-map.svg
next-generation-authoring-project-thumbnail.webp
design-system-project-thumbnail.webp
cloud-event-management-creative-process-flow.webp
alert-notification-execution-ui.webp
maps-research-screenshot.webp
daniel-brown-cv.pdf
daniel-brown-cv-page-01.webp
```

Where the exact Figma layer is not confirmed, the manifest uses `Needs confirmation` instead of inventing a final filename.

## Format Guidance

| Asset type | Suggested format | Notes |
|---|---|---|
| Product screenshots and rich project imagery | `other (WebP)` | Use optimized raster output through Next Image. Use PNG only where transparency or lossless detail is required. |
| Photographic imagery | `other (WebP)` | Use JPG only if a source or delivery constraint requires it. |
| Vector icons and diagrams | `SVG` | Use only for true vector icons or diagrams. |
| CV download | `PDF` | Required for accessibility and download behaviour. |
| CV inline preview pages | Deferred | Decide later whether inline rendering uses page images, a PDF viewer, or structured HTML. |
| Social preview images | Deferred | Confirm during deployment/metadata work. |

## Static Route Assets

| Asset ID | Related app route | Related project | Figma page/frame/source | Figma node URL, if known | Intended use | Suggested filename | Target app folder | Suggested format | Decorative or meaningful | Alt text needed | Export priority | Notes / questions for Dan |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `HOME-HERO-PRIMARY` | `/` | N/A | `Portfolio Prototype` / `Home` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=116-40760> | Primary home page visual, if the Figma home frame uses a hero or intro asset. | Needs confirmation: `home-hero-[descriptor].webp` | `public/assets/site/home/` | `other (WebP)` | To confirm | To confirm | High | Confirm whether the visual is meaningful portfolio content or decorative presentation. |
| `HOME-SUPPORTING-VISUALS` | `/` | N/A | `Portfolio Prototype` / `Home` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=116-40760> | Secondary home page imagery, if present. | Needs confirmation: `home-[section]-[descriptor].webp` | `public/assets/site/home/` | `other (WebP); SVG only if vector` | To confirm | To confirm | Medium | Export only imagery; keep text and layout live. |
| `WORK-PROJECT-THUMBNAILS` | `/work` | All projects | `Portfolio Prototype` / `Work` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=116-41423> | Project card thumbnails or preview images for the work listing. | Needs confirmation: `{project-prefix}-project-thumbnail.webp` | `public/assets/projects/{projectSlug}/` | `other (WebP)` | Meaningful | To confirm | High | Use only approved project prefixes. Confirm the source image for each project card. Do not export the full card if it can be built as HTML. |
| `ABOUT-PORTRAIT-OR-HERO` | `/about` | N/A | `Portfolio Prototype` / `About Me` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=116-41546> | About page portrait, hero image, or primary supporting visual if present. | Needs confirmation: `about-[descriptor].webp` | `public/assets/site/about/` | `other (WebP)` | Meaningful | To confirm | High | Confirm final source and alt text. Use JPG only if the selected source requires it. |
| `ABOUT-SUPPORTING-IMAGERY` | `/about` | N/A | `Portfolio Prototype` / `About Me`; component area may include `Kudos` / `PullOut` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=116-41546> | Supporting visual material on the About route, if any. | Needs confirmation: `about-[section]-[descriptor].webp` | `public/assets/site/about/` | `other (WebP); SVG only if vector` | To confirm | To confirm | Medium | Kudos, pull-outs, and text treatments should normally remain live components. |
| `CV-PDF-DOWNLOAD` | `/cv` | N/A | `Portfolio Prototype` / `CV` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=131-2161> | Downloadable CV file. | Needs confirmation: `daniel-brown-cv.pdf` | `public/assets/cv/` | `PDF` | Meaningful | No | High | Final CV PDF source is deferred. The download link needs accessible link text. |
| `CV-PAGE-IMAGES` | `/cv` | N/A | `Portfolio Prototype` / `CV` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=131-2161> | Deferred inline CV rendering option if a future decision selects image sequence rendering. | Needs confirmation: `daniel-brown-cv-page-[nn].webp` | `public/assets/cv/` | Deferred | Meaningful | To confirm | Low | Do not export yet. CV inline rendering remains undecided between page images, PDF viewer, or structured HTML. |
| `CONTACT-ROW-ICONS` | `/contact` | N/A | `Portfolio Prototype` / `Contact`; component area / `Contact Details` needs confirmation | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=116-41721> | Bespoke icons only if the app icon system cannot match the design. | Needs confirmation only if bespoke: `contact-[method]-icon.svg` | `public/assets/icons/` | `SVG` | Decorative if paired with text | No | Low | Implement through the app icon system unless a Figma icon is genuinely bespoke. Do not export contact rows. |
| `GLOBAL-SOCIAL-PREVIEW` | Global metadata | N/A | Needs confirmation | Needs confirmation | Deferred Open Graph/social preview image. | Needs confirmation: `og-image.[png-or-jpg]` | `public/assets/social/` | Deferred | Meaningful outside page UI | No | Low | Deferred until deployment/metadata work. No route-level Figma source is confirmed yet. |
| `GLOBAL-FAVICON-SET` | Global metadata | N/A | Needs confirmation | Needs confirmation | Deferred site icons and favicon assets. | Needs confirmation | `public/assets/icons/` | Deferred | Decorative | No | Low | Deferred until deployment/metadata work. Confirm whether these are needed from Figma or generated separately. |

## Next Generation Authoring Assets

| Asset ID | Related app route | Related project | Figma page/frame/source | Figma node URL, if known | Intended use | Suggested filename | Target app folder | Suggested format | Decorative or meaningful | Alt text needed | Export priority | Notes / questions for Dan |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `NEXT-GENERATION-AUTHORING-HOME-IMAGERY` | `/work/next-generation-authoring` | Next Generation Authoring | `Portfolio Prototype` / `H1. 1 Home` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=247-19205> | Project overview/home imagery and hero material. | Needs confirmation: `next-generation-authoring-overview-[descriptor].webp` | `public/assets/projects/next-generation-authoring/` | `other (WebP); SVG only if vector diagram` | Meaningful | To confirm | High | Also applies to `/work/next-generation-authoring/overview` until redirect behaviour is implemented. |
| `NEXT-GENERATION-AUTHORING-UNDERSTANDING-IMAGERY` | `/work/next-generation-authoring/understanding-the-problem/understanding` | Next Generation Authoring | `Portfolio Prototype` / `H2. 2 Problem Definition` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=247-21772> | Understanding/problem definition screenshots, diagrams, or supporting imagery. | Needs confirmation: `next-generation-authoring-understanding-[descriptor].webp` | `public/assets/projects/next-generation-authoring/` | `other (WebP); SVG only if vector diagram` | Meaningful | To confirm | High | Parent segment route may share this source until future redirect. |
| `NEXT-GENERATION-AUTHORING-DISCOVERY-IMAGERY` | `/work/next-generation-authoring/understanding-the-problem/discovery` | Next Generation Authoring | `Portfolio Prototype` / `H2. 3 Discovery` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=286-22179> | Discovery screenshots, research artefacts, diagrams, or evidence imagery. | Needs confirmation: `next-generation-authoring-discovery-[descriptor].webp` | `public/assets/projects/next-generation-authoring/` | `other (WebP); SVG only if vector diagram` | Meaningful | To confirm | High | Confirm which elements are actual assets versus live content blocks. |
| `NEXT-GENERATION-AUTHORING-DIRECTION-IMAGERY` | `/work/next-generation-authoring/understanding-the-problem/direction` | Next Generation Authoring | `Portfolio Prototype` / `H2. 4 Evidence` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=318-51022> | Direction/evidence screenshots, scrapbook visuals, or supporting artefacts. | Needs confirmation: `next-generation-authoring-direction-[descriptor].webp` | `public/assets/projects/next-generation-authoring/` | `other (WebP); SVG only if vector diagram` | Meaningful | To confirm | High | Confirm exact evidence assets and alt text. |
| `NEXT-GENERATION-AUTHORING-SYSTEM-BUILDING-IMAGERY` | `/work/next-generation-authoring/building-the-system/building-the-system` | Next Generation Authoring | `Portfolio Prototype` / `H2. 5 System Building` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=375-52097> | System-building screenshots, workflows, diagrams, and UI evidence. | Needs confirmation: `next-generation-authoring-system-building-[descriptor].webp` | `public/assets/projects/next-generation-authoring/` | `other (WebP); SVG only if vector diagram` | Meaningful | To confirm | High | Parent segment route may share this source until future redirect. |
| `NEXT-GENERATION-AUTHORING-PATTERNS-IMAGERY` | `/work/next-generation-authoring/building-the-system/patterns` | Next Generation Authoring | `Portfolio Prototype` / `H2. 6 Patterns` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=375-52150> | Pattern examples, UI screenshots, or system evidence. | Needs confirmation: `next-generation-authoring-patterns-[descriptor].webp` | `public/assets/projects/next-generation-authoring/` | `other (WebP); SVG only if vector diagram` | Meaningful | To confirm | Medium | Confirm whether any pattern matrices should remain live HTML. |
| `NEXT-GENERATION-AUTHORING-BETA-IMAGERY` | `/work/next-generation-authoring/building-the-system/beta` | Next Generation Authoring | `Portfolio Prototype` / `H2. 7 Beta` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=375-52200> | Beta screenshots, launch evidence, or supporting visuals. | Needs confirmation: `next-generation-authoring-beta-[descriptor].webp` | `public/assets/projects/next-generation-authoring/` | `other (WebP); SVG only if vector diagram` | Meaningful | To confirm | Medium | Confirm which beta artefacts are sensitive or should be redacted before export. |
| `NEXT-GENERATION-AUTHORING-IMPROVEMENTS-IMAGERY` | `/work/next-generation-authoring/improvements-rollout/improvements` | Next Generation Authoring | `Portfolio Prototype` / `H2. 8 Improvements` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=407-52589> | Improvement screenshots, before/after visuals, callouts, or supporting imagery. | Needs confirmation: `next-generation-authoring-improvements-[descriptor].webp` | `public/assets/projects/next-generation-authoring/` | `other (WebP); SVG only if vector diagram` | Meaningful | To confirm | High | Parent segment route may share this source until future redirect. |
| `NEXT-GENERATION-AUTHORING-ROLLOUT-IMAGERY` | `/work/next-generation-authoring/improvements-rollout/rollout` | Next Generation Authoring | `Portfolio Prototype` / `H2. 9 Rollout` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=407-52632> | Rollout screenshots, metrics, timeline visuals, badges, or supporting assets. | Needs confirmation: `next-generation-authoring-rollout-[descriptor].webp` | `public/assets/projects/next-generation-authoring/` | `other (WebP); SVG only if vector diagram` | Meaningful | To confirm | Medium | Prefer live HTML for metrics and text-heavy callouts where possible. |
| `NEXT-GENERATION-AUTHORING-REFLECTIONS-IMAGERY` | `/work/next-generation-authoring/improvements-rollout/reflections` | Next Generation Authoring | `Portfolio Prototype` / `H2. 10 Reflects` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=407-52684> | Reflections page imagery, quote support, or concluding visuals. | Needs confirmation: `next-generation-authoring-reflections-[descriptor].webp` | `public/assets/projects/next-generation-authoring/` | `other (WebP); SVG only if vector diagram` | To confirm | To confirm | Medium | Pull-outs and quotes should usually remain live text components. |

## Design System Assets

| Asset ID | Related app route | Related project | Figma page/frame/source | Figma node URL, if known | Intended use | Suggested filename | Target app folder | Suggested format | Decorative or meaningful | Alt text needed | Export priority | Notes / questions for Dan |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `DESIGN-SYSTEM-SUMMARY-IMAGERY` | `/work/design-system` | Design System | `Portfolio Prototype` / `H2. 1 Summary Design System` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=549-57295> | Project summary imagery and hero/supporting visuals. | Needs confirmation: `design-system-summary-[descriptor].webp` | `public/assets/projects/design-system/` | `other (WebP); SVG only if vector diagram` | Meaningful | To confirm | High | Also applies to `/work/design-system/project-summary` until redirect behaviour is implemented. |
| `DESIGN-SYSTEM-DISCOVERY-IMAGERY` | `/work/design-system/discovery` | Design System | `Portfolio Prototype` / `H2. 2 Research Design System` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=549-57174> | Discovery/research screenshots, artefacts, or supporting diagrams. | Needs confirmation: `design-system-discovery-[descriptor].webp` | `public/assets/projects/design-system/` | `other (WebP); SVG only if vector diagram` | Meaningful | To confirm | Medium | Figma wording maps to public segment `Discovery`. |
| `DESIGN-SYSTEM-LANGUAGE-IMAGERY` | `/work/design-system/design-language-system` | Design System | `Portfolio Prototype` / `H2. 3 Foundations I` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=549-57215> | Token, foundation, design-language, or component-system imagery. | Needs confirmation: `design-system-language-[descriptor].webp` | `public/assets/projects/design-system/` | `other (WebP); SVG only if vector diagram` | Meaningful | To confirm | Medium | Figma wording maps to public segment `Design Language & System`. Prefer live HTML for token tables. |
| `DESIGN-SYSTEM-EXECUTION-IMAGERY` | `/work/design-system/execution` | Design System | `Portfolio Prototype` / `H2. 4 Adoption Design System` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=549-57257> | Adoption/execution screenshots, process imagery, or results evidence. | Needs confirmation: `design-system-execution-[descriptor].webp` | `public/assets/projects/design-system/` | `other (WebP); SVG only if vector diagram` | Meaningful | To confirm | Medium | Figma wording maps to public segment `Execution`. |

## Cloud Event Management Assets

| Asset ID | Related app route | Related project | Figma page/frame/source | Figma node URL, if known | Intended use | Suggested filename | Target app folder | Suggested format | Decorative or meaningful | Alt text needed | Export priority | Notes / questions for Dan |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `CLOUD-EVENT-MANAGEMENT-SUMMARY-IMAGERY` | `/work/cloud-event-management` | Cloud Event Management | `Portfolio Prototype` / `H2. 1 Summary CEM` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=521-55271> | Project summary imagery and hero/supporting visuals. | Needs confirmation: `cloud-event-management-summary-[descriptor].webp` | `public/assets/projects/cloud-event-management/` | `other (WebP); SVG only if vector diagram` | Meaningful | To confirm | High | Also applies to `/work/cloud-event-management/project-summary` until redirect behaviour is implemented. |
| `CLOUD-EVENT-MANAGEMENT-RESEARCH-IMAGERY` | `/work/cloud-event-management/research` | Cloud Event Management | `Portfolio Prototype` / `H2. 2 Research CEM` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=521-55155> | Research screenshots, diagrams, or supporting artefacts. | Needs confirmation: `cloud-event-management-research-[descriptor].webp` | `public/assets/projects/cloud-event-management/` | `other (WebP); SVG only if vector diagram` | Meaningful | To confirm | Medium | Filename patterns should use the expanded project name. The Figma frame uses the `CEM` abbreviation. |
| `CLOUD-EVENT-MANAGEMENT-CREATIVE-PROCESS-IMAGERY` | `/work/cloud-event-management/creative-process` | Cloud Event Management | `Portfolio Prototype` / `H2. 3 Process CEM` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=521-55191> | Creative process screenshots, diagrams, or process visuals. | Needs confirmation: `cloud-event-management-creative-process-[descriptor].webp` | `public/assets/projects/cloud-event-management/` | `other (WebP); SVG only if vector diagram` | Meaningful | To confirm | Medium | Confirmed route mapping: `H2. 3 Process CEM` maps to `Creative Process`. |
| `CLOUD-EVENT-MANAGEMENT-EXECUTION-IMAGERY` | `/work/cloud-event-management/execution` | Cloud Event Management | `Portfolio Prototype` / `H2. 4 Execution CEM` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=521-55235> | Execution screenshots, result evidence, or supporting visuals. | Needs confirmation: `cloud-event-management-execution-[descriptor].webp` | `public/assets/projects/cloud-event-management/` | `other (WebP); SVG only if vector diagram` | Meaningful | To confirm | Medium | Confirm exact export layers and alt text. |

## Alert Notification Assets

| Asset ID | Related app route | Related project | Figma page/frame/source | Figma node URL, if known | Intended use | Suggested filename | Target app folder | Suggested format | Decorative or meaningful | Alt text needed | Export priority | Notes / questions for Dan |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `ALERT-NOTIFICATION-SUMMARY-IMAGERY` | `/work/alert-notification` | Alert Notification | `Portfolio Prototype` / `H2. 1 Summary AN` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=530-55720> | Project summary imagery and hero/supporting visuals. | Needs confirmation: `alert-notification-summary-[descriptor].webp` | `public/assets/projects/alert-notification/` | `other (WebP); SVG only if vector diagram` | Meaningful | To confirm | High | Also applies to `/work/alert-notification/project-summary` until redirect behaviour is implemented. |
| `ALERT-NOTIFICATION-RESEARCH-IMAGERY` | `/work/alert-notification/research` | Alert Notification | `Portfolio Prototype` / `H2. 2 Research AN` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=530-55598> | Research screenshots, diagrams, or supporting artefacts. | Needs confirmation: `alert-notification-research-[descriptor].webp` | `public/assets/projects/alert-notification/` | `other (WebP); SVG only if vector diagram` | Meaningful | To confirm | Medium | Filename patterns should use the expanded project name. The Figma frame uses the `AN` abbreviation. |
| `ALERT-NOTIFICATION-CREATIVE-PROCESS-IMAGERY` | `/work/alert-notification/creative-process` | Alert Notification | `Portfolio Prototype` / `H2. 3 Process AN` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=530-55636> | Creative process screenshots, process diagrams, or supporting visuals. | Needs confirmation: `alert-notification-creative-process-[descriptor].webp` | `public/assets/projects/alert-notification/` | `other (WebP); SVG only if vector diagram` | Meaningful | To confirm | Medium | Figma wording maps to public segment `Creative Process`. |
| `ALERT-NOTIFICATION-EXECUTION-IMAGERY` | `/work/alert-notification/execution` | Alert Notification | `Portfolio Prototype` / `H2. 4 Execution AN` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=530-55682> | Execution screenshots, result evidence, or supporting visuals. | Needs confirmation: `alert-notification-execution-[descriptor].webp` | `public/assets/projects/alert-notification/` | `other (WebP); SVG only if vector diagram` | Meaningful | To confirm | Medium | Confirm exact export layers and alt text. |

## Maps Assets

| Asset ID | Related app route | Related project | Figma page/frame/source | Figma node URL, if known | Intended use | Suggested filename | Target app folder | Suggested format | Decorative or meaningful | Alt text needed | Export priority | Notes / questions for Dan |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `MAPS-SUMMARY-IMAGERY` | `/work/maps` | Maps | `Portfolio Prototype` / `H2. 1 Summary Maps` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=530-56058> | Project summary imagery and hero/supporting visuals. | Needs confirmation: `maps-summary-[descriptor].webp` | `public/assets/projects/maps/` | `other (WebP); SVG only if vector diagram` | Meaningful | To confirm | High | Also applies to `/work/maps/project-summary` until redirect behaviour is implemented. Maps has no Execution page. |
| `MAPS-RESEARCH-IMAGERY` | `/work/maps/research` | Maps | `Portfolio Prototype` / `H2. 2 Research Maps` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=530-55936> | Research screenshots, diagrams, or supporting artefacts. | Needs confirmation: `maps-research-[descriptor].webp` | `public/assets/projects/maps/` | `other (WebP); SVG only if vector diagram` | Meaningful | To confirm | Medium | Confirm exact export layers and alt text. |
| `MAPS-CREATIVE-PROCESS-IMAGERY` | `/work/maps/creative-process` | Maps | `Portfolio Prototype` / `H2. 3 Process Maps` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=530-55974> | Creative process screenshots, process diagrams, or supporting visuals. | Needs confirmation: `maps-creative-process-[descriptor].webp` | `public/assets/projects/maps/` | `other (WebP); SVG only if vector diagram` | Meaningful | To confirm | Medium | Figma wording maps to public segment `Creative Process`. There is intentionally no Maps Execution asset row. |

## Component Library Asset Candidates

These rows identify component-adjacent assets that should not be exported by default. Export only when an icon or diagram is genuinely bespoke and cannot be implemented cleanly through the app icon system or live HTML/CSS.

| Asset ID | Related app route | Related project | Figma page/frame/source | Figma node URL, if known | Intended use | Suggested filename | Target app folder | Suggested format | Decorative or meaningful | Alt text needed | Export priority | Notes / questions for Dan |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `ICON-MOBILE-MENU` | Global header | N/A | Component/design-system area / `Header` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=32-27192> | Bespoke mobile header menu icon only if required. | Needs confirmation only if bespoke: `icon-menu.svg` | `public/assets/icons/` | `SVG` | Decorative if button has accessible label | No | Low | Prefer an accessible live button and app icon system. Export only if the icon is bespoke. |
| `ICON-NAV-CONTROL` | Project routes | All projects | Component/design-system area / `NavControl` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=32-27192> | Bespoke back/previous/next affordance only if required. | Needs confirmation only if bespoke: `icon-nav-control-[direction].svg` | `public/assets/icons/` | `SVG` | Decorative if paired with text or aria label | No | Low | Prefer live controls and app icon system. Do not export navigation controls as images. |
| `ICON-EXTERNAL-LINK` | `/contact`, `/cv`, possibly project links | N/A | Component/design-system area; exact source needs confirmation | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=32-27192> | Bespoke external-link affordance only if required. | Needs confirmation only if bespoke: `icon-external-link.svg` | `public/assets/icons/` | `SVG` | Decorative if link text is explicit | No | Low | Implement through the app icon system unless the Figma icon is genuinely bespoke. |
| `PROJECT-CARD-DECORATION` | `/work` | All projects | Component/design-system area; likely project-card composition needs confirmation | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=32-27192> | Decorative or structural card artwork only if not reproducible in CSS. | Needs confirmation | `public/assets/projects/{projectSlug}/` | `SVG` only if vector; otherwise no export | To confirm | To confirm | Low | Do not export whole project cards. Project cards should be live components using separate meaningful thumbnail assets where needed. |

## Asset Decisions Needed From Dan

- Confirm exact Figma layer or node sources for each route-level asset group.
- Confirm which route-level imagery groups actually contain exportable assets.
- Confirm alt text for every meaningful project image.
- Confirm which images are decorative and should use empty alt text.
- Confirm whether any project screenshots contain confidential, outdated, or redacted information.
- Confirm final CV PDF source.
- Confirm whether CV inline rendering should use page images, a PDF viewer, or a structured HTML CV.
- Confirm whether any contact, header, or navigation icon is genuinely bespoke and cannot use the app icon system.
- Confirm favicon and Open Graph/social preview requirements during deployment/metadata work.

## Routes With Missing Or Unconfirmed Visual Sources

At the route-frame level, no current app route is missing a likely Figma source based on `docs/route-to-figma-frame-mapping.md`.

The following remain unconfirmed at the asset layer level:

- Exact export layers for every route and project frame.
- Exact project-card thumbnail sources for `/work`.
- Exact component sources for Contact Details and CV Contact Details.
- Exact CV PDF source and inline CV rendering approach.
- Exact social preview and favicon sources.
- Exact mobile/responsive asset variants, if separate exports are needed.

Maps intentionally has no `/work/maps/execution` route or asset row.

## Assets That Should Probably Remain Live HTML Or Components

These should generally not be exported as images:

- Global header, desktop tabs, mobile menu, and active states.
- Segmented control and responsive selector variants.
- Nav chips and tertiary navigation.
- Nav control/back controls.
- Project cards, excluding their thumbnail imagery.
- Badges, callouts, pull-outs, and quote/kudos components when they contain readable text.
- Contact rows and CV contact rows.
- Buttons, links, and download controls.
- Tables, token listings, metrics, timelines, and text-heavy diagrams where semantic HTML is practical.
- Page headings, project metadata, body copy, and captions.

## Recommended Next Task

After Dan reviews this manifest, update it to a second draft with exact Figma layer/node references, final export/no-export decisions, final filenames, dimensions, and alt text status for each approved asset.

Only after that second draft is approved should asset export from Figma begin.
