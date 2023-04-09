import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent { 
  public products : any = [];
  public grandTotal !:any;
  constructor(private cartService : CartService) { }

  ngOnInit(): void { 
    console.log("prodct lgth",this.products.length)
    this.cartService.getProducts()//result come
    .subscribe(res=>{
      this.products = res;//array hai
      this.grandTotal = this.cartService.getTotalPrice(); //total price are calculated in cart service
    })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);//cart service
  }
  emptycart(){
    this.cartService.removeAllCart();//cart service
  }
}
