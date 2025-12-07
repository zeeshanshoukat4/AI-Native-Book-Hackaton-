# Implementation Plan: AI-Native Book Website

**Branch**: `001-ai-native-website` | **Date**: 2025-12-07 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-ai-native-website/spec.md`

**Note**: This template is filled in by the `/sp.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

This plan outlines the architecture for a premium book website using Next.js 15 (App Router), Tailwind CSS, and MDX. Key decisions include using the App Router for modern Next.js features, MDX for content management, and `localStorage` for the waitlist form to maintain a backend-less MVP.

## Technical Context

<!--
  This section is pre-filled based on the project constitution.
  Verify these details and fill in any remaining clarifications.
-->

**Language/Version**: TypeScript (strict mode)
**Primary Dependencies**: Next.js 15, Tailwind CSS, shadcn/ui, MDX
**Storage**: localStorage
**Testing**: Jest with React Testing Library (Components) and Playwright (E2E)
**Target Platform**: Vercel
**Project Type**: Web Application
**Performance Goals**: <1.5s First Contentful Paint (FCP)
**Constraints**: <150KB total bundle size (excluding images)
**Scale/Scope**: 4 pages, 5 chapters (2 topics each)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [ ] **UI Libraries**: Is the plan limited to only `shadcn/ui` and `Tailwind CSS`?
- [ ] **Design**: Does the design adhere to mobile-first principles, with glassmorphism and gradient aesthetics?
- [ ] **Content**: Is all book content managed via MDX files in `/content/chapters/`?
- [ ] **Theme**: Does the plan include a dark/light mode toggle?
- [ ] **Performance**: Is there a clear strategy to achieve <1.5s FCP and a <150KB bundle size?
- [ ] **Accessibility**: Does the plan ensure 100% accessibility (ARIA, keyboard navigation)?
- [ ] **Tech Stack**: Does the plan use Next.js 15 and TypeScript strict mode?
- [ ] **Deployment**: Is the deployment target Vercel?

## Project Structure

### Documentation (this feature)

```text
specs/001-ai-native-website/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output (N/A for this project)
└── tasks.md             # Phase 2 output
```

### Source Code (repository root)

```text
src/
├── app/
│   ├── (book)/
│   │   └── page.tsx      # Main book reading page
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── core/             # General-purpose components (Button, Card, etc.)
│   ├── layout/           # Navigation, Footer, Header, etc.
│   └── book/             # Book-specific components (Table of Contents, Progress Bar)
├── lib/
│   ├── mdx.ts            # MDX loading and parsing logic
│   └── hooks.ts          # Custom React hooks
├── content/
│   └── chapters/         # MDX files for each chapter
│       ├── 1.mdx
│       ├── 2.mdx
│       ├── 3.mdx
│       ├── 4.mdx
│       └── 5.mdx
public/
│   └── assets/           # Images, fonts, etc.
tests/
├── component/
├── integration/
└── e2e/
```

**Structure Decision**: A standard Next.js 15 App Router structure will be used. The `src` directory contains all source code. The `app` directory handles routing and page structure. Reusable components are organized under `components`, and book content is stored as MDX files in the `content` directory. This structure provides a clean separation of concerns and aligns with Next.js best practices.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
