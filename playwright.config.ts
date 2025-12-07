// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e', // Directory where your Playwright tests will be located
  fullyParallel: true,
  forbidOnly: process.env.CI ? true : false,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html', // You can choose other reporters like 'list', 'json', etc.
  use: {
    baseURL: 'http://localhost:3000', // The URL where your Docusaurus site runs locally
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit', // Webkit failed to install, but keeping it in config for completeness
      use: { ...devices['Desktop Safari'] },
    },
  ],
  webServer: {
    command: 'npm run start', // Command to start your Docusaurus development server
    url: 'http://localhost:3000',
    timeout: 120 * 1000, // Give Docusaurus enough time to start
    reuseExistingServer: !process.env.CI,
  },
});
