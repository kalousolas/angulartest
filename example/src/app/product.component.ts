
import { Component } from '@angular/core';
import { ProductRepository } from './repository.model';
import { Product } from './product.model';

@Component({
    selector: "app",
    //templateUrl: "product.component.html",
    //template:'<input [value]="email" (keyup.enter)="email=$event.target.value; onKeyUp()"/>',
    template: '<input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/> <br> <span>{{email}}</span>',
    styleUrls: ["product.component.css"]
})
export class ProductComponent {
    model: ProductRepository = new ProductRepository();
    disabled = true;
    email = "muratgumus05@gmail.com";
    //product: Product = this.model.getProductById(1);

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