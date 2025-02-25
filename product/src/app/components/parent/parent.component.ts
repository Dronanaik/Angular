import { Component, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { StarPipe } from '../../pipes/star.pipe';
import { ProductServiceService } from '../../services/product-service.service';
import { ProductApiService } from '../../services/product-api.service';
import { Product } from '../../entity/product';
import { CommonEngine } from '@angular/ssr/node';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent,StarPipe,CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit {
  parentMessage = ' Hello Message from Parent ';
  childMessage = '';
  products: Product[]=[];
  product?:Product;
  selectedProduct(product:Product){
    this.product = product;
  }

  constructor(private productService:ProductServiceService){}


  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }
  receiveMessage(message: string){
    this.childMessage = message;
  }

}
