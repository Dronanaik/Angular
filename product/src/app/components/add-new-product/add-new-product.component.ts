import { Component } from '@angular/core';
import { Product } from '../../entity/product';
import { FormsModule } from '@angular/forms';
import { ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-add-new-product',
  imports: [FormsModule],
  templateUrl: './add-new-product.component.html',
  styleUrl: './add-new-product.component.css'
})
export class AddNewProductComponent {
  constructor(private ProductServiceService:ProductServiceService){}
  newProduct:Product=new Product();
  addProduct(){
    console.log(this.newProduct);
    this.ProductServiceService.addNewProduct(this.newProduct);
    this.newProduct = new Product(); //Allocate memory for next Product
    
  }
  
}
