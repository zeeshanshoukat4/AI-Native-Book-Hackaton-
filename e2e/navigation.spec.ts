import { test, expect } from '@playwright/test';

test.describe('Sidebar Navigation', () => {
  test('should display all chapters and topics in the sidebar', async ({ page }) => {
    await page.goto('/');
    // Navigate to a docs page to make sure the sidebar is visible
    await page.getByRole('link', { name: 'Book' }).click(); 

    // Expect Chapter 1
    await expect(page.getByRole('button', { name: 'Chapter 1: The Genesis' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'The Genesis of AI-Native' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'The Paradigm Shift' })).toBeVisible();

    // Expect Chapter 2
    await expect(page.getByRole('button', { name: 'Chapter 2: Core Principles' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Core Principles' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Architectural Patterns' })).toBeVisible();

    // Add checks for other chapters as well
    await expect(page.getByRole('button', { name: 'Chapter 3: Physical AI' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Chapter 4: Humanoid Robotics' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Chapter 5: The Future' })).toBeVisible();
  });

  test('should navigate to a topic when clicked in the sidebar', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Book' }).click(); // Navigate to a docs page

    const chapter2Topic1Link = page.getByRole('link', { name: 'Core Principles' });
    await expect(chapter2Topic1Link).toBeVisible();
    await chapter2Topic1Link.click();

    await expect(page).toHaveURL(/.*docs\/chapter-2-topic-1/);
    await expect(page.getByRole('heading', { name: 'Chapter 2 - Topic 1: Core Principles of AI-Native' })).toBeVisible();
  });
});
