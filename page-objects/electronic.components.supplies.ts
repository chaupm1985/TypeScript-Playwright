import {Locator,Page} from "@playwright/test";
export class electCompoSuppliesPage{
    readonly gridviewForm: Locator;
    readonly listViewButton: Locator;
    readonly listViewForm:Locator;
    readonly firstProduct:Locator;
    readonly addtoCartButton:Locator;
    readonly cartButton:Locator;
    readonly progrid1:Locator;
    readonly progrid2:Locator;

    constructor(private page:Page){
        this.gridviewForm = page.locator("//div[contains(@class,'products-grid')]")
        this.listViewForm = page.locator("//div[contains(@class,'products-list')]")
        this.listViewButton = page.locator('.switch-list')
        this.firstProduct = page.locator('(//div[@class="text-center product-details"])[1]//h2[@class="product-title"]/a')
        this.addtoCartButton = page.getByRole('button', { name: 'Add to cart' })
        this.cartButton = page.locator("//div[contains(@class,'header-cart') and contains(@class,'et-content-toTop')]/a")
        this.progrid1 = page.getByRole('link', { name: 'Add “Canon i-SENSYS LBP6030W' }).nth(1)
        this.progrid2 = page.getByRole('link', { name: 'Add “DJI Mavic Pro Camera' }).nth(1)
    }

}