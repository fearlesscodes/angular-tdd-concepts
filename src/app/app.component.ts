import {Component, OnInit} from '@angular/core';
import {CustomerService} from './customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test';

  state = true;

  constructor(private service: CustomerService) {
  }

  ngOnInit(): void {
    this.service.getCustomer().subscribe(value => this.state = value);
  }

}
