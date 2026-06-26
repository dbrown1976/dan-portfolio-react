# Asset Manifest

**Status:** Final exported asset inventory  
**Repository:** `dbrown1976/dan-portfolio-react`  
**Last updated:** 2026-06-26

This document records the image assets currently exported, verified, and committed under `public/assets`.

The files under `public/assets` are the source of truth for this manifest. This document does not approve additional exports, move assets, rename assets, or define final alt text.

## Export Principles

- PNG is used for UI screenshots, diagrams, evidence visuals, and collages.
- JPG is used for portrait or photo-like assets.
- PDF should be used only if/when a CV download asset is added.
- Whole cards, pages, navigation controls, text sections, badges, buttons, contact rows, and layout blocks are rebuilt in React/CSS rather than exported as images.
- Project-card thumbnails may be exported as meaningful image assets.
- Contact icons should come from the app icon system unless a Figma icon is genuinely bespoke.
- Exact alt text remains to confirm when the images are wired into the content model.

## Folder Structure

```text
public/
  assets/
    about/
      about-me-daniel-brown-portrait.jpg
    projects/
      alert-notification/
      cloud-event-management/
      design-system/
      maps/
      next-generation-authoring/
    shared/
      work-wip-card-thumbnail.png
```

There are currently no committed `cv`, `icons`, `site`, or `social` asset folders.

## Naming Convention

Committed asset filenames use lowercase, hyphenated names.

Project page imagery generally follows this pattern:

```text
{project-slug}-{route-or-section}-{asset-role}-{descriptor}.png
```

Common asset roles:

- `hero`
- `evidence`
- `collage`
- `card-thumbnail`

Project slugs used in asset filenames:

- `next-generation-authoring`
- `design-system`
- `cloud-event-management`
- `alert-notification`
- `maps`

Work page thumbnails currently follow this pattern:

```text
work-{project-name}-card-thumbnail.png
```

Existing exception: the committed Next Generation Authoring homepage/work card assets use `next-gen-authoring` in their filenames:

- `homepage-next-gen-authoring-card-hero.png`
- `work-next-gen-authoring-card-thumbnail.png`

They are documented as committed and should not be renamed as part of this manifest update.

## Work Page And Shared Thumbnails

| Filename | Relative path | Intended route/page | Format |
|---|---|---|---|
| `work-next-gen-authoring-card-thumbnail.png` | `public/assets/projects/next-generation-authoring/work-next-gen-authoring-card-thumbnail.png` | `/work` project card thumbnail for Next Generation Authoring | PNG |
| `work-design-system-card-thumbnail.png` | `public/assets/projects/design-system/work-design-system-card-thumbnail.png` | `/work` project card thumbnail for Design System | PNG |
| `work-cloud-event-management-card-thumbnail.png` | `public/assets/projects/cloud-event-management/work-cloud-event-management-card-thumbnail.png` | `/work` project card thumbnail for Cloud Event Management | PNG |
| `work-alert-notification-card-thumbnail.png` | `public/assets/projects/alert-notification/work-alert-notification-card-thumbnail.png` | `/work` project card thumbnail for Alert Notification | PNG |
| `work-maps-card-thumbnail.png` | `public/assets/projects/maps/work-maps-card-thumbnail.png` | `/work` project card thumbnail for Maps | PNG |
| `work-wip-card-thumbnail.png` | `public/assets/shared/work-wip-card-thumbnail.png` | `/work` shared placeholder or WIP project card thumbnail | PNG |

## About

| Filename | Relative path | Intended route/page | Format |
|---|---|---|---|
| `about-me-daniel-brown-portrait.jpg` | `public/assets/about/about-me-daniel-brown-portrait.jpg` | `/about` portrait/photo asset | JPG |

## Next Generation Authoring

