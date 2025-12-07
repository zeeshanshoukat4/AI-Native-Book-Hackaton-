# Data Model

This document describes the data structures for the AI-Native Book Website. As there is no backend database, this model defines the shape of data as it is sourced from MDX files and stored in the browser's `localStorage`.

## Content Entities

The book content is sourced from MDX files. The frontmatter of these files will contain the metadata, and the body will contain the content.

### Book

A synthetic object representing the entire collection of chapters. It does not have its own MDX file but is constructed by aggregating all chapters.

- **chapters**: `Chapter[]` - An array of all the chapter objects.

### Chapter

Represents a single chapter of the book. Each chapter will be a directory containing MDX files for its topics. Or, for simplicity, a single MDX file with topics within it. We will use a single MDX file per chapter.

- **id**: `string` - A unique identifier for the chapter (e.g., 'chapter-1').
- **title**: `string` - The title of the chapter.
- **topics**: `Topic[]` - An array of the topics within the chapter.

### Topic

Represents a topic within a chapter.

- **id**: `string` - A unique identifier for the topic (e.g., 'topic-1-1').
- **title**: `string` - The title of the topic.
- **content**: `string` (HTML/React Components) - The body content of the topic, rendered from MDX.

**Example MDX Frontmatter (`1.mdx`):**

```yaml
---
title: "Chapter 1: The Genesis of AI-Native Development"
topics:
  - title: "Topic 1.1: What is AI-Native?"
  - title: "Topic 1.2: The Paradigm Shift"
---

## Topic 1.1: What is AI-Native?

...content...

## Topic 1.2: The Paradigm Shift

...content...
```

## Local Storage Entities

### WaitlistContact

Represents a contact saved from the waitlist form. The data will be stored as an array of objects in `localStorage`.

- **key**: `waitlist`
- **value**: `WaitlistContact[]` - An array of contact objects.

**`WaitlistContact` object structure:**

- **email**: `string` - The user's email address.
- **timestamp**: `string` (ISO 8601) - The date and time when the user signed up.

**Example `localStorage` value:**

```json
[
  {
    "email": "user1@example.com",
    "timestamp": "2025-12-07T10:00:00Z"
  },
  {
    "email": "user2@example.com",
    "timestamp": "2025-12-07T10:05:00Z"
  }
]
```
