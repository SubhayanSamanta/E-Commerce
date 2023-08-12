import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItem: {
    ptsid: number,
    ptstitle: string,
    ptspar1: string,
    ptspar2: string,
    ptspar3: string,
    ptsprice: number,
    ptsimg: string,
    quantity: number,
    offerPrice: number,
    totalPrice: number,
    regMail: string
  }[] = [];

  constructor(private storage : StorageService) { }

  AddToCart(product: any) {
    // console.log("Product to add in cart: ",product);

    let cartItemsss = this.cartItem;
    // console.log("Length of cart array:",cartItemsss.length);
    let regMail = this.storage.getData()[0].email;
    // console.log(regMail);
    


    if (cartItemsss.length > 0) {
      let p = cartItemsss.findIndex((prod) => prod.ptsid === product.ptsid)
      // console.log("Index:", p);

      if (p !== -1) {
        let data: any = cartItemsss.find((prod) => prod.ptsid === product.ptsid);

        let cart_prod = {
          ...data,
          quantity: data.quantity + 1,
          offerPrice: product.ptsprice * 0.8,
          totalPrice: (product.ptsprice *0.8) * (data.quantity + 1),
          regMail
        }

        cartItemsss.splice(p, 1, cart_prod)
        console.log("After pushing the item: ", this.cartItem);
      }
      else {
        let cart_prod = {
          ...product,
          quantity: 1,
          offerPrice: product.ptsprice * 0.8,
          totalPrice: product.ptsprice*0.8,
          regMail
        }

        this.cartItem.push(cart_prod);
        console.log("After pushing the item: ", this.cartItem);
      }

    }
    else {
      let cart_prod = {
        ...product,
        quantity: 1,
        offerPrice: product.ptsprice * 0.8,
        totalPrice: product.ptsprice * 0.8,
        regMail
      }

      this.cartItem.push(cart_prod);
      console.log("After pushing the item: ", this.cartItem);
    }
  }
}
