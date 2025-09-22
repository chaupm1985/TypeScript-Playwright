import { test, expect } from '@playwright/test';
import {homePage} from "../page-objects/home.page.ts";
import {myAccountPage} from "../page-objects/my.account.page.ts";
import {electCompoSuppliesPage} from "../page-objects/electronic.components.supplies.ts";
import {cartPage} from "../page-objects/cart.ts";

test("Verify user can buy an item successfully",async({page}) =>{
    test.setTimeout(300_000);
    const tc_homePage = new homePage(page);
    const tc_loginPage = new myAccountPage(page);
    const tc_myaccountPage = new myAccountPage(page);
    const tc_eleccompsupPage = new electCompoSuppliesPage(page);
    const tc_cartPage = new cartPage(page);
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
    await tc_eleccompsupPage.listViewButton.click();
    await expect(tc_eleccompsupPage.listViewForm).toBeVisible({timeout: 5000 });
    await tc_eleccompsupPage.firstProduct.waitFor({state:'attached',timeout:5000});
    const pro_itemName = await tc_eleccompsupPage.firstProduct.textContent();
    await console.log('text: ' + pro_itemName);
    await tc_eleccompsupPage.firstProduct.click();
    await expect(page).toHaveURL(/product/);
    await page.waitForLoadState('load',{timeout:10000});
    await tc_eleccompsupPage.addtoCartButton.click();
    await page.waitForLoadState('load',{timeout:10000});
    await tc_eleccompsupPage.cartButton.click();
    await expect(page).toHaveURL(/cart/);
    await page.waitForLoadState('load',{timeout:10000});
    await expect(tc_cartPage.cartItem).toHaveText(String(pro_itemName));
    await tc_cartPage.checkoutButton.click();
    await expect(page).toHaveURL("https://demo.testarchitect.com/checkout/");
    await expect(tc_cartPage.checkoutProductItem).toContainText(String(pro_itemName));
    await tc_cartPage.fillBillinfo("chau","phan","Vietnam","012356","HCM","12356");
    await tc_cartPage.placeorderButton.click();
    await tc_cartPage.orderthanks.waitFor({ state: 'visible' });
    await expect(tc_cartPage.orderproductname).toContainText(String(pro_itemName));
})