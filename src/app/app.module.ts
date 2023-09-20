import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TopDealsComponent } from './component/top-deals/top-deals.component'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MedicineHomeComponent } from './component/medicine-home/medicine-home.component';
import { ViewProductDetailsCategoryComponent } from './component/view-product-details-category/view-product-details-category.component';
import { ViewProductDetailsComponent } from './component/view-product-details/view-product-details.component';
import { LoginModule } from './login/login.module';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    MedicineHomeComponent,
    TopDealsComponent,
    MedicineHomeComponent,
    ViewProductDetailsComponent,
    ViewProductDetailsCategoryComponent,
    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    HttpClientModule,
    LoginModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
