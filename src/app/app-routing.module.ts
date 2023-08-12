import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { PtsubComponent } from './Component/ptsub/ptsub.component';
import { AllProductComponent } from './Component/all-product/all-product.component';
import { SingleAllProductComponent } from './Component/single-all-product/single-all-product.component';
import { SinglePtsubComponent } from './Component/single-ptsub/single-ptsub.component';
import { SignInComponent } from './AuthComponent/sign-in/sign-in.component';
import { SignUpComponent } from './AuthComponent/sign-up/sign-up.component';
import { ProfileComponent } from './AuthComponent/profile/profile.component';
import { PnfComponent } from './Component/pnf/pnf.component';
import { SearchedProductComponent } from './Component/searched-product/searched-product.component';
import { AuthGuardGuard } from './Guard/auth-guard.guard';
import { AddressComponent } from './AuthComponent/address/address.component';
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

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },

  { path: "home", component: HomeComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "contact-us", component: ContactUsComponent },
  { path:"address", component:AddressComponent },
  { path: "home/home-card-one-dtls", component: HmCrdOneDtlsComponent },
  { path: "home/home-card-one-dtls/single-home-card-one-dtls/:oneid", component: SingleHmCrdOneDtlsComponent },
  { path: "home/home-card-one-dtls/single-home-card-one-dtls/:oneid/address", component: AddressComponent, canActivate: [AuthGuardGuard] },
  { path: "payment", component: PaymentComponent },
  { path: "home/home-card-two-dtls", component: HmCrdTwoDtlsComponent },
  { path: "home/home-card-two-dtls/single-home-card-two-dtls/:twoid", component: SingleHmCrdTwoDtlsComponent },
  { path: "home/home-card-two-dtls/single-home-card-two-dtls/:twoid/address", component: AddressComponent, canActivate: [AuthGuardGuard] },
  { path: "home/home-card-three-dtls", component: HmCrdThreeDtlsComponent },
  { path: "home/home-card-three-dtls/single-home-card-three-dtls/:threeid", component: SingleHmCrdThreeDtlsComponent },
  { path: "home/home-card-three-dtls/single-home-card-three-dtls/:threeid/address", component: AddressComponent, canActivate: [AuthGuardGuard] },
  { path: "home/home-card-four-dtls", component: HmCrdFourDtlsComponent },
  { path: "home/home-card-four-dtls/single-home-card-four-dtls/:fourid", component: SingleHmCrdFourDtlsComponent },
  { path: "home/home-card-four-dtls/single-home-card-four-dtls/:fourid/address", component: AddressComponent, canActivate: [AuthGuardGuard] },
  { path: "all-product", component: AllProductComponent },
  { path: "all-product/single-all-product/:sapid", component: SingleAllProductComponent },
  { path: "home/ptsub/:id", component: PtsubComponent },
  { path: "home/ptsub/:id/single-ptsub/:sid", component: SinglePtsubComponent },
  { path: "sign-up", component: SignUpComponent },
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuardGuard] },
  { path: "sign-in", component: SignInComponent },
  { path: "home/ptsub/:id/single-ptsub/:sid/address", component: AddressComponent, canActivate: [AuthGuardGuard] },
  { path: "searched/:value", component: SearchedProductComponent },
  { path: "order-confirm", component: OrdConfirmComponent },
  { path: "cart", component:CartComponent},
  
  //wild card url
  { path: "**", component: PnfComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
