# Tasks: AI-Native Book Website

**Input**: Design documents from `/specs/001-ai-native-website/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md

**Tests**: Test tasks are included as this is a new project and requires a testing setup.

## Phase 1: Project Setup

**Purpose**: Initialize the project with the correct stack and configuration.

- [ ] T001 Initialize a new Next.js 15 project with App Router and TypeScript using `npx create-next-app@latest`.
- [ ] T002 [P] Integrate Tailwind CSS into the project following the official Next.js guide.
- [ ] T003 [P] Set up `shadcn/ui` in the project.
- [ ] T004 [P] Install and configure Jest and React Testing Library for component testing.
- [ ] T005 [P] Install and configure Playwright for end-to-end testing.
- [ ] T006 [P] Configure linting and formatting with ESLint and Prettier.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Create the core layout and providers that all pages will share.

- [ ] T007 Create the root layout in `src/app/layout.tsx`.
- [ ] T008 [P] Implement the main navigation component in `src/components/layout/Header.tsx`.
- [ ] T009 [P] Implement the footer component in `src/components/layout/Footer.tsx`.
- [ ] T010 Implement the theme provider for dark/light mode toggle in `src/components/core/ThemeProvider.tsx` and integrate it into the root layout.

---

## Phase 3: User Story 1 - Home Page (Priority: P1) 🎯 MVP

**Goal**: Create a visually impressive home page to attract and engage visitors.
**Independent Test**: The home page can be tested by running the dev server and navigating to the root URL.

- [ ] T011 [US1] Create the main Home page file at `src/app/page.tsx`.
- [ ] T012 [P] [US1] Develop the Hero section component in `src/components/core/HeroSection.tsx`.
- [ ] T013 [P] [US1] Develop the chapter preview card component in `src/components/core/ChapterCard.tsx`.
- [ ] T014 [US1] Assemble the Home page in `src/app/page.tsx` using the Hero and ChapterCard components.
- [ ] T015 [US1] Write a component test for `HeroSection.tsx` in `tests/component/HeroSection.test.tsx`.
- [ ] T016 [US1] Write an E2E test for the Home page journey in `tests/e2e/home.spec.ts`.

---

## Phase 4: User Story 2 - Book Page (Priority: P2)

**Goal**: Implement the core reading experience with navigation and progress tracking.
**Independent Test**: The book page can be tested by navigating to `/book` and verifying all interactive elements work with dummy MDX content.

- [ ] T017 [US2] Create the Book page file at `src/app/(book)/page.tsx`.
- [ ] T018 [P] [US2] Implement MDX content loading and parsing logic in `src/lib/mdx.ts`.
- [ ] T019 [P] [US2] Develop the Table of Contents component in `src/components/book/TableOfContents.tsx`.
- [ ] T020 [P] [US2] Develop the reading progress bar component in `src/components/book/ProgressBar.tsx`.
- [ ] T021 [US2] Create a custom hook `useReadingProgress` in `src/lib/hooks.ts` to track scroll progress.
- [ ] T022 [US2] Assemble the Book page in `src/app/(book)/page.tsx`, integrating the MDX content, TOC, and progress bar.
- [ ] T023 [US2] Write a component test for `ProgressBar.tsx` in `tests/component/ProgressBar.test.tsx`.
- [ ] T024 [US2] Write an E2E test for the Book page journey in `tests/e2e/book.spec.ts`.

---

## Phase 5: User Stories 3 & 4 - About & Contact Pages (Priority: P3)

**Goal**: Create the static About page and the interactive Contact page.
**Independent Test**: Each page can be tested independently by navigating to its respective URL (`/about`, `/contact`).

- [ ] T025 [P] [US3] Create the About page file at `src/app/about/page.tsx` with placeholder content.
- [ ] T026 [P] [US4] Create the Contact page file at `src/app/contact/page.tsx`.
- [ ] T027 [US4] Develop the waitlist form component in `src/components/core/WaitlistForm.tsx`.
- [ ] T028 [US4] Implement the `localStorage` logic for the waitlist form within the `WaitlistForm.tsx` component.
- [ ] T029 [US4] Write a component test for `WaitlistForm.tsx` in `tests/component/WaitlistForm.test.tsx`.

---

## Phase 6: Content Population

**Purpose**: Add the actual book content to the project.

- [ ] T030 [P] Create `1.mdx` in `src/content/chapters/` with sample chapter and topic content.
- [ ] T031 [P] Create `2.mdx` in `src/content/chapters/` with sample chapter and topic content.
- [ ] T032 [P] Create `3.mdx` in `src/content/chapters/` with sample chapter and topic content.
- [ ] T033 [P] Create `4.mdx` in `src/content/chapters/` with sample chapter and topic content.
- [ ] T034 [P] Create `5.mdx` in `src/content/chapters/` with sample chapter and topic content.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Finalize styling, conduct audits, and prepare for deployment.

- [ ] T035 Apply final design polish based on the glassmorphism and gradient aesthetic across all pages.
- [ ] T036 [P] Add responsive design adjustments for mobile and extra-wide screens.
- [ ] T037 Perform a full accessibility audit and address any issues found.
- [ ] T038 Optimize all images and assets for performance.
- [ ] T039 Validate the project against the `quickstart.md` guide.
- [ ] T040 Configure the project for deployment on Vercel.

---
## Phase N+1: Constitutional Compliance Audit

**Purpose**: Final check to ensure all work complies with the project constitution.

- [ ] T041 **Audit-Performance**: Verify FCP is < 1.5s and bundle size is < 150KB.
- [ ] T042 **Audit-Accessibility**: Perform a full accessibility audit (ARIA, keyboard navigation, screen reader).
- [ ] T043 **Audit-Design**: Confirm all UI elements align with the mobile-first, glassmorphism, and gradient design system.
- [ ] T044 **Audit-Code**: Ensure all code is TypeScript strict mode and all new components are reusable.
- [ ] T045 **Audit-Content**: Check that all book content is correctly implemented using MDX in the `/content/chapters/` directory.
- [ ] T046 **Audit-Deployment**: Confirm deployment configuration targets Vercel.
