# Route to Figma Frame Mapping

**Status:** First draft  
**Repository:** `dbrown1976/dan-portfolio-react`  
**Last updated:** 2026-06-25

This document maps the current scaffold routes to likely Figma source frames for future visual implementation.

It is an implementation guide only. It does not define production copy, export assets, or replace the Portfolio Architecture Specification as the behavioural source of truth.

## Sources

### Repository sources

- `docs/portfolio-architecture-specification-v1.1.md`
- `docs/technical-architecture.md`
- `src/content/portfolio.ts`
- `src/app/page.tsx`
- `src/app/work/page.tsx`
- `src/app/about/page.tsx`
- `src/app/cv/page.tsx`
- `src/app/contact/page.tsx`
- `src/app/work/[projectSlug]/[[...slug]]/page.tsx`
- `src/templates/*`

### Figma sources

- Portfolio file: <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=116-40759>
- Component/design-system area: <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=32-27192>

## Figma Discovery Notes

The Figma file exposes one top-level page named `Portfolio IA + Components`.

Read-only inspection found a node named `Portfolio Prototype` at node `116:40759`. The original portfolio URL points to this node. It contains the likely source frames for top-level pages and project pages.

The component/design-system area is also within `Portfolio IA + Components`, with a `Design System` section containing reusable sources such as `Header`, `Tab Group`, `SegmentedControl`, `Nav Chip`, `NavControl`, `Kudos`, `Image Container`, and related layout/component examples.

Public labels, app routes, and slugs should continue to come from the architecture specification and `src/content/portfolio.ts`, not directly from Figma frame names.

## Confirmed Route Decisions

- The short project route is the canonical project home route.
- `/work/next-generation-authoring` renders the Next Generation Authoring overview/home page directly.
- `/work/design-system`, `/work/cloud-event-management`, `/work/alert-notification`, and `/work/maps` render their project summary/home page directly.
- Explicit default segment routes such as `/work/next-generation-authoring/overview` and `/work/design-system/project-summary` may remain valid for now, but should eventually redirect to the short project route.
- Parent project segment routes with tertiary navigation may remain valid for now, but should eventually redirect to their first subsection.
- Maps has three project pages only: Project Summary, Research, and Creative Process.

## Confirmed Figma-to-IA Label Mappings

| Figma wording | Public IA label |
|---|---|
| `H2. 2 Problem Definition` | Understanding |
| `H2. 4 Evidence` | Direction |
| `H2. 10 Reflects` | Reflections |
| `Research Design System` | Discovery |
| `Foundations I` | Design Language & System |
| `Adoption Design System` | Execution |
| `Process CEM` | Creative Process |
| `Process Maps` | Creative Process |
| `Process AN` | Creative Process |

## Static Route Mapping

| App route | Route type | Current scaffold template | Intended final template | Figma page/frame/source | Figma node URL, if known | Content/status notes | Assets likely needed | Questions for Dan |
|---|---|---|---|---|---|---|---|---|
| `/` | Static route | `HomeTemplate` via `src/app/page.tsx` | Home Template | `Portfolio IA + Components` / `Portfolio Prototype` / `Home` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=116-40760> | Top-level portfolio landing page. Distinct from `H1. 1 Home`, which appears to be the Next Generation Authoring project home. | Home hero/intro imagery if present; header/tab components; any background or decorative assets identified in Figma. | None for route mapping. Asset and responsive details deferred. |
| `/work` | Static route | `WorkTemplate` via `src/app/work/page.tsx` | Work Template | `Portfolio IA + Components` / `Portfolio Prototype` / `Work` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=116-41423> | Work listing route. Current scaffold uses project data and should link project cards to canonical short project routes. | Project navigation card imagery/thumbnails for all projects; header/tab components. | None for route mapping. Project-card image sources deferred. |
| `/about` | Static route | `SimplePageTemplate` via `src/app/about/page.tsx` | About Template | `Portfolio IA + Components` / `Portfolio Prototype` / `About Me` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=116-41546> | Public route label is `About`; Figma frame is `About Me`. Use spec label in UI/navigation unless Dan approves otherwise. | About image/portrait if present; Kudos/testimonial content; supporting imagery. | None for route mapping. |
| `/cv` | Static route | `SimplePageTemplate` via `src/app/cv/page.tsx` | CV Template | `Portfolio IA + Components` / `Portfolio Prototype` / `CV` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=131-2161> | CV route should eventually provide downloadable PDF plus accessible inline rendering per specification. | CV PDF; CV page images; CV contact detail rows; download/link icons if used. | CV PDF source and exact exports deferred to asset manifest / visual implementation. |
| `/contact` | Static route | `SimplePageTemplate` via `src/app/contact/page.tsx` | Contact Template | `Portfolio IA + Components` / `Portfolio Prototype` / `Contact` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=116-41721> | Contact route should use semantic `tel:`, `mailto:`, and external LinkedIn links. | Contact row icons if present; external-link affordance if present. | Final contact URLs deferred to visual implementation. |

