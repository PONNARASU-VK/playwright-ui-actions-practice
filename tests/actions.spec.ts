import {test, expect, Locator} from "@playwright/test";

// Input Box
test("Verify Input Box", async ({page})=>{
    await page.goto('https://playwright-html-actions.netlify.app/');

    const name:Locator=page.locator('#nameInput');

    await expect(name).toBeVisible();
    await expect(name).toBeEnabled();
    await expect(name).toHaveAttribute('maxlength', '30');

    const testData = 'MSDhoni';
    await name.fill(testData);

    await expect(name).toHaveValue('MSDhoni');
});

// Radio Buttons
test("Verify Radio Buttons", async ({page})=>{
    await page.goto('https://playwright-html-actions.netlify.app/');
    const Beginner:Locator=page.locator('#expBeginner');
    const Intermediate:Locator=page.locator('#expIntermediate');
    const Advanced:Locator=page.locator('#expAdvanced');
    await expect(Beginner).toBeVisible()
    await expect(Beginner).toBeEnabled()
    await expect(Intermediate).toBeVisible()
    await expect(Intermediate).toBeEnabled()
    await expect(Advanced).toBeVisible()
    await expect(Advanced).toBeEnabled()
    expect(await Beginner.isChecked()).toBe(false);
    expect(await Intermediate.isChecked()).toBe(false);
    expect(await Advanced.isChecked()).toBe(false);

    await Beginner.check();
    await expect(Beginner).toBeChecked()
    expect(await Intermediate.isChecked()).toBe(false);
    expect(await Advanced.isChecked()).toBe(false); 

    await Intermediate.check();
    await expect(Intermediate).toBeChecked()
    expect(await Beginner.isChecked()).toBe(false);
    expect(await Advanced.isChecked()).toBe(false);

    await Advanced.check();
    await expect(Advanced).toBeChecked()
    expect(await Beginner.isChecked()).toBe(false);
    expect(await Intermediate.isChecked()).toBe(false);
});