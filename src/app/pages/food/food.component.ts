import { Component, OnInit } from '@angular/core';
import { OrderDetailService } from 'src/app/services/order-detail.service';

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
  constructor(private service: OrderDetailService) { }

  foodData:any;
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
}
 
