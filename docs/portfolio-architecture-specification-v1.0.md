# Portfolio Architecture Specification

**Version:** 1.0 (Draft)\
**Status:** Under Review

## 1. Purpose

Implement an existing Figma portfolio as a React application.

The Figma portfolio and design system are the visual source of truth.
This specification is the behavioural and architectural source of truth.

## 2. Sources of Truth

### Portfolio Design

https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=116-40759

### Component Library

https://www.figma.com/design/MIdNjSwhuubN6Kcvx6xOqb/Dan-Portfolio?node-id=32-27192

## 3. Guiding Principles

-   Figma defines visuals.
-   This document defines behaviour.
-   Templates compose Sections.
-   Sections compose Layouts.
-   Layouts compose Components.
-   Components consume design tokens.
-   Content should be data-driven where practical.
-   New projects should be added without changing templates.
-   Accessibility is a first-class concern.

## 4. Information Architecture

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

## 5. Navigation Model

### Level 1

Global header tabs: - Home - Work - About - CV - Contact

### Level 2

Project selection via Project Navigation Cards.

### Level 3

Segmented Control. - Single selection. - Selection changes all content
beneath. - Reflects current route.

### Level 4

Tertiary Navigation. - Optional. - Only displayed where required. -
Selection changes content beneath only. - Reflects current route.

## 6. Routing

Static routes:

-   /
-   /work
-   /about
-   /cv
-   /contact

Project routes:

-   /work/{project}
-   /work/{project}/{segment}
-   /work/{project}/{segment}/{subsection}

## 7. Templates

-   Home
-   Work
-   About
-   CV
-   Contact
-   Project Home
-   Project Work

### Project Home

Variants: - Flagship - Standard

Presentation changes only. Structure remains identical.

### Project Work

Optional: - Tertiary navigation - Hero image - Supporting content
sections

## 8. Composition Hierarchy

    Template
      Section
        Layout
          Component

### Sections

Examples: - Header Section - Title Section - Work Section - About
Section - Contact Section - Quotes Section - CV Section - Content
Section

### Layouts

Examples: - Grid - Two Column Grid - Split Block (Vertical) - Image
Container - Text Wrapper - Row

## 9. Component Registry

Document: - Name - Figma path - Purpose - Behaviour

Includes: - Header - Header Button - Tab - Tab Group - Segmented
Control - Nav Chip - Nav Control - Hero Card - Project Navigation Card -
Kudos - Contact Details

## 10. Responsive Behaviour

Desktop - Horizontal navigation - Horizontal segmented controls -
Multi-column layouts

Mobile - Hamburger navigation - Segmented control collapses to selected
item + dropdown - Tertiary navigation collapses to selected item +
dropdown - Single-column layouts - Split layouts stack vertically

## 11. Design Tokens

Source: Figma Component Library.

Consume tokens for: - Colours - Typography - Spacing - Borders - Border
radius - Elevation - Motion - Icons - Breakpoints

Never hard-code design values.

## 12. Assets

Assets originate from Figma.

Includes: - Images - SVGs - PDFs

## 13. Technical Architecture

Status: Pending review.

Codex should recommend: - Framework - Routing - Styling strategy -
Folder structure - Hosting - Content model

## 14. Success Criteria

### Functional

-   Navigation behaves as specified.
-   Deep linking works.
-   Browser history behaves correctly.

### Visual

-   Matches Figma.
-   Responsive behaviour matches specification.
-   Uses design system.

### Technical

-   Reusable components.
-   Strict TypeScript.
-   WCAG AA accessibility.

### Extensibility

New projects should be added without changing templates.

## 15. Open Questions

-   Technical stack
-   Hosting
-   Content model
-   Asset strategy
-   Motion

## 16. Architecture Decision Log

Record significant architectural decisions and rationale here as the
project evolves.
