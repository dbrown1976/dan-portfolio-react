# Portfolio Architecture Specification

**Version:** 1.1 (Draft)  
**Status:** Under Review  
**Repository:** `dbrown1976/dan-portfolio-react`  
**Last updated:** 2026-06-24

---

## 1. Purpose

This document defines the architecture and behaviour for the React implementation of Daniel Brown's portfolio.

The portfolio already exists as a Figma design file and component system. The implementation should faithfully reproduce the designed experience while producing a maintainable, accessible and extensible React codebase.

This specification is intended to be read by both human engineers and Codex before implementation begins.

---

## 2. Sources of Truth

| Area | Source |
|---|---|
| Behaviour and architecture | This specification |
| Portfolio visual design | Figma portfolio design file |
| Component appearance and variants | Figma component library |
| Design tokens | Figma component library |
| Implementation details | To be proposed by Codex and approved before build |

### Figma portfolio design file

https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=116-40759

### Figma component library

https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=32-27192

---

## 3. Guiding Principles

1. Figma is the visual source of truth.
2. This document is the behavioural source of truth.
3. The implementation must not redesign the portfolio.
4. Templates are composed of Sections.
5. Sections are composed of Layouts.
6. Layouts are composed of Components.
7. Components consume design tokens.
8. Content and navigation should be data-driven wherever practical.
9. New projects should be added by extending project data, not by creating new templates.
10. Accessibility is a first-class requirement.
11. If the implementation requires an assumption, Codex should flag it before proceeding.

---

## 4. Architectural Model

The portfolio follows this composition hierarchy:

```text
Application
  Route
    Template
      Section
        Layout
          Component
            Token
```

### Definitions

| Term | Meaning |
|---|---|
| Application | The complete React portfolio site |
| Route | A URL-addressable state |
| Template | A reusable page structure |
| Section | A semantic grouping that explains why content exists |
| Layout | A structural arrangement that explains how content is arranged |
| Component | A reusable UI element from the Figma component library |
| Token | A design value consumed from Figma, such as colour, type, spacing or radius |

---

## 5. Information Architecture

```text
Home

Work
  Next Generation Authoring
    Overview
    Understanding the problem
      Understanding
      Discovery
      Direction
    Building the system
      Building the system
      Patterns
      Beta
    Improvements & rollout
      Improvements
      Rollout
      Reflections

  Design System
    Project Summary
    Discovery
    Design Language & System
    Execution

  Cloud Event Management
    Project Summary
    Research
    Creative Process
    Execution

  Alert Notification
    Project Summary
    Research
    Creative Process
    Execution

  Maps
    Project Summary
    Research
    Creative Process
    Execution

About

CV

Contact
```

---

## 6. Routing Model

Routes should be generated from the information architecture wherever practical.

### Static routes

| Public label | Route | Template |
|---|---|---|
| Home | `/` | Home |
| Work | `/work` | Work |
| About | `/about` | About |
| CV | `/cv` | CV |
| Contact | `/contact` | Contact |

### Project route patterns

| Pattern | Purpose |
|---|---|
| `/work/{projectSlug}` | Project default route |
| `/work/{projectSlug}/{segmentSlug}` | Project segment route |
| `/work/{projectSlug}/{segmentSlug}/{subsectionSlug}` | Project subsection route, where tertiary nav exists |

### Default route behaviour

The project default route should render, or redirect to, the default segment for that project.

| Project | Default project route | Default segment route |
|---|---|---|
| Next Generation Authoring | `/work/next-generation-authoring` | `/work/next-generation-authoring/overview` |
| Design System | `/work/design-system` | `/work/design-system/project-summary` |
| Cloud Event Management | `/work/cloud-event-management` | `/work/cloud-event-management/project-summary` |
| Alert Notification | `/work/alert-notification` | `/work/alert-notification/project-summary` |
| Maps | `/work/maps` | `/work/maps/project-summary` |

Implementation decision to confirm: whether default project routes should redirect to the default segment route or render it directly. Deep linking must work either way.

---

## 7. Canonical Route and Content Map

This table converts the public information architecture into route-addressable states.

### Next Generation Authoring

