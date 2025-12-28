import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('SweetShop Authentication Tests', () => {

  // TEST 1: Positive Scenario
  test('TC 01 - Successful Login with Valid Credentials', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.login('test@example.com', 'password123');

    // Assertion: Check if we are redirected to the dashboard
    await expect(page).toHaveURL(/.*dashboard/);
  });

  // TEST 2: Negative Scenario (Required by assignment)
  test('TC 02 - Error Message on Invalid Login', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    
    // Using wrong credentials
    await login.login('wrong@user.com', 'wrongpass');

    // Assertion: Check for an error message or that we stayed on the login page
    await expect(page).toHaveURL(/.*login/);
  });
});
