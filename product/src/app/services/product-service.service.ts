import { Injectable } from '@angular/core';
import { AddNewProductComponent } from '../components/add-new-product/add-new-product.component';
import { Product } from '../entity/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  products: Product[] = [];

  constructor() {

    this.products.push(new Product(101, 'Rohit Sharma', 100, 'He is a top-order batsman', 'Mumbai Indians'));
    this.products.push(new Product(102, 'Hardik Pandya', 200, 'He is an allrounder', 'Mumbai Indians'));
    this.products.push(new Product(103, 'Virat Kohli', 150, 'He is a top-order batsman', 'Royal Challengers Bangalore'));
    this.products.push(new Product(104, 'KL Rahul', 120, 'He is a wicketkeeper batsman', 'Punjab Kings'));
    this.products.push(new Product(105, 'Shubman Gill', 110, 'He is a top-order batsman', 'Gujarat Titans'));
    this.products.push(new Product(106, 'Jasprit Bumrah', 250, 'He is a fast bowler', 'Mumbai Indians'));
    this.products.push(new Product(107, 'David Warner', 180, 'He is a top-order batsman', 'Delhi Capitals'));
    this.products.push(new Product(108, 'Rishabh Pant', 130, 'He is a wicketkeeper batsman', 'Delhi Capitals'));
    this.products.push(new Product(109, 'MS Dhoni', 300, 'He is a wicketkeeper batsman and captain', 'Chennai Super Kings'));
    this.products.push(new Product(110, 'Suryakumar Yadav', 140, 'He is a middle-order batsman', 'Mumbai Indians'));

  }
  addNewProduct(newProduct: Product): boolean {
    this.products.push(newProduct);
    console.log(this.products);
    return true;

  }
  getAllProducts(): Product[] {
    return this.products;
  }
  deleteProductById(productId?: number): Product[] {
    this.products = this.products.filter(p => p.productId != productId);
    return this.products;
  }
}
