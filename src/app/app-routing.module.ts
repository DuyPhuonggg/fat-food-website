import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DrinkComponent } from './pages/menu/drink/drink.component';
import { FoodComponent } from './pages/menu/food/food.component';
import { FruitComponent } from './pages/menu/fruit/fruit.component';
import { HelpsComponent } from './pages/helps/helps.component';
import { CartComponent } from './pages/cart/cart.component';
import { ModalComponent } from './pages/modal/modal.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {
    path: 'menu',
    children: [
    {
      path: 'food',
      component: FoodComponent
    },
    {
      path: 'drink',
      component: DrinkComponent
    },
    {
      path: 'fruit',
      component: FruitComponent
    },
    {
      path:'',
      component:MenuComponent
    }]
  },
  {path:'helps',component:HelpsComponent},
  {path:'cart',component:CartComponent},
  {path:'order-food/:id', component:OrderPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
