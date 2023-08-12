import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Service/products.service';

@Component({
  selector: 'app-hm-crd-one-dtls',
  templateUrl: './hm-crd-one-dtls.component.html',
  styleUrls: ['./hm-crd-one-dtls.component.scss']
})
export class HmCrdOneDtlsComponent implements OnInit {
  colProductsOne !: any;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.colProductsOne = this.productService.homeCardOne;
    console.log("The colProductsOne are : ", this.colProductsOne);

  }

}