| Filename | Relative path | Intended route/page | Format |
|---|---|---|---|
| `homepage-next-gen-authoring-card-hero.png` | `public/assets/projects/next-generation-authoring/homepage-next-gen-authoring-card-hero.png` | `/` home page featured project card/hero | PNG |
| `next-generation-authoring-overview-hero.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-overview-hero.png` | `/work/next-generation-authoring` project overview | PNG |
| `next-generation-authoring-understanding-the-problem-understanding-hero.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-understanding-the-problem-understanding-hero.png` | `/work/next-generation-authoring/understanding-the-problem/understanding` hero | PNG |
| `next-generation-authoring-understanding-the-problem-understanding-evidence-quotes.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-understanding-the-problem-understanding-evidence-quotes.png` | `/work/next-generation-authoring/understanding-the-problem/understanding` evidence | PNG |
| `next-generation-authoring-understanding-the-problem-understanding-evidence-tickets.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-understanding-the-problem-understanding-evidence-tickets.png` | `/work/next-generation-authoring/understanding-the-problem/understanding` evidence | PNG |
| `next-generation-authoring-understanding-the-problem-understanding-evidence-usage.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-understanding-the-problem-understanding-evidence-usage.png` | `/work/next-generation-authoring/understanding-the-problem/understanding` evidence | PNG |
| `next-generation-authoring-understanding-the-problem-discovery-hero.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-understanding-the-problem-discovery-hero.png` | `/work/next-generation-authoring/understanding-the-problem/discovery` hero | PNG |
| `next-generation-authoring-understanding-the-problem-discovery-evidence-characteristics.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-understanding-the-problem-discovery-evidence-characteristics.png` | `/work/next-generation-authoring/understanding-the-problem/discovery` evidence | PNG |
| `next-generation-authoring-understanding-the-problem-discovery-evidence-research-plan.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-understanding-the-problem-discovery-evidence-research-plan.png` | `/work/next-generation-authoring/understanding-the-problem/discovery` evidence | PNG |
| `next-generation-authoring-understanding-the-problem-discovery-evidence-values.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-understanding-the-problem-discovery-evidence-values.png` | `/work/next-generation-authoring/understanding-the-problem/discovery` evidence | PNG |
| `next-generation-authoring-understanding-the-problem-direction-hero-competitors.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-understanding-the-problem-direction-hero-competitors.png` | `/work/next-generation-authoring/understanding-the-problem/direction` hero | PNG |
| `next-generation-authoring-understanding-the-problem-direction-hero-recommendations-preferences.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-understanding-the-problem-direction-hero-recommendations-preferences.png` | `/work/next-generation-authoring/understanding-the-problem/direction` hero | PNG |
| `next-generation-authoring-understanding-the-problem-direction-evidence-competitor-analysis-audit.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-understanding-the-problem-direction-evidence-competitor-analysis-audit.png` | `/work/next-generation-authoring/understanding-the-problem/direction` evidence | PNG |
| `next-generation-authoring-understanding-the-problem-direction-evidence-competitor-analysis-audit-cutout-flows.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-understanding-the-problem-direction-evidence-competitor-analysis-audit-cutout-flows.png` | `/work/next-generation-authoring/understanding-the-problem/direction` evidence | PNG |
| `next-generation-authoring-understanding-the-problem-direction-evidence-competitor-analysis-audit-cutout-layout.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-understanding-the-problem-direction-evidence-competitor-analysis-audit-cutout-layout.png` | `/work/next-generation-authoring/understanding-the-problem/direction` evidence | PNG |
| `next-generation-authoring-understanding-the-problem-direction-evidence-competitor-analysis-friction.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-understanding-the-problem-direction-evidence-competitor-analysis-friction.png` | `/work/next-generation-authoring/understanding-the-problem/direction` evidence | PNG |
| `next-generation-authoring-understanding-the-problem-direction-evidence-competitor-analysis-layout.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-understanding-the-problem-direction-evidence-competitor-analysis-layout.png` | `/work/next-generation-authoring/understanding-the-problem/direction` evidence | PNG |
| `next-generation-authoring-understanding-the-problem-direction-evidence-competitor-analysis-shortcuts.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-understanding-the-problem-direction-evidence-competitor-analysis-shortcuts.png` | `/work/next-generation-authoring/understanding-the-problem/direction` evidence | PNG |
| `next-generation-authoring-understanding-the-problem-direction-evidence-recommendations-options.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-understanding-the-problem-direction-evidence-recommendations-options.png` | `/work/next-generation-authoring/understanding-the-problem/direction` evidence | PNG |
| `next-generation-authoring-understanding-the-problem-direction-evidence-recommendations-preferences.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-understanding-the-problem-direction-evidence-recommendations-preferences.png` | `/work/next-generation-authoring/understanding-the-problem/direction` evidence | PNG |
| `next-generation-authoring-understanding-the-problem-direction-evidence-test.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-understanding-the-problem-direction-evidence-test.png` | `/work/next-generation-authoring/understanding-the-problem/direction` evidence | PNG |
| `next-generation-authoring-building-the-system-hero.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-building-the-system-hero.png` | `/work/next-generation-authoring/building-the-system/building-the-system` hero | PNG |
| `next-generation-authoring-building-the-system-evidence-collage.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-building-the-system-evidence-collage.png` | `/work/next-generation-authoring/building-the-system/building-the-system` evidence collage | PNG |
| `next-generation-authoring-building-the-system-evidence-design-system.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-building-the-system-evidence-design-system.png` | `/work/next-generation-authoring/building-the-system/building-the-system` evidence | PNG |
| `next-generation-authoring-building-the-system-evidence-legacy-text-input.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-building-the-system-evidence-legacy-text-input.png` | `/work/next-generation-authoring/building-the-system/building-the-system` evidence | PNG |
| `next-generation-authoring-building-the-system-evidence-text-input-critique.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-building-the-system-evidence-text-input-critique.png` | `/work/next-generation-authoring/building-the-system/building-the-system` evidence | PNG |
| `next-generation-authoring-building-the-system-evidence-text-input-questions.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-building-the-system-evidence-text-input-questions.png` | `/work/next-generation-authoring/building-the-system/building-the-system` evidence | PNG |
| `next-generation-authoring-building-the-system-patterns-hero.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-building-the-system-patterns-hero.png` | `/work/next-generation-authoring/building-the-system/patterns` hero | PNG |
| `next-generation-authoring-building-the-system-patterns-evidence-layout-divider.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-building-the-system-patterns-evidence-layout-divider.png` | `/work/next-generation-authoring/building-the-system/patterns` evidence | PNG |
| `next-generation-authoring-building-the-system-patterns-evidence-layout-header.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-building-the-system-patterns-evidence-layout-header.png` | `/work/next-generation-authoring/building-the-system/patterns` evidence | PNG |
| `next-generation-authoring-building-the-system-patterns-evidence-layout-tabs-one-column.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-building-the-system-patterns-evidence-layout-tabs-one-column.png` | `/work/next-generation-authoring/building-the-system/patterns` evidence | PNG |
| `next-generation-authoring-building-the-system-patterns-evidence-layout-tabs-two-column-gemini.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-building-the-system-patterns-evidence-layout-tabs-two-column-gemini.png` | `/work/next-generation-authoring/building-the-system/patterns` evidence | PNG |
| `next-generation-authoring-building-the-system-patterns-evidence-layout-tabs-two-column-pandora.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-building-the-system-patterns-evidence-layout-tabs-two-column-pandora.png` | `/work/next-generation-authoring/building-the-system/patterns` evidence | PNG |
| `next-generation-authoring-building-the-system-patterns-evidence-legacy-card.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-building-the-system-patterns-evidence-legacy-card.png` | `/work/next-generation-authoring/building-the-system/patterns` evidence | PNG |
| `next-generation-authoring-building-the-system-patterns-evidence-replacement-card.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-building-the-system-patterns-evidence-replacement-card.png` | `/work/next-generation-authoring/building-the-system/patterns` evidence | PNG |
| `next-generation-authoring-building-the-system-patterns-evidence-replacement-card-popover.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-building-the-system-patterns-evidence-replacement-card-popover.png` | `/work/next-generation-authoring/building-the-system/patterns` evidence | PNG |
| `next-generation-authoring-building-the-system-patterns-evidence-replacement-card-responsive.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-building-the-system-patterns-evidence-replacement-card-responsive.png` | `/work/next-generation-authoring/building-the-system/patterns` evidence | PNG |
| `next-generation-authoring-building-the-system-beta-hero.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-building-the-system-beta-hero.png` | `/work/next-generation-authoring/building-the-system/beta` hero | PNG |
| `next-generation-authoring-building-the-system-beta-evidence-sus-methodology-spirit.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-building-the-system-beta-evidence-sus-methodology-spirit.png` | `/work/next-generation-authoring/building-the-system/beta` evidence | PNG |
| `next-generation-authoring-building-the-system-beta-evidence-sus-pullout-green.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-building-the-system-beta-evidence-sus-pullout-green.png` | `/work/next-generation-authoring/building-the-system/beta` evidence | PNG |
| `next-generation-authoring-building-the-system-beta-evidence-sus-pullout-magenta.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-building-the-system-beta-evidence-sus-pullout-magenta.png` | `/work/next-generation-authoring/building-the-system/beta` evidence | PNG |
| `next-generation-authoring-building-the-system-beta-evidence-sus-replacement-questions.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-building-the-system-beta-evidence-sus-replacement-questions.png` | `/work/next-generation-authoring/building-the-system/beta` evidence | PNG |
| `next-generation-authoring-building-the-system-beta-evidence-sus-score-54.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-building-the-system-beta-evidence-sus-score-54.png` | `/work/next-generation-authoring/building-the-system/beta` evidence | PNG |
| `next-generation-authoring-building-the-system-beta-evidence-sus-score-70.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-building-the-system-beta-evidence-sus-score-70.png` | `/work/next-generation-authoring/building-the-system/beta` evidence | PNG |
| `next-generation-authoring-improvements-rollout-improvements-hero.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-improvements-rollout-improvements-hero.png` | `/work/next-generation-authoring/improvements-rollout/improvements` hero | PNG |
| `next-generation-authoring-improvements-rollout-improvements-evidence-analytics.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-improvements-rollout-improvements-evidence-analytics.png` | `/work/next-generation-authoring/improvements-rollout/improvements` evidence | PNG |
| `next-generation-authoring-improvements-rollout-improvements-evidence-duplicate-action.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-improvements-rollout-improvements-evidence-duplicate-action.png` | `/work/next-generation-authoring/improvements-rollout/improvements` evidence | PNG |
| `next-generation-authoring-improvements-rollout-improvements-evidence-engagement.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-improvements-rollout-improvements-evidence-engagement.png` | `/work/next-generation-authoring/improvements-rollout/improvements` evidence | PNG |
| `next-generation-authoring-improvements-rollout-improvements-evidence-rating-feedback.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-improvements-rollout-improvements-evidence-rating-feedback.png` | `/work/next-generation-authoring/improvements-rollout/improvements` evidence | PNG |
| `next-generation-authoring-improvements-rollout-improvements-evidence-rating-survey.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-improvements-rollout-improvements-evidence-rating-survey.png` | `/work/next-generation-authoring/improvements-rollout/improvements` evidence | PNG |
| `next-generation-authoring-improvements-rollout-improvements-evidence-rating-thank-you.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-improvements-rollout-improvements-evidence-rating-thank-you.png` | `/work/next-generation-authoring/improvements-rollout/improvements` evidence | PNG |
| `next-generation-authoring-improvements-rollout-improvements-evidence-skeleton-state.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-improvements-rollout-improvements-evidence-skeleton-state.png` | `/work/next-generation-authoring/improvements-rollout/improvements` evidence | PNG |
| `next-generation-authoring-improvements-rollout-improvements-evidence-survey.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-improvements-rollout-improvements-evidence-survey.png` | `/work/next-generation-authoring/improvements-rollout/improvements` evidence | PNG |
| `next-generation-authoring-improvements-rollout-rollout-hero.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-improvements-rollout-rollout-hero.png` | `/work/next-generation-authoring/improvements-rollout/rollout` hero | PNG |
| `next-generation-authoring-improvements-rollout-rollout-evidence-scheduling.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-improvements-rollout-rollout-evidence-scheduling.png` | `/work/next-generation-authoring/improvements-rollout/rollout` evidence | PNG |
| `next-generation-authoring-improvements-rollout-rollout-evidence-specification.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-improvements-rollout-rollout-evidence-specification.png` | `/work/next-generation-authoring/improvements-rollout/rollout` evidence | PNG |
| `next-generation-authoring-improvements-rollout-rollout-evidence-validation.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-improvements-rollout-rollout-evidence-validation.png` | `/work/next-generation-authoring/improvements-rollout/rollout` evidence | PNG |
| `next-generation-authoring-improvements-rollout-rollout-evidence-validation-legacy.png` | `public/assets/projects/next-generation-authoring/next-generation-authoring-improvements-rollout-rollout-evidence-validation-legacy.png` | `/work/next-generation-authoring/improvements-rollout/rollout` evidence | PNG |

