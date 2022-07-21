import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from "./layout.component";
import { PagesRoutingModule } from "./page-routing.module";
import { FooterComponent } from "./sharepage/footer/footer.component";
import { NavbarComponent } from "./sharepage/navbar/navbar.component";
import { HomeComponent } from "./_layout/home/home.component";
import { MenuComponent } from "./_layout/menu/menu.component";


@NgModule({
    declarations: [
        FooterComponent,
        NavbarComponent,
        LayoutComponent,
        HomeComponent,
        MenuComponent,
    ],
    imports:[
        FormsModule,
        PagesRoutingModule,
        CommonModule,
    ],
    exports:[],
})

export class LayoutModule {}