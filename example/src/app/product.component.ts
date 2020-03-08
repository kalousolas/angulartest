
import { Component } from '@angular/core';
import { ProductRepository } from './repository.model';
import { Product } from './product.model';

@Component({
    selector: "app",
    templateUrl: "product.component.html",
    //templateUrl: "product.component.pipes.html",
    //template:'<input [value]="email" (keyup.enter)="email=$event.target.value; onKeyUp()"/>',
    //template: '<input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/> <br> <span>{{email}}</span>',
    styleUrls: ["product.component.css"]
})
export class ProductComponent {
    model: ProductRepository = new ProductRepository();
    productName: string = this.model.getProductById(1).name;
    disabled = true;
    email = "muratgumus05@gmail.com";
    today: number = Date.now();
    title: string = 'Murat';
    students: number = 132448;
    price: number = 15.99;
    completed: number = 87.45;
    text: string = 'Angular Currency Pipe is one of the bulit in pipe in Angular used to format currency value according to given country code,currency,decimal,locale information.';
    //product: Product = this.model.getProductById(1);

    addProduct() {
        this.model.addProduct(new Product(6, "Samsung Galaxy S6", "iyi telefon", 5000));
    }
    deleteProduct(product: Product) {
        this.model.deleteProduct(product);
    }
    updateProduct(product: Product) {
        product.name = "updated";
    }
    getClasses(id: number): string {
        let product = this.model.getProductById(id);
        return (product.price <= 1000 ? "bg-info" : "bg-secondary") + " m-2 p-2 text-white";
    }

    getClassMap(id: number): Object {
        let product = this.model.getProductById(id);

        return {
            "bg-info": product.price <= 1000,
            "bg-secondary": product.price > 1000,
            "text-center text-white": product.name == "Samsung S6"
        }
    }

    onKeyUp() {
        console.log(this.email);
    }

}