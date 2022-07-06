import { Component, OnInit } from '@angular/core';
import { OrderDetailService } from 'src/app/services/order-detail.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss'],
})
export class OrderPageComponent implements OnInit {

  
  constructor(private service: OrderDetailService) {}

  singleProduct:any;
   id:number = 1;
  ngOnInit(): void {  
     this.singleProduct = this.service.foodDetails.find(v => v.id === this.id);
  }



  
  
}
