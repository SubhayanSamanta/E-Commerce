import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { HomeComponent } from './Component/home/home.component';
import { FooterComponent } from './Component/footer/footer.component';
import { ProductsService } from './Service/products.service';
import { PercentagePipe } from './Pipes/percentage.pipe';
import { PtsubComponent } from './Component/ptsub/ptsub.component';
import { AllProductComponent } from './Component/all-product/all-product.component';
import { SingleAllProductComponent } from './Component/single-all-product/single-all-product.component';
import { FourtyPercentPipe } from './Pipes/fourty-percent.pipe';
import { SinglePtsubComponent } from './Component/single-ptsub/single-ptsub.component';
import { SignUpComponent } from './AuthComponent/sign-up/sign-up.component';
import { SignInComponent } from './AuthComponent/sign-in/sign-in.component';
import { ProfileComponent } from './AuthComponent/profile/profile.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PnfComponent } from './Component/pnf/pnf.component';
import { AddressComponent } from './AuthComponent/address/address.component';
import { SearchedProductComponent } from './Component/searched-product/searched-product.component';
import { InterceptorService } from './Service/interceptor.service';
import { HmCrdOneDtlsComponent } from './Component/hm-crd-one-dtls/hm-crd-one-dtls.component';
import { HmCrdTwoDtlsComponent } from './Component/hm-crd-two-dtls/hm-crd-two-dtls.component';
import { HmCrdThreeDtlsComponent } from './Component/hm-crd-three-dtls/hm-crd-three-dtls.component';
import { HmCrdFourDtlsComponent } from './Component/hm-crd-four-dtls/hm-crd-four-dtls.component';
import { SingleHmCrdOneDtlsComponent } from './Component/single-hm-crd-one-dtls/single-hm-crd-one-dtls.component';
import { SingleHmCrdTwoDtlsComponent } from './Component/single-hm-crd-two-dtls/single-hm-crd-two-dtls.component';
import { SingleHmCrdThreeDtlsComponent } from './Component/single-hm-crd-three-dtls/single-hm-crd-three-dtls.component';
import { SingleHmCrdFourDtlsComponent } from './Component/single-hm-crd-four-dtls/single-hm-crd-four-dtls.component';
import { AboutUsComponent } from './Component/about-us/about-us.component';
import { ContactUsComponent } from './Component/contact-us/contact-us.component';
import { PaymentComponent } from './Component/payment/payment.component';
import { OrdConfirmComponent } from './Component/ord-confirm/ord-confirm.component';
import { CartComponent } from './Component/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    PercentagePipe,
    PtsubComponent,
    AllProductComponent,
    SingleAllProductComponent,
    FourtyPercentPipe,
    SinglePtsubComponent,
    SignUpComponent,
    SignInComponent,
    ProfileComponent,
    PnfComponent,
    AddressComponent,
    SearchedProductComponent,
    HmCrdOneDtlsComponent,
    HmCrdTwoDtlsComponent,
    HmCrdThreeDtlsComponent,
    HmCrdFourDtlsComponent,
    SingleHmCrdOneDtlsComponent,
    SingleHmCrdTwoDtlsComponent,
    SingleHmCrdThreeDtlsComponent,
    SingleHmCrdFourDtlsComponent,
    AboutUsComponent,
    ContactUsComponent,
    PaymentComponent,
    OrdConfirmComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, ReactiveFormsModule
  ],
  providers: [ProductsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