## Next Generation Authoring Route Mapping

| App route | Route type | Current scaffold template | Intended final template | Figma page/frame/source | Figma node URL, if known | Content/status notes | Assets likely needed | Questions for Dan |
|---|---|---|---|---|---|---|---|---|
| `/work/next-generation-authoring` | Project default route | `ProjectRouteTemplate` with `routeKind="projectDefault"` | Project Home Template | `Portfolio IA + Components` / `Portfolio Prototype` / `H1. 1 Home` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=247-19205> | Canonical project home route. Renders the `overview` home page directly. | NGA project hero imagery; project overview assets; segmented control; nav control; header. | None for route mapping. |
| `/work/next-generation-authoring/overview` | Project segment route | `ProjectRouteTemplate` / `projectHome` segment | Project Home Template | `Portfolio IA + Components` / `Portfolio Prototype` / `H1. 1 Home` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=247-19205> | Explicit default segment route remains valid for now, but should eventually redirect to `/work/next-generation-authoring`. | Same as project home. | None for route mapping. |
| `/work/next-generation-authoring/understanding-the-problem` | Project segment route | `ProjectRouteTemplate` / `projectWork` segment | Project Work Template | `Portfolio Prototype` / `H2. 2 Problem Definition` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=247-21772> | Parent segment route with tertiary nav. May remain valid for now, but should eventually redirect to `/work/next-generation-authoring/understanding-the-problem/understanding`. | Project work content imagery; tertiary nav chips; evidence/screenshot assets if present. | None for route mapping. |
| `/work/next-generation-authoring/understanding-the-problem/understanding` | Project subsection route | `ProjectRouteTemplate` / `projectWork` subsection | Project Work Template | `Portfolio Prototype` / `H2. 2 Problem Definition` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=247-21772> | Confirmed mapping: `H2. 2 Problem Definition` maps to public subsection `Understanding`. | Project screenshots/diagrams/callouts in the frame; tertiary nav chips. | None for route mapping. |
| `/work/next-generation-authoring/understanding-the-problem/discovery` | Project subsection route | `ProjectRouteTemplate` / `projectWork` subsection | Project Work Template | `Portfolio IA + Components` / `Portfolio Prototype` / `H2. 3 Discovery` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=286-22179> | Direct Figma match for `Discovery`. | Project discovery screenshots/evidence assets; tertiary nav chips. | Responsive/mobile variants deferred to visual implementation. |
| `/work/next-generation-authoring/understanding-the-problem/direction` | Project subsection route | `ProjectRouteTemplate` / `projectWork` subsection | Project Work Template | `Portfolio Prototype` / `H2. 4 Evidence` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=318-51022> | Confirmed mapping: `H2. 4 Evidence` maps to public subsection `Direction`. | Evidence scrapbook imagery; screenshots; callouts; tertiary nav chips. | None for route mapping. |
| `/work/next-generation-authoring/building-the-system` | Project segment route | `ProjectRouteTemplate` / `projectWork` segment | Project Work Template | `Portfolio Prototype` / `H2. 5 System Building` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=375-52097> | Parent segment route with tertiary nav. May remain valid for now, but should eventually redirect to `/work/next-generation-authoring/building-the-system/building-the-system`. | System-building screenshots/diagrams; tertiary nav chips. | None for route mapping. |
| `/work/next-generation-authoring/building-the-system/building-the-system` | Project subsection route | `ProjectRouteTemplate` / `projectWork` subsection | Project Work Template | `Portfolio IA + Components` / `Portfolio Prototype` / `H2. 5 System Building` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=375-52097> | Figma/source name and public subsection align closely. | System-building screenshots/diagrams; tertiary nav chips. | Visual section boundaries deferred to visual implementation. |
| `/work/next-generation-authoring/building-the-system/patterns` | Project subsection route | `ProjectRouteTemplate` / `projectWork` subsection | Project Work Template | `Portfolio IA + Components` / `Portfolio Prototype` / `H2. 6 Patterns` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=375-52150> | Direct Figma match for `Patterns`. A duplicate top-level frame named `H2. 6 Patterns` exists outside `Portfolio Prototype`; prefer this child frame unless visual review shows a mismatch. | Pattern screenshots/evidence scrapbook imagery; tertiary nav chips. | None for route mapping. |
| `/work/next-generation-authoring/building-the-system/beta` | Project subsection route | `ProjectRouteTemplate` / `projectWork` subsection | Project Work Template | `Portfolio IA + Components` / `Portfolio Prototype` / `H2. 7 Beta` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=375-52200> | Direct Figma match for `Beta`. | Beta screenshots/evidence imagery; tertiary nav chips. | Asset/component split deferred to asset manifest / visual implementation. |
| `/work/next-generation-authoring/improvements-rollout` | Project segment route | `ProjectRouteTemplate` / `projectWork` segment | Project Work Template | `Portfolio Prototype` / `H2. 8 Improvements` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=407-52589> | Parent segment route with tertiary nav. May remain valid for now, but should eventually redirect to `/work/next-generation-authoring/improvements-rollout/improvements`. | Improvement/rollout screenshots; tertiary nav chips. | None for route mapping. |
| `/work/next-generation-authoring/improvements-rollout/improvements` | Project subsection route | `ProjectRouteTemplate` / `projectWork` subsection | Project Work Template | `Portfolio IA + Components` / `Portfolio Prototype` / `H2. 8 Improvements` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=407-52589> | Direct Figma match for `Improvements`. | Improvements screenshots/callouts; tertiary nav chips. | Visual section boundaries deferred to visual implementation. |
| `/work/next-generation-authoring/improvements-rollout/rollout` | Project subsection route | `ProjectRouteTemplate` / `projectWork` subsection | Project Work Template | `Portfolio IA + Components` / `Portfolio Prototype` / `H2. 9 Rollout` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=407-52632> | Direct Figma match for `Rollout`. | Rollout screenshots/badges/callouts; tertiary nav chips. | Asset/component split deferred to asset manifest / visual implementation. |
| `/work/next-generation-authoring/improvements-rollout/reflections` | Project subsection route | `ProjectRouteTemplate` / `projectWork` subsection | Project Work Template | `Portfolio Prototype` / `H2. 10 Reflects` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=407-52684> | Confirmed mapping: `H2. 10 Reflects` maps to public subsection `Reflections`. | Reflection page imagery; pull-out/quote component if present; tertiary nav chips. | None for route mapping. |

