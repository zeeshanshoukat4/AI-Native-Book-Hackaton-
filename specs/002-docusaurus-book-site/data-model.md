# Data Model (Docusaurus)

This document describes the data model for the Docusaurus-based book website. The model is entirely file-based and relies on Docusaurus's conventions for content organization and navigation.

## Core Concepts

### 1. Documents (`/docs`)

- **Source of Truth**: All book content is stored in MDX files within the `/docs` directory.
- **One Topic per File**: Each `.mdx` file represents a single topic within the book.
- **Frontmatter**: Each file can contain frontmatter (YAML) to define metadata like a unique `id`, `title`, or `sidebar_label`.

**Example File:** `/docs/chapter1/topic1.mdx`

```mdx
---
id: what-is-ai-native
title: What is AI-Native?
sidebar_label: Introduction to AI-Native
---

The content for the first topic of the first chapter goes here.
```

### 2. Sidebar (`sidebars.js`)

- **Navigation Structure**: The book's navigational structure (the order of chapters and topics) is defined in the `sidebars.js` file.
- **Categories as Chapters**: A "category" in the sidebar represents a chapter of the book.
- **Doc Links as Topics**: Direct links to doc `id`s represent the topics within each chapter.

**Example `sidebars.js`:**

```javascript
module.exports = {
  bookSidebar: [
    {
      type: 'category',
      label: 'Chapter 1: The Genesis',
      items: ['what-is-ai-native', 'paradigm-shift'], // doc IDs from frontmatter
    },
    {
      type: 'category',
      label: 'Chapter 2: Core Principles',
      items: ['doc-id-for-topic-2-1', 'doc-id-for-topic-2-2'],
    },
    // ... more chapters
  ],
};
```

### 3. Static Assets (`/static`)

- **Images and Media**: All static assets like images, videos, or downloadable files used in the MDX content should be placed in the `/static` directory.
- **Referencing**: Assets can be referenced in MDX files using a root path (e.g., `/img/my-diagram.png`).

### 4. Custom Pages (`/src/pages`)

- **Landing Page**: The main landing page is a custom React component located at `/src/pages/index.js`. This file is not part of the `docs` system and allows for a fully custom layout.
- **Other Custom Pages**: While this project only requires a landing page, other custom pages could be added here if needed.
