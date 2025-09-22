import { test, expect } from '@playwright/test';
import {homePage} from "../page-objects/home.page.ts";
import {electCompoSuppliesPage} from "../page-objects/electronic.components.supplies.ts";

test("Verify user can buy an item without login",async({page}) =>{
    test.setTimeout(300_000);
    const tc_homePage = new homePage(page);
    await tc_homePage.navigate();
    await tc_homePage.closeSaleIfexist();
    await tc_homePage.allDepartList.click({delay:2000});
    await tc_homePage.electComItem.click();
    await expect(page).toHaveURL("https://demo.testarchitect.com/product-category/electronic-components-supplies/")
    await tc_eleccompsupPage.firstProduct.click();
    await expect(page).toHaveURL(/product/);
    await page.waitForLoadState('load',{timeout:10000});
    await tc_eleccompsupPage.addtoCartButton.click();
})