| Project | Project slug | Segment | Segment slug | Subsection | Subsection slug | Template | Tertiary nav |
|---|---|---|---|---|---|---|---|
| Next Generation Authoring | `next-generation-authoring` | Overview | `overview` | — | — | Project Home | No |
| Next Generation Authoring | `next-generation-authoring` | Understanding the problem | `understanding-the-problem` | Understanding | `understanding` | Project Work | Yes |
| Next Generation Authoring | `next-generation-authoring` | Understanding the problem | `understanding-the-problem` | Discovery | `discovery` | Project Work | Yes |
| Next Generation Authoring | `next-generation-authoring` | Understanding the problem | `understanding-the-problem` | Direction | `direction` | Project Work | Yes |
| Next Generation Authoring | `next-generation-authoring` | Building the system | `building-the-system` | Building the system | `building-the-system` | Project Work | Yes |
| Next Generation Authoring | `next-generation-authoring` | Building the system | `building-the-system` | Patterns | `patterns` | Project Work | Yes |
| Next Generation Authoring | `next-generation-authoring` | Building the system | `building-the-system` | Beta | `beta` | Project Work | Yes |
| Next Generation Authoring | `next-generation-authoring` | Improvements & rollout | `improvements-rollout` | Improvements | `improvements` | Project Work | Yes |
| Next Generation Authoring | `next-generation-authoring` | Improvements & rollout | `improvements-rollout` | Rollout | `rollout` | Project Work | Yes |
| Next Generation Authoring | `next-generation-authoring` | Improvements & rollout | `improvements-rollout` | Reflections | `reflections` | Project Work | Yes |

### Design System

| Project | Project slug | Segment | Segment slug | Subsection | Subsection slug | Template | Tertiary nav |
|---|---|---|---|---|---|---|---|
| Design System | `design-system` | Project Summary | `project-summary` | — | — | Project Home | No |
| Design System | `design-system` | Discovery | `discovery` | — | — | Project Work | No |
| Design System | `design-system` | Design Language & System | `design-language-system` | — | — | Project Work | No |
| Design System | `design-system` | Execution | `execution` | — | — | Project Work | No |

### Cloud Event Management

| Project | Project slug | Segment | Segment slug | Subsection | Subsection slug | Template | Tertiary nav |
|---|---|---|---|---|---|---|---|
| Cloud Event Management | `cloud-event-management` | Project Summary | `project-summary` | — | — | Project Home | No |
| Cloud Event Management | `cloud-event-management` | Research | `research` | — | — | Project Work | No |
| Cloud Event Management | `cloud-event-management` | Creative Process | `creative-process` | — | — | Project Work | No |
| Cloud Event Management | `cloud-event-management` | Execution | `execution` | — | — | Project Work | No |

### Alert Notification

| Project | Project slug | Segment | Segment slug | Subsection | Subsection slug | Template | Tertiary nav |
|---|---|---|---|---|---|---|---|
| Alert Notification | `alert-notification` | Project Summary | `project-summary` | — | — | Project Home | No |
| Alert Notification | `alert-notification` | Research | `research` | — | — | Project Work | No |
| Alert Notification | `alert-notification` | Creative Process | `creative-process` | — | — | Project Work | No |
| Alert Notification | `alert-notification` | Execution | `execution` | — | — | Project Work | No |

### Maps

| Project | Project slug | Segment | Segment slug | Subsection | Subsection slug | Template | Tertiary nav |
|---|---|---|---|---|---|---|---|
| Maps | `maps` | Project Summary | `project-summary` | — | — | Project Home | No |
| Maps | `maps` | Research | `research` | — | — | Project Work | No |
| Maps | `maps` | Creative Process | `creative-process` | — | — | Project Work | No |
| Maps | `maps` | Execution | `execution` | — | — | Project Work | No |

---

## 8. Figma Naming and Public IA Labels

Codex identified a risk that Figma frame names and public-facing IA labels may not match exactly.

### Rule

Public labels, slugs and routes must be derived from this specification, not directly from Figma layer names.

Figma layer names are used to locate design structure and components. This specification defines the public information architecture.

### Example

| Public label | Route slug | Possible Figma wording |
|---|---|---|
| Improvements & rollout | `improvements-rollout` | Improvements & rollout |
| Design Language & System | `design-language-system` | Design language & system |
| Project Summary | `project-summary` | Project Summary / Project summary |

### Implementation rule

If Figma naming and this specification differ, Codex should use this specification for route labels and ask for clarification before renaming design-derived content.

---

## 9. Navigation Behaviour

### Level 1: Global Header Tabs

Controlled by the persistent global header.

