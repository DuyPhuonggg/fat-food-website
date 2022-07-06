import { Component, OnInit } from '@angular/core';
import { OrderDetailService } from 'src/app/services/order-detail.service';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss']
})
export class DrinkComponent implements OnInit {

  constructor(private service: OrderDetailService) { }

  drinkData:any;
  ngOnInit(): void {
    this.drinkData = this.service.foodDetails.filter(v => v.type === 'drink');
  }
}
