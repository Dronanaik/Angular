import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../services/product-service.service';
import { Product } from '../../entity/product';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../pipes/search.pipe';
import { ProductApiService } from '../../services/product-api.service';
import { error } from 'console';


@Component({
  selector: 'app-search',
  imports: [CommonModule, FormsModule, NgFor, SearchPipe],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  query: string = '';
  products: Product[] = [];
  apiProducts: any[] = [];
  constructor(private ProductServiceService: ProductServiceService, private productApiService: ProductApiService) {

  }
  ngOnInit(): void {
    this.products = this.ProductServiceService.getAllProducts();
    this.productApiService.getAllProductsOpenApi().subscribe(
      {
        next: data => { console.log(data);
        this.apiProducts = data;


      },
      error: error => console.log(error),
      complete: 
      ()=> console.log("Fetching products completed."),
    }
  )}

}
