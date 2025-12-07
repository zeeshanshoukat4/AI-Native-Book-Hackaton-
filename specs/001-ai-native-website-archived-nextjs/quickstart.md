# Quickstart

This guide provides instructions to set up and run the AI-Native Book Website project locally.

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

## Running the Development Server

Once the dependencies are installed, you can start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app/`: Contains the page routes.
- `src/components/`: Contains reusable React components.
- `src/lib/`: Contains utility functions and hooks.
- `src/content/chapters/`: Contains the MDX files for the book chapters.
- `public/`: Contains static assets like images and fonts.

## Building for Production

To create a production build, run:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

This will create an optimized production build in the `.next` directory.
