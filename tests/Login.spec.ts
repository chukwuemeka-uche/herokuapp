import { test, expect } from '@playwright/test';

const textName = "Form Authentication";
const usernameField = "#username";
const passwordField = "#password";
const logoutBtn = ".button";

test("Login page test", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/");

    await page.getByText(textName).click();

    await page.locator(usernameField).fill("tomsmith");
    await page.locator(passwordField).fill("SuperSecretPassword!");
    await page.getByRole("button").click();

    await expect(page.getByText('You logged into a secure area!')).toBeVisible();

    await page.click(logoutBtn);

    await expect(page.getByText('You logged out of the secure area!')).toBeVisible();

    await page.waitForTimeout(5000)
})