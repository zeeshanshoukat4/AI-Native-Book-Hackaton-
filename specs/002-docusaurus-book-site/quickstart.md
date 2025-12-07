# Quickstart (Docusaurus)

This guide provides instructions to set up and run the Docusaurus-based AI-Native Book Website project locally.

## Prerequisites

- Node.js (v18 or later)
- npm, yarn, or pnpm

## Setup

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Initialize Docusaurus (if not already done)**:
    This step might be performed by a task, but if you need to start from scratch:
    ```bash
    npx create-docusaurus@latest my-website classic --typescript
    ```
    Then move the contents of `my-website` to the root of this repository.

## Running the Development Server

To start the Docusaurus development server:

```bash
npm run start
# or
yarn start
# or
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure (Key Directories)

- `docs/`: Contains all the Markdown/MDX files for your book content, organized into chapters.
- `src/pages/`: Contains React components for custom pages (e.g., the landing page).
- `src/css/custom.css`: For custom CSS styling to override or extend the default Docusaurus theme.
- `static/`: For static assets like images.
- `docusaurus.config.js`: The main configuration file for Docusaurus.
- `sidebars.js`: Defines the structure and order of your documentation sidebar (chapters and topics).

## Building for Production

To create a production build of your Docusaurus site:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

This will generate static HTML, CSS, and JavaScript files in the `build` directory, ready for deployment.