## Design System Route Mapping

| App route | Route type | Current scaffold template | Intended final template | Figma page/frame/source | Figma node URL, if known | Content/status notes | Assets likely needed | Questions for Dan |
|---|---|---|---|---|---|---|---|---|
| `/work/design-system` | Project default route | `ProjectRouteTemplate` with `routeKind="projectDefault"` | Project Home Template | `Portfolio Prototype` / `H2. 1 Summary Design System` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=549-57295> | Canonical project home route. Renders the `project-summary` home page directly. | Design system summary hero imagery; project screenshots; segmented control. | None for route mapping. |
| `/work/design-system/project-summary` | Project segment route | `ProjectRouteTemplate` / `projectHome` segment | Project Home Template | `Portfolio IA + Components` / `Portfolio Prototype` / `H2. 1 Summary Design System` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=549-57295> | Explicit default segment route remains valid for now, but should eventually redirect to `/work/design-system`. | Summary hero/project imagery; segmented control. | None for route mapping. |
| `/work/design-system/discovery` | Project segment route | `ProjectRouteTemplate` / `projectWork` segment | Project Work Template | `Portfolio Prototype` / `H2. 2 Research Design System` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=549-57174> | Confirmed mapping: `Research Design System` maps to public segment `Discovery`. | Research/discovery screenshots and diagrams. | None for route mapping. |
| `/work/design-system/design-language-system` | Project segment route | `ProjectRouteTemplate` / `projectWork` segment | Project Work Template | `Portfolio Prototype` / `H2. 3 Foundations I` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=549-57215> | Confirmed mapping: `Foundations I` maps to public segment `Design Language & System`. | Token/foundation/system imagery; design-system screenshots. | None for route mapping. |
| `/work/design-system/execution` | Project segment route | `ProjectRouteTemplate` / `projectWork` segment | Project Work Template | `Portfolio Prototype` / `H2. 4 Adoption Design System` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=549-57257> | Confirmed mapping: `Adoption Design System` maps to public segment `Execution`. | Adoption/execution screenshots; metrics or supporting imagery. | None for route mapping. |

