import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  items!: any;
  gTotal!: number;

  constructor(private crt: CartService, private router:Router) { }

  navigate(){
    this.router.navigateByUrl('/address')
  }

  ngOnInit(): void {
    this.items = this.crt.cartItem;
    console.log("items in the cart: ", this.items);

    this.grand_total();
  }

  clickToRemove(prod: any, index: any) {
    for (let res of this.crt.cartItem) {
      if (res.ptsid == prod.ptsid) {
        this.crt.cartItem.splice(index, 1);
        console.log("After removing ", prod.ptstitle, " from cart list: ", this.crt.cartItem);
      }
    }
  }

  grand_total() {
    this.gTotal = 0;
    for(let i of this.items) {
      this.gTotal += Number(i.totalPrice);
      console.log("Grand Total", this.gTotal);
    }
  }
}
