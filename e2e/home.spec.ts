import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should load and display hero content', async ({ page }) => {
    await page.goto('/');
    
    await expect(page.getByRole('heading', { name: /everything you build/i })).toBeVisible();
    await expect(page.getByText(/claim your dev id/i)).toBeVisible();
  });

  test('should navigate to create ID page', async ({ page }) => {
    await page.goto('/');
    
    await page.getByRole('link', { name: /create your dev id/i }).click();
    await expect(page).toHaveURL('/create-id');
    await expect(page.getByRole('heading', { name: /create your dev id/i })).toBeVisible();
  });

  test('should respect reduced motion preference', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    
    // Simple nav should be visible with reduced motion
    const simpleNav = page.locator('nav a');
    await expect(simpleNav.first()).toBeVisible();
  });
});

test.describe('Profile Page', () => {
  test('should display profile information', async ({ page }) => {
    await page.goto('/profile/DEV-ankit-4271');
    
    await expect(page.getByText('Ankit Sharma')).toBeVisible();
    await expect(page.getByText('@ankit')).toBeVisible();
    await expect(page.getByRole('heading', { name: /tech janam kundli/i })).toBeVisible();
  });
});
