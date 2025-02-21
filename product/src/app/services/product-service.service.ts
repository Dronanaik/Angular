import { Injectable } from '@angular/core';
import { AddNewProductComponent } from '../components/add-new-product/add-new-product.component';
import { Product } from '../entity/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  products:Product[]=[];
  
  constructor() {
    this.products.push(new Product(101,'Hardik',20,'He is an amazing player','gjgifdjdjgdgh'));
   }
  addNewProduct(newProduct:Product):boolean{
    this.products.push(newProduct);
    console.log(this.products);
    return true;
   
  }
  getAllProducts():Product[]{
    return this.products;
  }
  deleteProductById(productId?:number):Product[]{
    this.products= this.products.filter(p=>p.productId!=productId);
    return this.products;
  }
}
