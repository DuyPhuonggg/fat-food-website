import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/_service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private auth: AuthService) {
    this.auth.cartSubject.subscribe((data) => {
      this.cartItem = data;
    })
  }

  ngOnInit(): void {}

  cartItem: number = 0;

  cartItemFunc() {
    if (localStorage.getItem('localCart') != null) {
      var cartCount = JSON.parse(localStorage.getItem('localCart')!);
      this.cartItem = cartCount.length;
    }
  }
}
