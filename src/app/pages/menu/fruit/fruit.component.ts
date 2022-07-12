import { Component, OnInit } from '@angular/core';
import { OrderDetailService } from 'src/app/services/order-detail.service';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.scss']
})
export class FruitComponent implements OnInit {

  constructor(private service: OrderDetailService) { }

  fruitData:any;
  ngOnInit(): void {
    this.fruitData = this.service.foodDetails.filter(v => v.type === 'fruit')
  }

}