## Cloud Event Management Route Mapping

| App route | Route type | Current scaffold template | Intended final template | Figma page/frame/source | Figma node URL, if known | Content/status notes | Assets likely needed | Questions for Dan |
|---|---|---|---|---|---|---|---|---|
| `/work/cloud-event-management` | Project default route | `ProjectRouteTemplate` with `routeKind="projectDefault"` | Project Home Template | `Portfolio Prototype` / `H2. 1 Summary CEM` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=521-55271> | Canonical project home route. Renders the `project-summary` home page directly. `CEM` appears to mean Cloud Event Management. | CEM summary imagery; project screenshots; segmented control. | None for route mapping. |
| `/work/cloud-event-management/project-summary` | Project segment route | `ProjectRouteTemplate` / `projectHome` segment | Project Home Template | `Portfolio IA + Components` / `Portfolio Prototype` / `H2. 1 Summary CEM` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=521-55271> | Explicit default segment route remains valid for now, but should eventually redirect to `/work/cloud-event-management`. | CEM summary imagery; hero/project assets. | None for route mapping. |
| `/work/cloud-event-management/research` | Project segment route | `ProjectRouteTemplate` / `projectWork` segment | Project Work Template | `Portfolio IA + Components` / `Portfolio Prototype` / `H2. 2 Research CEM` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=521-55155> | Direct research route mapping, assuming `CEM` abbreviation is correct. | Research screenshots/diagrams. | None for route mapping. |
| `/work/cloud-event-management/creative-process` | Project segment route | `ProjectRouteTemplate` / `projectWork` segment | Project Work Template | `Portfolio Prototype` / `H2. 3 Process CEM` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=521-55191> | Confirmed mapping: `Process CEM` maps to public segment `Creative Process`. | Process screenshots/diagrams. | None for route mapping. |
| `/work/cloud-event-management/execution` | Project segment route | `ProjectRouteTemplate` / `projectWork` segment | Project Work Template | `Portfolio IA + Components` / `Portfolio Prototype` / `H2. 4 Execution CEM` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=521-55235> | Direct execution route mapping, assuming `CEM` abbreviation is correct. | Execution screenshots/evidence imagery. | None for route mapping. |

## Alert Notification Route Mapping

