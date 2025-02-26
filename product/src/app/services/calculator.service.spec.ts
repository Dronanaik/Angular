import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
import { serverRoutes } from '../app.routes.server';


describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('add(2,2) should return sum 4',()=>{
    expect(service).toBeTruthy();
    expect(service.add(2,2)).toBe(4);
  });

  it('multiply(2,3) should return multipy 6',()=>{
    expect(service).toBeTruthy();
    expect(service.multiply(2,3)).toBe(6);
  })
  it('divide(2,2) should return Divide 1',()=>{
    expect(service).toBeTruthy();
    expect(service.division(2,2)).toBe(1);
  })
});
