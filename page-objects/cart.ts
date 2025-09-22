import {Locator,Page} from "@playwright/test";
export class cartPage{
    readonly cartItem:Locator;
    readonly checkoutButton:Locator;
    readonly checkoutProductItem:Locator;
    readonly firstnameTextbox:Locator;
    readonly lastnameTextbox:Locator;
    readonly countryselector:Locator;
    readonly addressTextbox:Locator;
    readonly cityTextbox:Locator;
    readonly stateSelect:Locator;
    readonly zipCode:Locator;
    readonly phonetextbox:Locator;
    readonly placeorderButton:Locator;
    readonly orderproductname:Locator;
    readonly orderthanks:Locator;

    constructor(private page:Page){
        this.cartItem = page.locator("(//div[@class='cart-item-details']/a)[1]");
        this.checkoutButton = page.getByRole('link', { name: 'Proceed to checkout' });
        this.checkoutProductItem = page.locator("//tr[contains(@class,'cart_item')]/td[@class='product-name']");
        this.firstnameTextbox = page.getByRole('textbox', { name: 'First name *' });
        this.lastnameTextbox = page.getByRole('textbox', { name: 'Last name *' });
        this.countryselector = page.locator("//select[@id='billing_country']");
        this.addressTextbox = page.getByRole('textbox', { name: 'Street address *' });
        this.cityTextbox = page.getByRole('textbox', { name: 'Town / City *' });
        this.stateSelect = page.locator("//select[@id='billing_state']");
        this.zipCode = page.getByRole('textbox', { name: 'ZIP Code *' });
        this.phonetextbox = page.getByRole('textbox', { name: 'Phone *' });
        this.placeorderButton = page.getByRole('button', { name: 'Place order' });
        this.orderproductname = page.locator("//td[@class='woocommerce-table__product-name product-name']");
        this.orderthanks = page.getByText('Thank you. Your order has');
    }
   
    async fillBillinfo(fname:string,lname:string,country:string,address:string,city:string,phone:string){
        await this.firstnameTextbox.fill(fname);
        await this.lastnameTextbox.fill(lname);
        await this.countryselector.selectOption(country);
        await this.addressTextbox.fill(address);
        await this.cityTextbox.fill(city);
        await this.phonetextbox.fill(phone);
    }
}