import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Service/products.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/Service/cart.service';

@Component({
  selector: 'app-single-ptsub',
  templateUrl: './single-ptsub.component.html',
  styleUrls: ['./single-ptsub.component.scss']
})
export class SinglePtsubComponent implements OnInit {
  ptSubId !: any;
  singlePtsubId!: any;
  ptSubProd !: any;
  singlePtProd !: any;

  constructor(private productService: ProductsService, private activatedRoute: ActivatedRoute, private crt: CartService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.ptSubId = param.get('id')
      console.log("The ptSubId is : ", this.ptSubId);

      this.singlePtsubId = param.get('sid')
      console.log("The singleptsubId is : ", this.singlePtsubId);


      this.ptSubProd = this.productService.productTwo.find((data: any) => data.ptid == this.ptSubId);

      this.singlePtProd = this.ptSubProd.pt_sub.find((data: any) => data.ptsid == this.singlePtsubId);

      console.log("The singlePtProd is : ", this.singlePtProd);


    })
  }

  add_cart(prod: any) {
    this.crt.AddToCart(prod);
  }
}