| Behaviour | Rule |
|---|---|
| Selection model | Single selection |
| Selected state | Derived from current route |
| Interaction | Selecting a tab navigates to the top-level route |
| Browser history | Updates browser history |
| Deep linking | Direct links set the correct active tab |

### Level 2: Project Navigation Cards

Used on the Work page.

| Behaviour | Rule |
|---|---|
| Selection model | One card represents one project |
| Interaction | Selecting a card navigates to the project default route |
| Data | Card content is driven by project data |
| Destination | Project Home route or default segment route |

### Level 3: Segmented Control

Used within project templates.

| Behaviour | Rule |
|---|---|
| Selection model | Single selection |
| Selected state | Derived from current route |
| Interaction | Selecting a segment changes all content beneath the control |
| Browser history | Updates browser history |
| Deep linking | Direct route opens the matching segment |
| Tertiary nav | If the selected segment has subsections, tertiary nav is shown |

### Level 4: Tertiary Navigation

Used only where the selected segment has subsections.

| Behaviour | Rule |
|---|---|
| Selection model | Single selection |
| Selected state | Derived from current route |
| Interaction | Selecting a chip changes content beneath tertiary nav |
| Segment state | Parent segment remains selected |
| Browser history | Updates browser history |
| Deep linking | Direct route opens the matching segment and subsection |

---

## 10. Template Catalogue

### Home Template

| Field | Definition |
|---|---|
| Purpose | Landing page for the portfolio |
| Required sections | Header, Home/Header Section |
| Navigation | Global header only |
| Notes | Home is visually distinct from other top-level pages |

### Work Template

| Field | Definition |
|---|---|
| Purpose | Lists and links to project pages |
| Required sections | Header, Work Section |
| Main layout | Responsive card grid |
| Components | Project Navigation Card |
| Navigation | Global header plus project cards |

### About Template

| Field | Definition |
|---|---|
| Purpose | Hosts an introduction and pull-out quotes/testimonials |
| Required sections | Header, About Section, Quotes Section |
| Main layouts | Image/body split block, responsive quotes grid |
| Components | Image, body text, Kudos |

### CV Template

| Field | Definition |
|---|---|
| Purpose | Presents the CV online and provides download/contact details |
| Required sections | Header, CV Section |
| Components | Download link, CV Contact Details, CV Viewer |
| Recommended rendering | Downloadable PDF plus inline exported page images for stable rendering |
| Notes | CV contact details use a different component from the Contact page |

### Contact Template

| Field | Definition |
|---|---|
| Purpose | Provides ways to contact Daniel Brown |
| Required sections | Header, Contact Section |
| Components | Contact Details rows |
| Link behaviour | Mobile uses `tel:`, email uses `mailto:`, LinkedIn opens external URL |

### Project Home Template

| Field | Definition |
|---|---|
| Purpose | Introduces a project and provides entry into its sections |
| Variants | `presentation = flagship | standard` |
| Required sections | Header, Title Section, Content Section |
| Components | Nav Control, project title, Segmented Control, body, Hero |
| Behaviour | Segment selection changes content beneath the segmented control |
| Flagship presentation | Project title rendered as H3 |
| Standard presentation | Project title rendered as H5 |
| Rule | Structure remains the same; only presentation changes |

### Project Work Template

| Field | Definition |
|---|---|
| Purpose | Displays a specific section/subsection within a project |
| Required sections | Header, Title Section, Content Section |
| Optional sections | Tertiary Navigation, hero image, supporting/evidence sections |
| Components | Nav Control, H5, Segmented Control, Nav Chips, Image Container |
| Behaviour | Route determines selected segment and optional subsection |

---

## 11. Section Catalogue

Sections express why content exists.

| Section | Purpose | Used by |
|---|---|---|
| Header | Persistent global navigation | All templates |
| Home/Header Section | Landing page introduction | Home |
| Work Section | Lists projects | Work |
| About Section | Introduces Daniel Brown | About |
| Quotes Section | Displays testimonials | About |
| CV Section | Displays downloadable and readable CV | CV |
| Contact Section | Displays contact methods | Contact |
| Title Section | Holds project back navigation, title and segmented control | Project Home, Project Work |
| Content Section | Holds route-specific project content | Project Home, Project Work |
| Evidence Scrapbook Section | Displays evidence or supporting artefacts | Project Work where present |

---

## 12. Layout Catalogue

Layouts express how content is arranged.

