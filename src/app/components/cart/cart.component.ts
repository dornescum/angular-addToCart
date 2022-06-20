import { Component, OnInit } from '@angular/core';
import {CartService} from "src/app/service/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public products : any = [];
  public grandTotal : number = 0;
  constructor(private cartService: CartService) {
    console.log(cartService)
    this.cartService.getProducts().subscribe((res)=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }

  ngOnInit(): void {
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart()
  }
}
