import { test, expect } from '@playwright/test';

const menuLocator = "ul>li>a";
const menuTitle = "Form Authentication";
const usernameField = "#username";
const passwordField = "#password";
const logoutBtn = ".button";

test("Login page test", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/");

    const menus = await page.$$(menuLocator)
    for (let menu of menus) {
        const option = await menu.textContent()
        if (typeof option === "string" && option === menuTitle) {
            console.log(option)
            await menu.click()
            break;
        }
    }

    await page.locator(usernameField).fill("tomsmith");
    await page.locator(passwordField).fill("SuperSecretPassword!");
    await page.getByRole("button").click();

    await expect(page.getByText('You logged into a secure area!')).toBeVisible();

    await page.click(logoutBtn);

    await expect(page.getByText('You logged out of the secure area!')).toBeVisible();

    await page.waitForTimeout(5000)
})