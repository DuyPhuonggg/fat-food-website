import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/_layout/about/about.component';
import { HomeComponent } from './pages/_layout/home/home.component';
import { MenuComponent } from './pages/_layout/menu/menu.component';
import { ContactComponent } from './pages/_layout/contact/contact.component';
import { DrinkComponent } from './pages/_layout/menu/drink/drink.component';
import { FoodComponent } from './pages/_layout/menu/food/food.component';
import { FruitComponent } from './pages/_layout/menu/fruit/fruit.component';
import { HelpsComponent } from './pages/_layout/helps/helps.component';
import { CartComponent } from './pages/_layout/cart/cart.component';
import { ModalComponent } from './pages/modal/modal.component';
import { OrderPageComponent } from './pages/_layout/order-page/order-page.component';
import { AuthGuard } from './modules/auth/_service/auth.guard';
import { LayoutModule } from './pages/layout.module';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  // {
  //   path: 'home',
  //   canActivate: [AuthGuard],
  //   component: LayoutModule,
  // },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/layout.module').then((m) => m.LayoutModule),
  },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'helps', component: HelpsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order-food/:id', component: OrderPageComponent },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