| App route | Route type | Current scaffold template | Intended final template | Figma page/frame/source | Figma node URL, if known | Content/status notes | Assets likely needed | Questions for Dan |
|---|---|---|---|---|---|---|---|---|
| `/work/alert-notification` | Project default route | `ProjectRouteTemplate` with `routeKind="projectDefault"` | Project Home Template | `Portfolio Prototype` / `H2. 1 Summary AN` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=530-55720> | Canonical project home route. Renders the `project-summary` home page directly. `AN` appears to mean Alert Notification. | AN summary imagery; project screenshots; segmented control. | None for route mapping. |
| `/work/alert-notification/project-summary` | Project segment route | `ProjectRouteTemplate` / `projectHome` segment | Project Home Template | `Portfolio IA + Components` / `Portfolio Prototype` / `H2. 1 Summary AN` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=530-55720> | Explicit default segment route remains valid for now, but should eventually redirect to `/work/alert-notification`. | AN summary imagery; hero/project assets. | None for route mapping. |
| `/work/alert-notification/research` | Project segment route | `ProjectRouteTemplate` / `projectWork` segment | Project Work Template | `Portfolio IA + Components` / `Portfolio Prototype` / `H2. 2 Research AN` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=530-55598> | Direct research route mapping, assuming `AN` abbreviation is correct. | Research screenshots/diagrams. | None for route mapping. |
| `/work/alert-notification/creative-process` | Project segment route | `ProjectRouteTemplate` / `projectWork` segment | Project Work Template | `Portfolio Prototype` / `H2. 3 Process AN` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=530-55636> | Confirmed mapping: `Process AN` maps to public segment `Creative Process`. | Process screenshots/diagrams; possible hero asset. | None for route mapping. |
| `/work/alert-notification/execution` | Project segment route | `ProjectRouteTemplate` / `projectWork` segment | Project Work Template | `Portfolio IA + Components` / `Portfolio Prototype` / `H2. 4 Execution AN` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=530-55682> | Direct execution route mapping, assuming `AN` abbreviation is correct. | Execution screenshots/evidence imagery. | None for route mapping. |

## Maps Route Mapping

| App route | Route type | Current scaffold template | Intended final template | Figma page/frame/source | Figma node URL, if known | Content/status notes | Assets likely needed | Questions for Dan |
|---|---|---|---|---|---|---|---|---|
| `/work/maps` | Project default route | `ProjectRouteTemplate` with `routeKind="projectDefault"` | Project Home Template | `Portfolio Prototype` / `H2. 1 Summary Maps` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=530-56058> | Canonical project home route. Renders the `project-summary` home page directly. Maps has three project pages only. | Maps summary imagery; project screenshots; segmented control. | None for route mapping. |
| `/work/maps/project-summary` | Project segment route | `ProjectRouteTemplate` / `projectHome` segment | Project Home Template | `Portfolio IA + Components` / `Portfolio Prototype` / `H2. 1 Summary Maps` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=530-56058> | Explicit default segment route remains valid for now, but should eventually redirect to `/work/maps`. | Maps summary imagery; hero/project assets. | None for route mapping. |
| `/work/maps/research` | Project segment route | `ProjectRouteTemplate` / `projectWork` segment | Project Work Template | `Portfolio IA + Components` / `Portfolio Prototype` / `H2. 2 Research Maps` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=530-55936> | Direct research route mapping. | Research screenshots/diagrams. | None for route mapping. |
| `/work/maps/creative-process` | Project segment route | `ProjectRouteTemplate` / `projectWork` segment | Project Work Template | `Portfolio Prototype` / `H2. 3 Process Maps` | <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=530-55974> | Confirmed mapping: `Process Maps` maps to public segment `Creative Process`. | Process screenshots/diagrams. | None for route mapping. |

## Component and Design-System Sources

