import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FoodComponent } from './pages/menu/food/food.component';
import { DrinkComponent } from './pages/menu/drink/drink.component';
import { FruitComponent } from './pages/menu/fruit/fruit.component';
import { HelpsComponent } from './pages/helps/helps.component';
import { CartComponent } from './pages/cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './pages/modal/modal.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { NgxImgZoomModule } from 'ngx-img-zoom';
import { OrderPageImageDirective } from './pages/order-page/order-page-image.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    FoodComponent,
    DrinkComponent,
    FruitComponent,
    HelpsComponent,
    CartComponent,
    ModalComponent,
    OrderPageComponent,
    OrderPageImageDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxImgZoomModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