No reflection-specific image assets are currently committed for `/work/next-generation-authoring/improvements-rollout/reflections`.

## Design System

| Filename | Relative path | Intended route/page | Format |
|---|---|---|---|
| `design-system-project-summary-hero-account.png` | `public/assets/projects/design-system/design-system-project-summary-hero-account.png` | `/work/design-system` project summary hero | PNG |
| `design-system-project-summary-hero-account-management.png` | `public/assets/projects/design-system/design-system-project-summary-hero-account-management.png` | `/work/design-system` project summary hero | PNG |
| `design-system-project-summary-hero-cms.png` | `public/assets/projects/design-system/design-system-project-summary-hero-cms.png` | `/work/design-system` project summary hero | PNG |
| `design-system-project-summary-hero-dam.png` | `public/assets/projects/design-system/design-system-project-summary-hero-dam.png` | `/work/design-system` project summary hero | PNG |
| `design-system-project-summary-hero-graphql.png` | `public/assets/projects/design-system/design-system-project-summary-hero-graphql.png` | `/work/design-system` project summary hero | PNG |
| `design-system-project-summary-hero-image-studio.png` | `public/assets/projects/design-system/design-system-project-summary-hero-image-studio.png` | `/work/design-system` project summary hero | PNG |
| `design-system-project-summary-hero-poi.png` | `public/assets/projects/design-system/design-system-project-summary-hero-poi.png` | `/work/design-system` project summary hero | PNG |
| `design-system-project-summary-hero-product-customisation.png` | `public/assets/projects/design-system/design-system-project-summary-hero-product-customisation.png` | `/work/design-system` project summary hero | PNG |
| `design-system-project-summary-hero-service-management.png` | `public/assets/projects/design-system/design-system-project-summary-hero-service-management.png` | `/work/design-system` project summary hero | PNG |
| `design-system-discovery-hero.png` | `public/assets/projects/design-system/design-system-discovery-hero.png` | `/work/design-system/discovery` hero | PNG |
| `design-system-discovery-evidence-legacy-button.png` | `public/assets/projects/design-system/design-system-discovery-evidence-legacy-button.png` | `/work/design-system/discovery` evidence | PNG |
| `design-system-discovery-evidence-legacy-form-card.png` | `public/assets/projects/design-system/design-system-discovery-evidence-legacy-form-card.png` | `/work/design-system/discovery` evidence | PNG |
| `design-system-discovery-evidence-legacy-grid-card.png` | `public/assets/projects/design-system/design-system-discovery-evidence-legacy-grid-card.png` | `/work/design-system/discovery` evidence | PNG |
| `design-system-discovery-evidence-legacy-icons.png` | `public/assets/projects/design-system/design-system-discovery-evidence-legacy-icons.png` | `/work/design-system/discovery` evidence | PNG |
| `design-system-discovery-evidence-legacy-multi-select.png` | `public/assets/projects/design-system/design-system-discovery-evidence-legacy-multi-select.png` | `/work/design-system/discovery` evidence | PNG |
| `design-system-discovery-evidence-legacy-toast.png` | `public/assets/projects/design-system/design-system-discovery-evidence-legacy-toast.png` | `/work/design-system/discovery` evidence | PNG |
| `design-system-design-language-system-hero.png` | `public/assets/projects/design-system/design-system-design-language-system-hero.png` | `/work/design-system/design-language-system` hero | PNG |
| `design-system-design-language-system-evidence.png` | `public/assets/projects/design-system/design-system-design-language-system-evidence.png` | `/work/design-system/design-language-system` evidence | PNG |
| `design-system-execution-hero.png` | `public/assets/projects/design-system/design-system-execution-hero.png` | `/work/design-system/execution` hero | PNG |

