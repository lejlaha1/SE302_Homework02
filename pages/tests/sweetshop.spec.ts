import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('SweetShop Authentication Tests', () => {

 
  test('TC 01 - Successful Login with Valid Credentials', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.login('test@example.com', 'password123');


    await expect(page).toHaveURL(/.*dashboard/);
  });


  test('TC 02 - Error Message on Invalid Login', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    
    await login.login('wrong@user.com', 'wrongpass');

   
    await expect(page).toHaveURL(/.*login/);
  });
});
