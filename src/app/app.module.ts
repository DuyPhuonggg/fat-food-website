import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/_layout/about/about.component';
import { ContactComponent } from './pages/_layout/contact/contact.component';
import { FoodComponent } from './pages/_layout/menu/food/food.component';
import { DrinkComponent } from './pages/_layout/menu/drink/drink.component';
import { FruitComponent } from './pages/_layout/menu/fruit/fruit.component';
import { HelpsComponent } from './pages/_layout/helps/helps.component';
import { CartComponent } from './pages/_layout/cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './pages/modal/modal.component';
import { OrderPageComponent } from './pages/_layout/order-page/order-page.component';
import { NgxImgZoomModule } from 'ngx-img-zoom';
import { OrderPageImageDirective } from './pages/_layout/order-page/order-page-image.directive';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './modules/auth/_service/auth.service';

@NgModule({
  declarations: [
    AppComponent,
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
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
