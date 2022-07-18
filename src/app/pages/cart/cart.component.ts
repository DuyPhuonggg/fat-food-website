import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/_service/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(private auth: AuthService) {}

  getCartDetails: any = [];
  total: number = 0;
  cartNumber: number = 0;

  ngOnInit() {
    this.cartDetails();
    this.totalCart();
  }

  cartDetails() {
    if (localStorage.getItem('localCart')) {
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart')!);
      console.log(this.getCartDetails);
    }
  }

  decQnt(id: number, qnt: any) {
    for (let i = 0; i < this.getCartDetails.length; i++) {
      if (this.getCartDetails[i].id === id) {
        if (qnt != 1) this.getCartDetails[i].qnt = parseInt(qnt) - 1;
      }
    }
    localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
    this.totalCart();
  }

  incQnt(id: number, qnt: any) {
    for (let i = 0; i < this.getCartDetails.length; i++) {
      if (this.getCartDetails[i].id === id) {
        this.getCartDetails[i].qnt = parseInt(qnt) + 1;
      }
    }
    localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
    this.totalCart();
  }

  totalCart() {
    if (localStorage.getItem('localCart')) {
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart')!);
      this.total = this.getCartDetails.reduce((acc: any, val: any) => {
        return acc + val.foodPrice * val.qnt;
      }, 0);
    }
  }

  removeSingleProduct(id: number) {
    if (localStorage.getItem('localCart')) {
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart')!);
      for (let i = 0; i < this.getCartDetails.length; i++) {
        if (this.getCartDetails[i].id === id) {
          this.getCartDetails.splice(i, 1);
          localStorage.setItem(
            'localCart',
            JSON.stringify(this.getCartDetails)
          );
          this.cartDetails();
          this.totalCart();
          this.cartNumberFunc();
        }
      }
    }
  }

  removeAll() {
    localStorage.removeItem('localCart');
    this.total = 0;
    this.cartNumber = 0;
    this.getCartDetails = [];
    this.auth.cartSubject.next(this.cartNumber);
  }

  cartNumberFunc() {
    var cartValue = JSON.parse(localStorage.getItem('localCart')!);
    this.cartNumber = cartValue.length;
    this.auth.cartSubject.next(this.cartNumber);
  }
}
