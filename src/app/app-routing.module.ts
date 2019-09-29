import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerService} from './customer.service';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    CustomerService
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
