import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../services/product-service.service';
import { Product } from '../../entity/product';
import { CommonModule } from '@angular/common';
import { SortPipe } from '../../pipes/sort.pipe';

@Component({
  selector: 'app-display-products',
  imports: [CommonModule,SortPipe],
  templateUrl: './display-products.component.html',
  styleUrl: './display-products.component.css'
})

export class DisplayProductsComponent implements OnInit {
  products: Product[] = [];
  constructor(private ProductService: ProductServiceService) { }
  ngOnInit(): void {
    this.products = this.ProductService.getAllProducts();
    console.log(this.products);
  }

  deleteProduct(productId?: number) {
    const isConfirmed = confirm('Are you sure you want to delete this item?');
    if (isConfirmed) {
      console.log('Item deleted');
      console.log("delete product id", productId);
      this.products = this.ProductService.deleteProductById(productId);
    } else {
      console.log('Item not deleted');
    }
   
  }

}
