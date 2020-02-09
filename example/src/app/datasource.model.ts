import { Product } from './product.model';

export class SimpleDataSource {
    private products: Product[];

    constructor() {

        this.products = new Array<Product>(
            new Product(1, "Samsung Galaxy S5", "iyi telefon", 1000),
            new Product(2, "Samsung Galaxy S6", "iyi telefon", 2000),
            new Product(3, "Samsung Galaxy S7", "iyi telefon", 3000),
            new Product(4, "Samsung Galaxy S8", "iyi telefon", 4000),
            new Product(5, "Samsung Galaxy S9", "iyi telefon", 5000)
        );
    }

    getProducts(): Product[] {
        return this.products;
    }
}