## Cloud Event Management

| Filename | Relative path | Intended route/page | Format |
|---|---|---|---|
| `cloud-event-management-project-summary-hero.png` | `public/assets/projects/cloud-event-management/cloud-event-management-project-summary-hero.png` | `/work/cloud-event-management` project summary hero | PNG |
| `cloud-event-management-project-summary-evidence-email.png` | `public/assets/projects/cloud-event-management/cloud-event-management-project-summary-evidence-email.png` | `/work/cloud-event-management` project summary evidence | PNG |
| `cloud-event-management-project-summary-evidence-event-source.png` | `public/assets/projects/cloud-event-management/cloud-event-management-project-summary-evidence-event-source.png` | `/work/cloud-event-management` project summary evidence | PNG |
| `cloud-event-management-project-summary-evidence-get-started.png` | `public/assets/projects/cloud-event-management/cloud-event-management-project-summary-evidence-get-started.png` | `/work/cloud-event-management` project summary evidence | PNG |
| `cloud-event-management-project-summary-evidence-incident.png` | `public/assets/projects/cloud-event-management/cloud-event-management-project-summary-evidence-incident.png` | `/work/cloud-event-management` project summary evidence | PNG |
| `cloud-event-management-project-summary-evidence-runbook.png` | `public/assets/projects/cloud-event-management/cloud-event-management-project-summary-evidence-runbook.png` | `/work/cloud-event-management` project summary evidence | PNG |
| `cloud-event-management-research-hero.png` | `public/assets/projects/cloud-event-management/cloud-event-management-research-hero.png` | `/work/cloud-event-management/research` hero | PNG |
| `cloud-event-management-research-evidence-annette-persona.png` | `public/assets/projects/cloud-event-management/cloud-event-management-research-evidence-annette-persona.png` | `/work/cloud-event-management/research` evidence | PNG |
| `cloud-event-management-research-evidence-hills.png` | `public/assets/projects/cloud-event-management/cloud-event-management-research-evidence-hills.png` | `/work/cloud-event-management/research` evidence | PNG |
| `cloud-event-management-research-evidence-roadmap.png` | `public/assets/projects/cloud-event-management/cloud-event-management-research-evidence-roadmap.png` | `/work/cloud-event-management/research` evidence | PNG |
| `cloud-event-management-research-evidence-sticky-note-board.png` | `public/assets/projects/cloud-event-management/cloud-event-management-research-evidence-sticky-note-board.png` | `/work/cloud-event-management/research` evidence | PNG |
| `cloud-event-management-creative-process-hero.png` | `public/assets/projects/cloud-event-management/cloud-event-management-creative-process-hero.png` | `/work/cloud-event-management/creative-process` hero | PNG |
| `cloud-event-management-creative-process-evidence-incident-drag-and-drop.png` | `public/assets/projects/cloud-event-management/cloud-event-management-creative-process-evidence-incident-drag-and-drop.png` | `/work/cloud-event-management/creative-process` evidence | PNG |
| `cloud-event-management-creative-process-evidence-incident-drag-and-drop-sketch.png` | `public/assets/projects/cloud-event-management/cloud-event-management-creative-process-evidence-incident-drag-and-drop-sketch.png` | `/work/cloud-event-management/creative-process` evidence | PNG |
| `cloud-event-management-creative-process-evidence-incident-ideation.png` | `public/assets/projects/cloud-event-management/cloud-event-management-creative-process-evidence-incident-ideation.png` | `/work/cloud-event-management/creative-process` evidence | PNG |
| `cloud-event-management-creative-process-evidence-incident-ideation-ui-options.png` | `public/assets/projects/cloud-event-management/cloud-event-management-creative-process-evidence-incident-ideation-ui-options.png` | `/work/cloud-event-management/creative-process` evidence | PNG |
| `cloud-event-management-creative-process-evidence-incident-ingestion-sketch.png` | `public/assets/projects/cloud-event-management/cloud-event-management-creative-process-evidence-incident-ingestion-sketch.png` | `/work/cloud-event-management/creative-process` evidence | PNG |
| `cloud-event-management-creative-process-evidence-incident-list-ui.png` | `public/assets/projects/cloud-event-management/cloud-event-management-creative-process-evidence-incident-list-ui.png` | `/work/cloud-event-management/creative-process` evidence | PNG |
| `cloud-event-management-creative-process-evidence-incident-workflow.png` | `public/assets/projects/cloud-event-management/cloud-event-management-creative-process-evidence-incident-workflow.png` | `/work/cloud-event-management/creative-process` evidence | PNG |
| `cloud-event-management-execution-hero.png` | `public/assets/projects/cloud-event-management/cloud-event-management-execution-hero.png` | `/work/cloud-event-management/execution` hero | PNG |
| `cloud-event-management-execution-evidence-chrome-inspector.png` | `public/assets/projects/cloud-event-management/cloud-event-management-execution-evidence-chrome-inspector.png` | `/work/cloud-event-management/execution` evidence | PNG |
| `cloud-event-management-execution-evidence-fua-comment.png` | `public/assets/projects/cloud-event-management/cloud-event-management-execution-evidence-fua-comment.png` | `/work/cloud-event-management/execution` evidence | PNG |
| `cloud-event-management-execution-evidence-heuristic-evaluation.png` | `public/assets/projects/cloud-event-management/cloud-event-management-execution-evidence-heuristic-evaluation.png` | `/work/cloud-event-management/execution` evidence | PNG |
| `cloud-event-management-execution-evidence-specification.png` | `public/assets/projects/cloud-event-management/cloud-event-management-execution-evidence-specification.png` | `/work/cloud-event-management/execution` evidence | PNG |
| `cloud-event-management-execution-evidence-zenhub-backlog.png` | `public/assets/projects/cloud-event-management/cloud-event-management-execution-evidence-zenhub-backlog.png` | `/work/cloud-event-management/execution` evidence | PNG |

