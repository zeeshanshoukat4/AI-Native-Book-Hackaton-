# Tasks: Docusaurus Book Website

**Input**: Design documents from `/specs/002-docusaurus-book-site/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md

**Tests**: E2E tests with Playwright are included as per the research decision.

---

## Phase 1: Project Setup

**Purpose**: Initialize the Docusaurus project and configure essential tools.

- [X] T001 Initialize a new Docusaurus site using `npx create-docusaurus@latest my-website classic --typescript`.
- [X] T002 Move the contents of the `my-website` directory to the repository root.
- [X] T003 [P] Install and configure Playwright for end-to-end testing as per Docusaurus documentation.
- [X] T004 [P] Configure ESLint and Prettier for code consistency.

---

## Phase 2: Foundational Configuration & Theming (US1, US3)

**Purpose**: Configure the core Docusaurus site and establish the custom theme.

- [X] T005 [US1] Update `docusaurus.config.js` with the book's title, tagline, and custom footer.
- [X] T006 [US1] Create a custom landing page component at `src/pages/index.js` with a hero section and call-to-action.
- [X] T007 [US3] Customize the color scheme for both light and dark modes in `src/css/custom.css` to match the desired "glassmorphism and gradient" aesthetic.
- [X] T008 [US3] Enable and verify the functionality of the dark/light mode theme toggle.
- [X] T009 [US1] Write an E2E test with Playwright for the landing page in `e2e/landing-page.spec.ts`.

---

## Phase 3: Content Structure & Navigation (US2)

**Purpose**: Create the book's structure and placeholder content.

- [X] T010 [P] Create the directory structure for all 5 chapters under the `docs/` directory (e.g., `docs/chapter-1`, `docs/chapter-2`, etc.).
- [X] T011 [P] Create 10 placeholder MDX files (2 for each chapter) within the directories created in T010.
- [X] T012 Configure `sidebars.js` to define the hierarchical navigation for all 5 chapters and 10 topics.
- [X] T013 Verify that the sidebar navigation is generated correctly and that all links work in the development server.
- [X] T014 [US2] Write an E2E test with Playwright to verify sidebar navigation in `e2e/navigation.spec.ts`.

---

## Phase 4: Polish & Deployment

**Purpose**: Finalize the website and deploy it.

- [X] T015 Populate the MDX files with the final book content.
- [X] T016 [P] Add any necessary images or static assets to the `static/img` directory.
- [X] T017 Perform a final review of the site's responsiveness and design across different screen sizes.
- [ ] T018 Run a Lighthouse audit to check for Performance, Accessibility, and SEO scores. (Pending user action)
- [X] T019 Configure the project for deployment on Vercel.
- [X] T026 Improve the color scheme and overall look and feel of the website.

---
## Phase N+1: Constitutional Compliance Audit

**Purpose**: Final check to ensure all work complies with the project constitution.

- [ ] T020 **Audit-Performance**: Verify FCP is < 1.5s. (Pending user action)
- [ ] T021 **Audit-Accessibility**: Perform a full accessibility audit using browser tools and screen readers. (Pending user action)
- [ ] T022 **Audit-Design**: Confirm the theme aligns with the mobile-first, glassmorphism, and gradient design goals. (Pending user action)
- [ ] T023 **Audit-Code**: Ensure custom components are well-structured and TypeScript is used where appropriate. (Pending user action)
- [ ] T024 **Audit-Content**: Check that all 10 topics are present and correctly structured in the `docs` directory and `sidebars.js`. (Pending user action)
- [ ] T025 **Audit-Deployment**: Confirm the site is successfully deployed to a public Vercel URL. (Pending user action)
