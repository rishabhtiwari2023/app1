import { Injectable } from '@angular/core';
// import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  // public cartItemList: any = []
  // public productList = new BehaviorSubject<any>([]);
  // public search = new BehaviorSubject<string>("");
  // constructor() { }
  // getProducts() {
  //   return this.productList.asObservable();
  // } setProduct(product: any) {
  //   this.cartItemList.push(...product);
  //   this.productList.next(product);
  // }
  // addtoCart(product: any) {
  //   this.cartItemList.push(product)
  //   this.productList.next(this.cartItemList);
  //   this.getTotalPrice();
  // }
  // getTotalPrice() {
  //   let grandTotal = 0;
  //   this.cartItemList.map((a: any) => {
  //     grandTotal += a.total;
  //   })
  // }
  // removeCartItem(product: any){
  //   this.cartItemList.map((a:any, index:any)=>{
  //     if(product.id=== a.id){
  //       this.cartItemList.splice(index,1);
  //     }
  //   })
  //   this.productList.next(this.cartItemList);
  // }
  // removeAllCart(){
  //   this.cartItemList = []
  //   this.productList.next(this.cartItemList);
  // }

  public cartItemList : any =[]// isme hi value ayegi aur save hogi
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product : any){
    this.cartItemList.push(product);// itm are add to cart cartItem me push data
    this.productList.next(this.cartItemList);
    this.getTotalPrice();// after add item its time to get total price
    console.log(this.cartItemList)
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;//total price li value add kar to 
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);//remove the value after search by map functoin
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []//assign null empty rewite the calue
    this.productList.next(this.cartItemList);
  }
  isbuttonpress:any;
  onbuttonpress(){
   this. isbuttonpress=true;
  }
  checkbtn(){return this.isbuttonpress}


}
