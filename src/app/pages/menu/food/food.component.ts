import { Component, OnInit } from '@angular/core';
import { OrderDetailService } from 'src/app/services/order-detail.service';
import { AuthService } from 'src/app/modules/auth/auth.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

  sortByIdHigher: boolean  = false;
  sortByIdLower: boolean = false;
  sortByPriceHigher: boolean = false;
  sortByPriceLower: boolean = false;
  none: boolean = false;

  foodData: any;
  constructor(
    private service: OrderDetailService,
    private auth: AuthService
    ) {}

  ngOnInit() {
    this.foodData = this.service.foodDetails.filter(v => v.type === 'food');

  }
  // Status selected Id Product
  statusSelectedByIdProduct(status:boolean){
    this.sortByPriceLower = false;
    this.sortByPriceHigher = false;

    if(status === this.sortByIdLower) {
      this.sortByIdLower = false;
      this.sortByIdHigher = true;
    } else {
      this.sortByIdLower = true;
      this.sortByIdHigher = false;
    }
  }
  // Status selected Prices
  statusSelectedByPrices(status:boolean){
    this.sortByIdLower = false;
    this.sortByIdHigher = false;

    if(status === this.sortByPriceLower) {
      this.sortByPriceLower = false;
      this.sortByPriceHigher = true;
    } else {
      this.sortByPriceLower = true;
      this.sortByPriceHigher = false;
    }
  }
  // Filter by Id 
  sortByIdProduct(){
    // Low to High
    console.log(`ID: low `,this.sortByIdHigher);
    if (this.sortByIdHigher) {
      this.foodData = this.foodData.sort((v1: any, v2: any) => v1.id - v2.id);
    }
    // High to Low
    console.log(`ID: high `,this.sortByIdLower);
    if (this.sortByIdLower) {
      this.foodData = this.foodData.sort((v1: any, v2: any) => v2.id - v1.id);
    }
    console.log(`Prices: low `,this.sortByPriceHigher);
    console.log(`Prices: high`,this.sortByPriceLower);
  }

  // Filter by Prices
  sortByPrices(){
    console.log(`ID: low `,this.sortByIdHigher);
    console.log(`ID: high `,this.sortByIdLower);
    // Low to High
    console.log(`Prices: low `,this.sortByPriceHigher);
    if (this.sortByPriceHigher) {
      this.foodData = this.foodData.sort((v1: any, v2: any) => v1.foodPrice - v2.foodPrice);
    }
    // High to Low
    console.log(`Prices: high `,this.sortByPriceLower);
    if (this.sortByPriceLower) {
      this.foodData = this.foodData.sort((v1: any, v2: any) => v2.foodPrice - v1.foodPrice);
    }
  }

  // None-filter
  noneSort(){
    console.log('none')
    this.foodData = this.service.foodDetails.filter(v => v.type === 'food');
  }

  inc(fd:any) {
    // let increaseValue:any = document.getElementById("number");
    
    // let value:number = parseInt(increaseValue.value, 10);
    
    // value = isNaN(value) ? 0 : value;
    // if(value<99 && value !== fd.qnt ) {
    //   fd.qnt = value;
    // }
    // else{
    //   fd.qnt+=1;
    //   value=fd.qnt;
    // }
    // increaseValue.value = value;
    fd.qnt+=1;
  }

  dec(fd:any) {
    // let decreaseValue:any = document.getElementById("number");
    
    // var value:number = parseInt(decreaseValue.value, 10);
    
    // value = isNaN(value) ? 0 : value;
    // if(value>0 && value !== fd.qnt ) {
    //   fd.qnt = value;
    // }
    // else{
    //   fd.qnt-=1;
    //   value=fd.qnt;
    // }
    // decreaseValue.value = value;
    if(fd.qnt != 1){
      fd.qnt-=1;
    }
   
  }

  itemsCart:any = [];
  addCart(category:any){
    console.log(category);
    let cartDataNull = localStorage.getItem('localCart');
    if(cartDataNull == null ){
      let storeDataGet:any = [];
      storeDataGet.push(category);
      localStorage.setItem('localCart',JSON.stringify(storeDataGet));
    } else {
      var id = category.id;
      let index:number = -1;
      this.itemsCart = JSON.parse(localStorage.getItem('localCart')!);
      console.log(this.itemsCart);
      for( let i=0; i<this.itemsCart.length; i++){
        if(id == this.itemsCart[i].id){
          this.itemsCart[i].qnt = category.qnt;
         
          index = i;
          break;
        }
      }
      if(index == -1){
        this.itemsCart.push(category);
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
      } else {
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
      }
    }
    this.cartNumberFunc();
  }

  cartNumber:number = 0;

  cartNumberFunc(){
    var cartValue = JSON.parse(localStorage.getItem('localCart')!);
    this.cartNumber = cartValue.length;
    this.auth.cartSubject.next(this.cartNumber);
  }
}

 
