const {test, expect, page} = require('@playwright/test');

test('Browser context test', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());

    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator("[type='password']").fill('learning');
    await page.locator('#signInBtn').click();
    console.log(page.locator("[style*='block']").textContent());
    
    await expect(page.locator("[style*='block']")).toContainText('Old password "learning" is no longer valid. Please use the new password "Learning@830$3mK2".')
});


test.only('Login Practice Test 2', async ({browser}) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    const username = page.locator('#username');
    const password = page.locator("[type='password']");
    const signIn = page.locator('#signInBtn');
    const cardTitles = page.locator(".card-body a");


    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());

    await username.fill('rahulshetty');
    await password.fill('Learning@830$3mK2');
    await signIn.click();
    console.log(page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect')

    await username.fill("");
    await username.fill("rahulshettyacademy");
    await signIn.click();
    //await page.waitForLoadState('networkidle');
    await cardTitles.first().waitFor();
    const titles = console.log(await cardTitles.allTextContents());
    console.log(titles);
});