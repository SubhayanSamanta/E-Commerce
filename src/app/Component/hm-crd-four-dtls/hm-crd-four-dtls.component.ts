import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Service/products.service';

@Component({
  selector: 'app-hm-crd-four-dtls',
  templateUrl: './hm-crd-four-dtls.component.html',
  styleUrls: ['./hm-crd-four-dtls.component.scss']
})
export class HmCrdFourDtlsComponent implements OnInit {
  colProductsFour: any;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.colProductsFour = this.productService.homeCardFour;
  }

}
