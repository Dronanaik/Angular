import { TestBed } from '@angular/core/testing';

import { ProductApiService } from './product-api.service';
import { HttpClient } from '@angular/common/http';

describe('ProductApiService', () => {
  let service: ProductApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    TestBed.inject(HttpClient);
  
    service = TestBed.inject(ProductApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return observable',()=>{
    expect(service.getAllProductsOpenApi).toBeTruthy();

  })
});
