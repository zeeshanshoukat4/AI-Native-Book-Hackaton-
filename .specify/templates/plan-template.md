# Implementation Plan: [FEATURE]

**Branch**: `[###-feature-name]` | **Date**: [DATE] | **Spec**: [link]
**Input**: Feature specification from `/specs/[###-feature-name]/spec.md`

**Note**: This template is filled in by the `/sp.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

[Extract from feature spec: primary requirement + technical approach from research]

## Technical Context

<!--
  This section is pre-filled based on the project constitution.
  Verify these details and fill in any remaining clarifications.
-->

**Language/Version**: TypeScript (strict mode)
**Primary Dependencies**: Next.js 15, Tailwind CSS, shadcn/ui, MDX
**Storage**: N/A (Content sourced from MDX files)
**Testing**: [NEEDS CLARIFICATION: e.g., Jest, Playwright]
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
specs/[###-feature]/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (repository root)
<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.
-->

```text
# [REMOVE IF UNUSED] Option 1: Single project (DEFAULT)
src/
├── models/
├── services/
├── cli/
└── lib/

tests/
├── contract/
├── integration/
└── unit/

# [REMOVE IF UNUSED] Option 2: Web application (when "frontend" + "backend" detected)
backend/
├── src/
│   ├── models/
│   ├── services/
│   └── api/
└── tests/

frontend/
├── src/
│   ├── components/
│   ├── pages/
│   └── services/
└── tests/

# [REMOVE IF UNUSED] Option 3: Mobile + API (when "iOS/Android" detected)
api/
└── [same as backend above]

ios/ or android/
└── [platform-specific structure: feature modules, UI flows, platform tests]
```

**Structure Decision**: [Document the selected structure and reference the real
directories captured above]

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
