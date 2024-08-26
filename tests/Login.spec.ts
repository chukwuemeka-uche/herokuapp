import { test, expect } from '@playwright/test';

const textName = "Form Authentication";

test("Login page test", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/");

    await page.getByText(textName).click();

    await page.waitForTimeout(5000)
})