import {Locator,Page} from "@playwright/test";
export class electCompoSuppliesPage{
    readonly gridviewForm: Locator;
    readonly listViewButton: Locator;
    readonly listViewForm:Locator;
    readonly firstProduct:Locator;
    readonly addtoCartButton:Locator;
    readonly cartButton:Locator;

    constructor(private page:Page){
        this.gridviewForm = page.locator("//div[contains(@class,'products-grid')]")
        this.listViewForm = page.locator("//div[contains(@class,'products-list')]")
        this.listViewButton = page.locator('.switch-list')
        this.firstProduct = page.locator('(//div[@class="text-center product-details"])[1]//h2[@class="product-title"]/a')
        this.addtoCartButton = page.getByRole('button', { name: 'Add to cart' })
        this.cartButton = page.locator("//div[contains(@class,'header-cart') and contains(@class,'et-content-toTop')]/a")
    }

}