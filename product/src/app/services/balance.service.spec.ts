import { TestBed } from '@angular/core/testing';

import { BalanceService } from './balance.service';

describe('BalanceService', () => {
  let service: BalanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BalanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Add amount (200)',()=>{
    service.balance = 50;
    expect(service.addFunds(200)).toBe(250);
  });
  

  it(':) With drow amount',()=>{
    service.balance = 100;
    expect(service.withdrawFunds(100)).toBe(0);
  });

  it('#Get the current Amount',()=>{
    service.balance = 0;
    expect(service.getBalance()).toBe(0);
  });

  it('#Add amount (-200)',()=>{
    service.balance = 50;
    expect(service.addFunds(-200)).withContext('get negative funds error').toThrowError('Amount can not be negative');
  });

  
  it('New Account',()=>{
    service.balance = 50;
    expect(service.newAccount(800)).withContext('get minimum funds error').toThrowError('Amount should greater than 1000');
  });


});
