import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

import { HomeComponent } from './_layout/home/home.component';
import { DrinkComponent } from './_layout/menu/drink/drink.component';
import { FoodComponent } from './_layout/menu/food/food.component';
import { FruitComponent } from './_layout/menu/fruit/fruit.component';
import { MenuComponent } from './_layout/menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[
        {
            path:'home',
            component: HomeComponent,
        },
        {
            path: 'menu',
            children: [
              {
                path: 'food',
                component: FoodComponent,
              },
              {
                path: 'drink',
                component: DrinkComponent,
              },
              {
                path: 'fruit',
                component: FruitComponent,
              },
              {
                path: '',
                component: MenuComponent,
              },
            ],
          },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
