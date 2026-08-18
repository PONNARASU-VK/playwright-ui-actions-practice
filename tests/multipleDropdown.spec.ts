import {test, expect, Locator} from "@playwright/test"

test('Verify multiple dropdown', async({page})=>{
   await page.goto('https://playwright-html-actions.netlify.app/')
   await page.locator('#toolsMultiSelect').selectOption(['Playwright','Cypress'])
   await expect(page.locator('#toolsMultiSelect')).toHaveValues(['Playwright', 'Cypress'])
   const counts:Locator=page.locator('#toolsMultiSelect option')
   await expect(counts).toHaveCount(6) 
}) 