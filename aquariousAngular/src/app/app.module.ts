import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ApiserviceService } from './apiservice.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HerosectionComponent } from './herosection/herosection.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http';
import { ProductcategoryComponent } from './productcategory/productcategory.component';
import { ProductlistingComponent } from './productlisting/productlisting.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { ListingSidebarComponent } from './listing-sidebar/listing-sidebar.component';
import { OneProductComponent } from './one-product/one-product.component';
import { OneProductTopBarComponent } from './one-product-top-bar/one-product-top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HerosectionComponent,
    HomepageComponent,
    ProductcategoryComponent,
    ProductlistingComponent,
    TopbarComponent,
    FooterComponent,
    ListingSidebarComponent,
    OneProductComponent,
    OneProductTopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    CarouselModule,
    HttpClientModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
