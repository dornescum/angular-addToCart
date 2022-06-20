import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "src/app/components/products/products.component";
import {CartComponent} from "src/app/components/cart/cart.component";

const routes: Routes = [
  {path:"", redirectTo:"products", pathMatch:"full"},
  {path:"products", component:ProductsComponent},
  {path:"cart", component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
