import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'https://sweetshop.netlify.app',
    browserName: 'chromium',
    headless: true,
  },
});
