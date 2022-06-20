import {Component, OnInit} from '@angular/core';
import {ApiService} from "src/app/service/api.service";
import {CartComponent} from "src/app/components/cart/cart.component";
import {CartService} from "src/app/service/cart.service";

@Component({
  selector: 'app-products', templateUrl: './products.component.html', styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public productList : any ;
  public filterCategory : any
  searchKey:string ="";
  constructor(private api : ApiService, private cartService : CartService) { }

  ngOnInit(): void {
    this.api.getProduct()
      .subscribe(res=>{
        this.productList = res;
        this.filterCategory = res;
        this.productList.forEach((a:any) => {
          if(a.category ==="women's clothing" || a.category ==="men's clothing"){
            a.category ="fashion"
          }
          Object.assign(a,{quantity:1,total:a.price});
        });
        console.log(this.productList)
      });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  filter(category:string){
    this.filterCategory = this.productList
      .filter((a:any)=>{
        if(a.category == category || category==''){
          return a;
        }
      })
  }


  // productList: any;
  // filterCategory: any;
  // searchKey:string ="";
  // constructor(private api: ApiService, private cartService: CartService) {
  // }
  //
  // ngOnInit(): void {
  //   this.api.getProduct().subscribe((res: any) => {
  //     this.productList = res;
  //     this.filterCategory = res; // top nav
  //     this.productList.forEach((el: any) => {
  //      if (el.category ==="woman's clothing" ||  el.category ==="men's clothing"  ){
  //        el.category = "fashion"
  //      }
  //       Object.assign(el, {quantity: 1, total: el.price})
  //     })
  //   })
  //   // error filter
  //  this.cartService.search.subscribe((val:any)=>{
  //    this.searchKey = val;
  //  })
  // }
  //
  // addtocart(item: any) {
  //   console.log(this.cartService)
  //   this.cartService.addToCart(item)
  //   console.log(item)
  //   console.log(this.cartService)
  // }
  // filterProduct(category: string ){
  //   this.filterCategory =this.productList.filter((el:any)=>{
  //     if (el.category === category || category === ''){
  //       return el;
  //     }
  //   })
  // }
}
