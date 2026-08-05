import {test, expect, Locator} from "@playwright/test";

// Input Box
test("Verify Input Box", async ({page})=>{
    await page.goto('/index.html');

    const name:Locator=page.locator('#nameInput');

    await expect(name).toBeVisible();
    await expect(name).toBeEnabled();
    await expect(name).toHaveAttribute('maxlength', '30');

    const testData = 'MSDhoni';
    await name.fill(testData);

    await expect(name).toHaveValue('MSDhoni');
});