import { test, expect, Locator } from "@playwright/test"

test("verify the dropdowns", async ({ page }) => {

    await page.goto("https://playwright-html-actions.netlify.app/")

    // Select an option
    await page.locator('#countrySelect').selectOption('India')

    // Verify selected option
    await expect(page.locator('#countrySelect'))
        .toHaveValue('India')

    // Count the options
    const options: Locator = page.locator('#countrySelect option')
    await expect(options).toHaveCount(7)
})