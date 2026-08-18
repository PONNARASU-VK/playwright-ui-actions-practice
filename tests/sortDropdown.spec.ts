import {test, expect, Locator} from "@playwright/test"

test('Verify multiple dropdown', async({page})=>{
   await page.goto('https://playwright-html-actions.netlify.app/')
   const lists:string[]=(await page.locator('#sortTableSelect').allTextContents()).map(value => value.trim())
   const sorted:string[]=[...lists].sort()
   expect(sorted).toEqual(lists) 
})