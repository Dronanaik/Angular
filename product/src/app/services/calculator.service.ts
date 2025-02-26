import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }
  add(n1:number,n2:number):number{
    return n1 + n2;
  }

  multiply(n1:number,n2:number):number{
    return n1 * n2;
  }
  division(n1:number,n2:number):number{
    return n1/n2;
  }
}
