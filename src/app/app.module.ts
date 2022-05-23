import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { ChangePasswordComponent } from './Auth/change-password/change-password.component';
import { ProfileComponent } from './component/pages/profile/profile.component';
import { InvoiceComponent } from './component/pages/invoice/invoice.component';
import { ProductsComponent } from './component/products/products.component';
import { WishlistComponent } from './component/pages/wishlist/wishlist.component';
import { CartlistComponent } from './component/pages/cartlist/cartlist.component';
import { ViewComponent } from './component/products/view/view.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { HomeComponent } from './componenet/home/home.component';
import { SummaryComponent } from './component/pages/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ChangePasswordComponent,
    ProfileComponent,
    InvoiceComponent,
    ProductsComponent,
    WishlistComponent,
    CartlistComponent,
    ViewComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    NotFoundComponent,
    HomeComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
