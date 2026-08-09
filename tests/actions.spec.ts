import {test, expect, Locator} from "@playwright/test";

// Input Box
test("Should validate input field accepts text within max length", async ({page})=>{
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
test('Should allow selecting only one radio option at a time', async ({page})=>{
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

// CheckBox
test('Should handle checkbox selection, deselection, and dynamic state changes correctly', async ({page})=>{
    await page.goto('https://playwright-html-actions.netlify.app/')
    const labels:string[]=[' Playwright', ' Selenium', ' Cypress', ' API Testing']
    
    // check all the boxes
    for(let skills of labels){
        const CheckBox:Locator = page.getByLabel(skills)
        await expect(CheckBox).toBeVisible()
        await expect(CheckBox).toBeEnabled()
        await CheckBox.check()
        await expect(CheckBox).toBeChecked()
    }

    // uncheck last two boxes
    for(let skills of labels.slice(-2)){
        const CheckBox:Locator = page.getByLabel(skills)
        await CheckBox.uncheck()
        await expect(CheckBox).not.toBeChecked()
    }

    // check the unchecked boxes and uncheck the checked boxes
    for(let skills of labels){
        const CheckBox:Locator=page.getByLabel(skills)
        if(await CheckBox.isChecked()){
            await CheckBox.uncheck()
            await expect(CheckBox).not.toBeChecked()
        }else{
            await CheckBox.check()
            await expect(CheckBox).toBeChecked()
        }
    }

    // check random boxes
    const arr:number[]=[0,1]
    for(const num of arr){
        const CheckBox:Locator=page.getByLabel(labels[num])
        await CheckBox.check()
        await expect(CheckBox).toBeChecked()
    }
}) 