| Layout | Purpose | Notes |
|---|---|---|
| Grid | Responsive multi-item arrangement | Used for cards and quotes |
| Two Column Grid | Side-by-side content on larger screens | Stacks on mobile |
| Split Block Vertical | Vertical split between text and media/hero | Hero image may be absent |
| Image Container | Displays one or more images | Styling comes from Figma and parent layout |
| Text Wrapper | Groups body copy | Used inside project content sections |
| Row Layout | Repeated horizontal or vertical rows | Used for contact details |
| Card Grid | Grid specifically composed of card components | Used on Work page |

---

## 13. Component Registry

Visual implementation, variants, spacing, typography and state styling come from Figma.

This registry defines purpose and behaviour.

| Component | Figma reference | Purpose | Behaviour |
|---|---|---|---|
| Header | Component library / Header | Persistent site navigation | Displays name/title left and primary navigation right. Active state reflects current route. Collapses to mobile menu where specified. |
| Header Button | Component library / Header Button | Mobile menu trigger | Toggles mobile navigation. Must expose visible focus state and accessible label. |
| Mobile Navigation Menu | Header composition | Displays primary nav on mobile | Opens/closes from Header Button. Selecting item navigates and closes menu. |
| Tab | Component library / Tab | Level 1 navigation item | Navigates to top-level route. Selected state derived from route. |
| Tab Group | Component library / Tab Group | Groups Level 1 tabs | Composes Tab components. Single selected item. Route-controlled. |
| Segmented Control | Component library / Segmented Control | Level 3 project navigation | Single selection. Route-controlled. Updates content beneath. Collapses to dropdown selector on constrained widths. |
| Segmented Control Selector | Responsive variant/composition | Compact segment selector | Displays current segment label + chevron. Opens menu of segments. |
| Nav Chip | Component library / Nav Chip | Level 4 tertiary navigation item | Single selection within chip group. Route-controlled. Updates content beneath. |
| Tertiary Navigation Selector | Responsive variant/composition | Compact tertiary selector | Displays current chip label + chevron. Opens menu of subsections. |
| Nav Control | Component library / Nav Control | Parent/back navigation | Navigates back to Work page or parent destination. Label and icon configurable. |
| Hero Card | Component library / Hero Card | Prominent project/content card | Can be clickable where used as navigation. Displays image, eyebrow, title and body. |
| Project Navigation Card | Component library / Project/Nav Card | Represents a project on Work page | Entire card is clickable. Navigates to project default route. Data-driven from project model. |
| Kudos | Component library / Kudos | Displays professional testimonial | Display only. Contains quote, owner name and owner role/function. |
| Contact Details – CV | Component library / CV Contact Details | Compact CV contact metadata | Supports `isLink` and URL per item. |
| Contact Details – Contact Page | Component library / Contact Details | Full contact methods | Renders mobile, email and LinkedIn rows with correct link behaviour. |
| CV Viewer | To be implemented from CV Section | Displays readable CV inline | Recommended: image sequence for stable rendering; PDF remains downloadable. |
| Image Container | Component library / Image Container | Displays project imagery | Responsive scaling. No separate hero variant; hero styling belongs to asset or parent layout. |

---

## 14. Responsive Behaviour

### Breakpoints

Recommended semantic breakpoints:

| Breakpoint | Width |
|---|---|
| Mobile | 320–639px |
| Tablet | 640–1023px |
| Desktop | 1024–1279px |
| Wide desktop | 1280px+ |

These values should be verified against Figma before implementation.

### Header

| Viewport | Behaviour |
|---|---|
| Mobile | Name/title left, Header Button right. Header Button opens mobile navigation menu. |
| Tablet and above | Name/title left, horizontal Tab Group right. |

### Segmented Control

| Context | Behaviour |
|---|---|
| Enough horizontal space | Render full segmented control |
| Constrained width | Collapse to selected segment selector with down chevron |
| Selector open | Display all segment options in menu/list |
| Selection | Updates route and closes menu |
| Direct link | Opens with correct selected segment |

### Tertiary Navigation

| Context | Behaviour |
|---|---|
| Enough horizontal space | Render nav chips |
| Constrained width | Collapse to selected subsection selector with down chevron |
| Selector open | Display all subsection options in menu/list |
| Selection | Updates route and closes menu |
| Direct link | Opens with correct selected segment and subsection |

### Layouts

