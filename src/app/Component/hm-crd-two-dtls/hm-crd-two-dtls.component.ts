import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Service/products.service';

@Component({
  selector: 'app-hm-crd-two-dtls',
  templateUrl: './hm-crd-two-dtls.component.html',
  styleUrls: ['./hm-crd-two-dtls.component.scss']
})
export class HmCrdTwoDtlsComponent implements OnInit {
  colProductsTwo !: any;

  constructor(private produstService: ProductsService) { }

  ngOnInit(): void {
this.colProductsTwo = this.produstService.homeCardTwo;
  }

}
