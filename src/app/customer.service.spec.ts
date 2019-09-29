import { TestBed } from '@angular/core/testing';

import { CustomerService } from './customer.service';

describe('CustomerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerService = TestBed.get(CustomerService);
    expect(service).toBeTruthy();
  });

  it('getCustomer should return true', () => {
    const service: CustomerService = TestBed.get(CustomerService);
    service.getCustomer().subscribe(value => expect(value).toBe(true));
  });
});
