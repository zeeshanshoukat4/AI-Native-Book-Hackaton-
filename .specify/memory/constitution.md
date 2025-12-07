<!--
Sync Impact Report:
- Version change: 0.0.0 → 1.0.0
- Modified principles: All principles are new.
- Added sections: Core Principles, Standards, Constraints, Governance
- Removed sections: None
- Templates requiring updates: ⚠ pending .specify/templates/plan-template.md, ⚠ pending .specify/templates/spec-template.md, ⚠ pending .specify/templates/tasks-template.md
- Follow-up TODOs: None
-->
# AI-Native Driven Development Physical AI and Humaoid Robotics – Premium Book Website (Next.js 15 + Tailwind + MDX) Constitution

## Core Principles

### I. Minimalist UI Library Stack
Zero external UI libraries except shadcn/ui & Tailwind. This ensures a lightweight, consistent, and highly customizable frontend architecture.

### II. Mobile-First & Modern Aesthetics
All design MUST follow a mobile-first approach, featuring a glassmorphism and gradient-based visual design. This guarantees a responsive and contemporary user experience across all devices.

### III. Content as Data via MDX
All book content MUST be managed in MDX files. This approach decouples content from presentation, simplifying updates, and enabling programmatic content manipulation.

### IV. Dual-Mode Theme
A dark/light mode toggle is a mandatory feature. The theme implementation must be robust and provide a seamless user-selectable viewing experience.

### V. High-Performance Standard
The application MUST achieve a First Contentful Paint (FCP) of less than 1.5 seconds. Performance is a critical, non-negotiable feature.

### VI. Universal Accessibility
The application MUST be 100% accessible. This includes full compliance with ARIA standards and complete keyboard navigability to ensure usability for all individuals.

## Standards

### TypeScript Strict Mode
All code must be written in TypeScript's strict mode to enforce type safety and improve code quality.

### Component Reusability
All UI components are to be designed for reusability, with clear props and separation of concerns.

### Content Organization
Book chapter content MUST be located in the `/content/chapters/` directory.

### Bundle Size Budget
The total production bundle size, excluding images, MUST NOT exceed 150KB.

## Constraints

### Page Architecture
The website will consist of exactly four pages: Home, Book, About, and Contact.

### Content Structure
The book content is fixed to 5 chapters, with each chapter containing 2 topics.

### Deployment Platform
The project MUST be deployed on the Vercel platform, utilizing its free tier.

## Governance

Compliance with this constitution is mandatory for all development. All code reviews must validate adherence to these principles and standards. Any proposed deviation requires a formal amendment to this document.

**Version**: 1.0.0 | **Ratified**: 2025-12-07 | **Last Amended**: 2025-12-07