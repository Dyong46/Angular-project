import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DanhsachsanphamComponent } from './danhsachsanpham/danhsachsanpham.component';
import { ChitietsanphamComponent } from './chitietsanpham/chitietsanpham.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DangkyComponent } from './dangky/dangky.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    CarouselComponent,
    DanhsachsanphamComponent,
    ChitietsanphamComponent,
    LienheComponent,
    NotfoundComponent,
    DangkyComponent,
    DangnhapComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
