import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test('should display the correct title and tagline', async ({ page }) => {
    await page.goto('/');
    const title = await page.locator('.hero__title').textContent();
    const tagline = await page.locator('.hero__subtitle').textContent();

    expect(title).toBe('AI-Native Driven Development Physical AI and Humanoid Robotics – Premium Book Website');
    expect(tagline).toBe('The future is AI-Native.');
  });

  test('should have a "Start Reading" button that links to the docs', async ({ page }) => {
    await page.goto('/');
    const startReadingButton = page.getByRole('link', { name: 'Start Reading' });
    await expect(startReadingButton).toBeVisible();
    await expect(startReadingButton).toHaveAttribute('href', '/docs/intro'); // Assuming /docs/intro is the first doc
  });

  test('should display the "Discover AI-Native Development" section', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Discover AI-Native Development')).toBeVisible();
    await expect(page.getByText('Dive deep into the future of software engineering')).toBeVisible();
  });
});