## Alert Notification

| Filename | Relative path | Intended route/page | Format |
|---|---|---|---|
| `alert-notification-project-summary-hero.png` | `public/assets/projects/alert-notification/alert-notification-project-summary-hero.png` | `/work/alert-notification` project summary hero | PNG |
| `alert-notification-research-evidence-barbara-persona.png` | `public/assets/projects/alert-notification/alert-notification-research-evidence-barbara-persona.png` | `/work/alert-notification/research` evidence | PNG |
| `alert-notification-research-evidence-meeting-notes.png` | `public/assets/projects/alert-notification/alert-notification-research-evidence-meeting-notes.png` | `/work/alert-notification/research` evidence | PNG |
| `alert-notification-research-evidence-rj-persona.png` | `public/assets/projects/alert-notification/alert-notification-research-evidence-rj-persona.png` | `/work/alert-notification/research` evidence | PNG |
| `alert-notification-research-evidence-user-task-matrix.png` | `public/assets/projects/alert-notification/alert-notification-research-evidence-user-task-matrix.png` | `/work/alert-notification/research` evidence | PNG |
| `alert-notification-creative-process-evidence-colour-scheme.png` | `public/assets/projects/alert-notification/alert-notification-creative-process-evidence-colour-scheme.png` | `/work/alert-notification/creative-process` evidence | PNG |
| `alert-notification-creative-process-evidence-icon-ideation-sketch.png` | `public/assets/projects/alert-notification/alert-notification-creative-process-evidence-icon-ideation-sketch.png` | `/work/alert-notification/creative-process` evidence | PNG |
| `alert-notification-creative-process-evidence-layout-sketch.png` | `public/assets/projects/alert-notification/alert-notification-creative-process-evidence-layout-sketch.png` | `/work/alert-notification/creative-process` evidence | PNG |
| `alert-notification-creative-process-evidence-logo-concept.png` | `public/assets/projects/alert-notification/alert-notification-creative-process-evidence-logo-concept.png` | `/work/alert-notification/creative-process` evidence | PNG |
| `alert-notification-creative-process-evidence-push-notification-sketch.png` | `public/assets/projects/alert-notification/alert-notification-creative-process-evidence-push-notification-sketch.png` | `/work/alert-notification/creative-process` evidence | PNG |
| `alert-notification-creative-process-evidence-what-where-when-sketch.png` | `public/assets/projects/alert-notification/alert-notification-creative-process-evidence-what-where-when-sketch.png` | `/work/alert-notification/creative-process` evidence | PNG |
| `alert-notification-creative-process-evidence-workflow-sketch.png` | `public/assets/projects/alert-notification/alert-notification-creative-process-evidence-workflow-sketch.png` | `/work/alert-notification/creative-process` evidence | PNG |
| `alert-notification-execution-evidence-alerts-overview.png` | `public/assets/projects/alert-notification/alert-notification-execution-evidence-alerts-overview.png` | `/work/alert-notification/execution` evidence | PNG |
| `alert-notification-execution-evidence-mobile-app-issues.png` | `public/assets/projects/alert-notification/alert-notification-execution-evidence-mobile-app-issues.png` | `/work/alert-notification/execution` evidence | PNG |
| `alert-notification-execution-evidence-user-quotes.png` | `public/assets/projects/alert-notification/alert-notification-execution-evidence-user-quotes.png` | `/work/alert-notification/execution` evidence | PNG |

## Maps

| Filename | Relative path | Intended route/page | Format |
|---|---|---|---|
| `maps-research-evidence-collage.png` | `public/assets/projects/maps/maps-research-evidence-collage.png` | `/work/maps/research` evidence collage | PNG |
| `maps-creative-process-evidence-collage.png` | `public/assets/projects/maps/maps-creative-process-evidence-collage.png` | `/work/maps/creative-process` evidence collage | PNG |

Maps has no committed Execution route assets, matching the confirmed IA that Maps has only Project Summary, Research, and Creative Process pages.

## Not Present In Current Asset Set

- No CV PDF asset is currently committed.
- No CV inline page image assets are currently committed.
- No favicon or Open Graph/social preview assets are currently committed.
- No standalone icon exports are currently committed.
- No whole-card, whole-page, navigation, text-section, badge, button, contact-row, or layout-block image exports are currently committed.

## Recommended Next Task

Wire the committed image paths into typed project/content data, adding alt text at the point each image is assigned to a route, section, or component.
