import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  getCustomer(): Observable<boolean> {
    return of(true);
}

  setCustomer(value: any) {}

}