| App surface | Current scaffold source | Intended final component/source | Figma page/frame/source | Figma node URL, if known | Content/status notes | Assets likely needed | Questions for Dan |
|---|---|---|---|---|---|---|---|
| Global header | `SiteHeader` | Header + Tab Group + Tab + mobile Header Button/Menu | `Portfolio IA + Components` / `Design System` / `Header`, `Tab Group`, `tab` | Component-library area starts at <https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=32-27192> | Header appears repeatedly inside route frames. Final implementation should derive active state from route. | Icons for mobile menu if needed. | Exact mobile/responsive variants deferred to visual implementation. |
| Work project cards | `WorkTemplate` list links | Project Navigation Card | `Portfolio IA + Components` / `Design System`; likely `LGSquareCard` or project-card composition | Needs confirmation | Figma component names do not exactly match the registry label `Project Navigation Card`. | Project thumbnails/card imagery. | Exact component variant and image sources deferred to visual implementation. |
| Project segmented navigation | `ProjectRouteTemplate` metadata only | Segmented Control + responsive selector | `Portfolio IA + Components` / `Design System` / `SegmentedControl` | Needs confirmation | Final selected state must remain URL-derived. | No image asset expected unless chevron/icon is not componentized. | Exact responsive selector variants deferred to visual implementation. |
| NGA tertiary navigation | `ProjectRouteTemplate` metadata only | Nav Chip / Level 4 tertiary navigation | `Portfolio IA + Components` / `Design System` / `Nav Chip`, `Level 3 Nav` | Needs confirmation | Only used where a selected segment has subsections. | No image asset expected unless chip icons exist. | Exact tertiary responsive variants deferred to visual implementation. |
| Back navigation | Not yet implemented | Nav Control | `Portfolio IA + Components` / `Design System` / `NavControl` | Needs confirmation | Spec uses Nav Control for parent/back navigation. | Back arrow icon if not bundled in component. | Exact component variant deferred to visual implementation. |
| Project imagery | Not yet implemented | Image Container + Next Image | `Portfolio IA + Components` / `Design System` / `Image Container`; route frames contain source rectangles/screenshots | Needs confirmation per asset | Asset export should be manifest-driven. | WebP/PNG/SVG exports with alt text. | Exact layer names, image exports, and alt text deferred to asset manifest. |
| Testimonials/quotes | Not yet implemented | Kudos / PullOut where appropriate | `Portfolio IA + Components` / `Design System` / `Kudos`, `PullOut` | Needs confirmation | Used by About and possibly project pages. | Usually no image export unless rendered as complex artwork. | Exact component variants deferred to visual implementation. |
| Contact details | Not yet implemented | Contact Details / CV Contact Details | Component/design-system area; exact component source needs confirmation | Needs confirmation | Spec distinguishes CV contact details from Contact page details. | Link icons if present. | Exact component variants and final URLs deferred to visual implementation. |

## Missing Information Needed From Dan

The main route and Figma-to-IA mapping decisions in this document are now confirmed.

These questions are intentionally deferred to the asset manifest / visual implementation phase:

- final asset layer names
- alt text
- exact image exports
- final CV PDF source
- final contact URLs
- exact component variants
- responsive/mobile component variants
- project-card image sources

## Ambiguous Routes

| Route | Ambiguity | Recommended resolution |
|---|---|---|
| `/work/next-generation-authoring/understanding-the-problem` | Valid for now, but not canonical once redirects are implemented. | Eventually redirect to `/work/next-generation-authoring/understanding-the-problem/understanding`. |
| `/work/next-generation-authoring/building-the-system` | Valid for now, but not canonical once redirects are implemented. | Eventually redirect to `/work/next-generation-authoring/building-the-system/building-the-system`. |
| `/work/next-generation-authoring/improvements-rollout` | Valid for now, but not canonical once redirects are implemented. | Eventually redirect to `/work/next-generation-authoring/improvements-rollout/improvements`. |
| `/work/{projectSlug}/{defaultSegmentSlug}` | Explicit default segment routes are valid for now, but duplicate canonical project home routes. | Eventually redirect to `/work/{projectSlug}`. |

## Scaffold Template Sufficiency

The current scaffold templates are sufficient for this mapping and for the next documentation step.

They are not sufficient for visual implementation as final structures. The scaffold deliberately uses placeholder templates:

- `HomeTemplate`
- `WorkTemplate`
- `SimplePageTemplate`
- `ProjectRouteTemplate`
- `PagePlaceholderTemplate`
- `SiteHeader`

For visual implementation, these should evolve into the approved hierarchy:

```text
Route
  Template
    Section
      Layout
        Component
          Token
```

No new route structure is required for the mapped Figma pages. The existing `app/work/[projectSlug]/[[...slug]]` route is sufficient for the project default, segment, and subsection routes.

## Recommended Next Task

After Dan reviews this mapping, create the first asset manifest draft.

The asset manifest should use this route-to-frame mapping to identify source frames/layers, target public paths, export format, dimensions, alt text status, and whether each visual should be exported as an asset or rebuilt as a component.
