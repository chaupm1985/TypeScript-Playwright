import {Locator,Page} from "@playwright/test";
export class homePage{
    readonly loginButton: Locator;
    readonly closeSaleButton: Locator;
    readonly allDepartList: Locator;
    readonly electComItem: Locator;


    constructor(private page:Page){
       this.loginButton = page.getByRole('link', { name: 'Log in / Sign up' });
       this.closeSaleButton = page.getByRole('button', { name: 'Close' })
        this.allDepartList = page.getByText('All departments')
       this.electComItem = page.getByRole('link', { name: ' Electronic Components &' })
    }
    async navigate(){
        await this.page.goto("https://demo.testarchitect.com/")
    }

    async closeSaleIfexist(){
        if(await this.closeSaleButton.isVisible){
            this.closeSaleButton.click();
        }
    }

}