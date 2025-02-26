import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  balance: number = 0;
  minbalance:number = 1000;
  constructor() { }
  
  
  addFunds(amount: number): number {
    if (amount< 0) throw new Error('Amount can not be negative');
    this.balance = this.balance + amount;
    return this.balance;

  }
  withdrawFunds(amount: number): number {
    if (amount > this.balance) throw new Error('Insufficient Funds');
    this.balance = this.balance - amount;
    return this.balance;
  }
  getBalance() {
    return this.balance;
  }

  newAccount(amount:number):void{
    if(amount<1000) throw new Error("Your amount must have minimum Balance of 1000");

  }


}

