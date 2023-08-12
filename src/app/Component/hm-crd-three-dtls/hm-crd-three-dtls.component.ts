import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Service/products.service';

@Component({
  selector: 'app-hm-crd-three-dtls',
  templateUrl: './hm-crd-three-dtls.component.html',
  styleUrls: ['./hm-crd-three-dtls.component.scss']
})
export class HmCrdThreeDtlsComponent implements OnInit{
colProductsThree !: any;

constructor(private productService: ProductsService){}

ngOnInit(): void {
  this.colProductsThree = this.productService.homeCardThree;
}

}
