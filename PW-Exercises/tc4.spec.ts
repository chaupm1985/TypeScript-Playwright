import { test, expect } from '@playwright/test';
import {homePage} from "../page-objects/home.page.ts";
import {myAccountPage} from "../page-objects/my.account.page.ts";
import {electCompoSuppliesPage} from "../page-objects/electronic.components.supplies.ts";


test("Verify user can sort item by price",async({page}) =>{
    test.setTimeout(300_000);
    const tc_homePage = new homePage(page);
    const tc_loginPage = new myAccountPage(page);
    const tc_myaccountPage = new myAccountPage(page);
    const tc_eleccompsupPage = new electCompoSuppliesPage(page);
    await tc_homePage.navigate();
    await tc_homePage.closeSaleIfexist();
    await tc_homePage.loginButton.click();
    await expect(page).toHaveURL("https://demo.testarchitect.com/my-account/")
    await tc_loginPage.username.fill("chau.phan@agest.vn")
    await tc_loginPage.password.fill("pmc123456")
    await tc_loginPage.loginButton.click();
    await page.waitForTimeout(2000);
    await tc_myaccountPage.allDepartList.click({delay:2000});
    await tc_myaccountPage.electComItem.click();
    await expect(page).toHaveURL("https://demo.testarchitect.com/product-category/electronic-components-supplies/")
    await expect(tc_eleccompsupPage.gridviewForm).toBeVisible({timeout: 5000 });
    await tc_eleccompsupPage.sortitemSelect.selectOption("Sort by price: low to high");
    await expect(tc_eleccompsupPage.firstlowitemprice).toBeVisible();
    await tc_eleccompsupPage.sortitemSelect.selectOption("Sort by price: high to low");
    await expect(tc_eleccompsupPage.firsthighitemprice).toBeVisible();
})