| Layout | Mobile behaviour | Tablet/desktop behaviour |
|---|---|---|
| Grid | Single column | Multi-column where space allows |
| Two Column Grid | Stack vertically | Side-by-side |
| Split Block Vertical | Stack content and media | Follow Figma layout |
| Quotes Grid | Single column | Two or more columns |
| Work Card Grid | Single column | Two or more columns |

### CV

| Viewport | Behaviour |
|---|---|
| Mobile | CV pages stack as readable exported images |
| Tablet/Desktop | CV pages may remain stacked or use larger contained presentation |
| All | Downloadable PDF available |

---

## 15. Design Token Strategy

The Figma component library is the authoritative source for design tokens.

Token categories:

- Colours
- Typography
- Spacing
- Border radius
- Borders
- Elevation
- Shadows
- Motion
- Icons
- Breakpoints

### Implementation rules

1. Do not invent token values where Figma defines them.
2. Do not hard-code styling values inside components unless approved.
3. Map Figma tokens to implementation tokens, ideally CSS variables.
4. If a required token is missing, Codex should flag the gap.
5. Code-side token additions must be named clearly and approved before use.

---

## 16. Asset Strategy

Asset export should not begin until the implementation stack and folder structure are approved.

### Asset categories

| Category | Examples | Notes |
|---|---|---|
| Project images | Hero images, screenshots, diagrams | Export from Figma once manifest is approved |
| SVGs | Icons, diagrams, illustrative assets | Prefer SVG for vector artwork |
| Raster images | Screenshots, photographic/project imagery | Prefer WebP or optimized PNG/JPG depending on content |
| CV PDF | Downloadable CV | Required |
| CV page images | Exported CV pages | Recommended for inline display |
| Favicons/social images | Site icon, OG image | To be defined later |

### Recommended folder structure

