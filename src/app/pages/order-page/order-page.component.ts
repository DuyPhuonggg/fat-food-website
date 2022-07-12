import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, pluck, switchMap } from 'rxjs';
import { OrderDetailService } from 'src/app/services/order-detail.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss'],
})
export class OrderPageComponent implements OnInit {

  
  constructor(
    private readonly service: OrderDetailService,
    // private readonly element: ElementRef,
    private readonly route: ActivatedRoute,
  ) {}

  singleProduct:any;
  // id:number ;
  ngOnInit(): void {
    this.singleProduct = this.route.params.pipe(
      pluck('id'),
      switchMap(id => this.service.getFoodById(id))
    );
    //  this.singleProduct = this.service.foodDetails.find(v => v.id === this.id);
  }

  increaseValue() {
    let increValue:any = document.getElementById("number");
    var value = parseInt(increValue.value, 10);
    value = isNaN(value) ? 0 : value;
    if(value<99) {
      value++;
    }
    increValue.value = value;
    console.log(value);
  }
 
  decreaseValue() {
    let increValue:any = document.getElementById("number");
    var value = parseInt(increValue.value, 10);
    value = isNaN(value) ? 0 : value;
    if(value>0){
      value--;
    }
    increValue.value = value;
    console.log(value)

  }
}
