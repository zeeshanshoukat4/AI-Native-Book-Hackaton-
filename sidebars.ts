import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  bookSidebar: [
    {
      type: 'category',
      label: 'Chapter 1: The Genesis',
      items: ['chapter-1-topic-1', 'chapter-1-topic-2'],
    },
    {
      type: 'category',
      label: 'Chapter 2: Core Principles',
      items: ['chapter-2/chapter-2-topic-1', 'chapter-2/chapter-2-topic-2'],
    },
    {
      type: 'category',
      label: 'Chapter 3: Physical AI',
      items: ['chapter-3/chapter-3-topic-1', 'chapter-3/chapter-3-topic-2'],
    },
    {
      type: 'category',
      label: 'Chapter 4: Humanoid Robotics',
      items: ['chapter-4/chapter-4-topic-1', 'chapter-4/chapter-4-topic-2'],
    },
    {
      type: 'category',
      label: 'Chapter 5: The Future',
      items: ['chapter-5/chapter-5-topic-1', 'chapter-5/chapter-5-topic-2'],
    },
  ],
};

export default sidebars;