```text
public/
  assets/
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

### Naming convention

Use lowercase, hyphenated filenames.

Examples:

```text
nga-overview-hero.webp
nga-discovery-research-screenshot.webp
design-system-token-map.svg
daniel-brown-cv.pdf
daniel-brown-cv-page-01.webp
```

### Alt text

Every meaningful image must have alt text in the content model or asset manifest.

Decorative images should use empty alt text.

---

## 17. Accessibility Acceptance Criteria

### Global

- Site must be keyboard navigable.
- Visible focus states must be present for all interactive elements.
- Colour contrast should meet WCAG AA.
- Headings must follow a logical hierarchy.
- Links and buttons must use semantic HTML.
- External links should be identifiable where appropriate.

### Header and mobile navigation

- Header Button must have an accessible label.
- Mobile menu must be operable by keyboard.
- Escape should close the mobile menu.
- Focus should not be lost when the menu opens or closes.
- Selected nav item should be programmatically identifiable.

### Segmented Control

- Must be keyboard accessible.
- Selected segment must be programmatically identifiable.
- If implemented as tabs, use appropriate ARIA tab semantics.
- If implemented as a segmented button group, ensure button roles and selected states are clear.
- Responsive selector variant must be operable by keyboard.

### Tertiary Navigation

- Must be keyboard accessible.
- Selected chip/subsection must be programmatically identifiable.
- Responsive selector variant must be keyboard operable and screen-reader understandable.

### Images

- Meaningful project images require descriptive alt text.
- Decorative images should use empty alt text.
- Images of text should be avoided where possible, except for CV page image rendering where a downloadable PDF is also available.

### CV

- Downloadable PDF must be available.
- Inline image rendering must not be the only accessible version of the CV.
- Contact links must be semantic and usable by assistive technologies.

---

## 18. QA and Test Expectations

Testing approach should be proposed by Codex as part of technical architecture.

Minimum acceptance areas:

### Routing

- Static routes load correctly.
- Project default routes load correctly.
- Segment routes load correct content.
- Subsection routes load correct content.
- Browser back/forward preserves navigation state.
- Direct links open correct selected nav state.

### Accessibility

- Automated accessibility scan passes for main templates.
- Keyboard-only navigation works for header, mobile menu, segmented control and tertiary nav.
- Focus states are visible.
- No obvious heading order issues.

### Responsive

- Mobile, tablet, desktop and wide desktop layouts should be checked.
- Segmented control and tertiary navigation collapse correctly on constrained widths.
- Grids and split layouts reflow as specified.

### Visual fidelity

- Implementation should be compared against Figma at agreed breakpoints.
- Components should match Figma variants and states.
- Spacing, typography, radius and colour should come from tokens.

### Performance

- Images should be optimized.
- Initial page load should avoid unnecessary heavy assets.
- Routes should not require loading all project imagery up front where avoidable.

---

## 19. Technical Architecture

**Status:** Pending Codex recommendation and approval.

Codex should recommend and justify:

- Framework
- Build tooling
- Routing
- Styling strategy
- Component architecture
- State management
- Folder structure
- Asset management
- Deployment platform
- Testing approach
- Visual regression approach

Current working assumption, pending review:

- React
- TypeScript
- Vite or similar static build tooling
- React Router or equivalent route handling
- CSS Modules or token-driven CSS strategy
- Vercel or similar hosting later, after implementation begins

No implementation should begin until the technical architecture is agreed.

---

## 20. Implementation Readiness

Current readiness: **In planning**

Codex previously assessed implementation readiness at **5/10** and recommended one more architecture iteration before development. Version 1.1 addresses the main specification gaps identified in that review.

### Remaining pre-build tasks

- Approve technical stack.
- Approve final route/content map.
- Confirm Figma naming against public IA labels.
- Approve component registry.
- Approve responsive breakpoint behaviour.
- Approve token implementation strategy.
- Produce and approve an asset manifest.
- Confirm final CV rendering approach.
- Confirm contact URLs.
- Confirm QA/test tooling.

---

## 21. Open Questions

| Topic | Question | Owner |
|---|---|---|
| Technical stack | What framework/build/routing/styling approach should be used? | Codex to recommend; Dan to approve |
| Default project routes | Should `/work/{project}` redirect to default segment or render it directly? | Codex to recommend; Dan to approve |
| CV rendering | Use exported page images inline plus PDF download, or inline PDF viewer? | Dan to approve |
| Asset manifest | Which exact assets should be exported from Figma? | Codex to propose; Dan to approve |
| Alt text | What alt text should be assigned to project imagery? | Dan |
| Motion | Should Figma motion be implemented now or deferred? | Dan/Codex |
| Visual regression | What tool should be used to compare implementation with Figma? | Codex to recommend |
| Hosting | Vercel, Netlify, GitHub Pages or other? | Codex to recommend; Dan to approve |

---

## 22. Architecture Decision Log

| Date | Decision | Rationale |
|---|---|---|
| 2026-06-24 | Use Figma as visual source of truth and this document as behavioural source of truth | Avoid duplicating visual specs and keep responsibilities clear |
| 2026-06-24 | Model pages as Template → Section → Layout → Component | Mirrors Figma hierarchy and creates a React-friendly architecture |
| 2026-06-24 | Treat Project Home as one template with `flagship` and `standard` presentations | Structure is the same; presentation changes only |
| 2026-06-24 | Treat Project Work as one template with optional tertiary navigation | Avoid duplicating templates for minor structural variation |
| 2026-06-24 | Collapse segmented control and tertiary nav to selected-item dropdown on constrained widths | Avoid cramped wrapping and horizontal-scroll ambiguity |
| 2026-06-24 | Do not create a hero variant for Image Container | Hero styling belongs to the image asset or parent layout, not the image component |
| 2026-06-24 | Defer asset export until an asset manifest exists | Prevent incorrect asset naming, sizing and folder structure |
| 2026-06-24 | Use public IA labels and this spec for route slugs, not raw Figma frame names | Avoid leaking internal naming inconsistencies into URLs |

---

## 23. Success Criteria

### Functional

- All routes load correctly.
- Deep linking works.
- Browser history works.
- Header, segmented control and tertiary nav all reflect the current route.
- Mobile navigation opens, closes and navigates correctly.
- CV download works.
- Contact links work.

### Visual

- Implementation matches Figma at agreed breakpoints.
- Components match Figma variants and states.
- Responsive layouts follow this specification.
- Tokens are consumed from the design system.

### Technical

- Code is maintainable and understandable.
- Components are reusable.
- Templates are not duplicated unnecessarily.
- TypeScript is used strictly.
- Navigation/content data is not hard-coded into multiple places.

### Accessibility

- Keyboard navigation works.
- Focus states are visible.
- Interactive controls are screen-reader understandable.
- Colour contrast meets WCAG AA where applicable.
- Meaningful images include alt text.

### Extensibility

- New projects can be added by extending project data.
- New project segments can be added without creating new templates.
- Component changes can be made in one place.
