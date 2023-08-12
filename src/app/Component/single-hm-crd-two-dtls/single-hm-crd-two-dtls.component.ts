import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Service/products.service';

@Component({
  selector: 'app-single-hm-crd-two-dtls',
  templateUrl: './single-hm-crd-two-dtls.component.html',
  styleUrls: ['./single-hm-crd-two-dtls.component.scss']
})
export class SingleHmCrdTwoDtlsComponent implements OnInit {
  colId !: any;
  colProductsTwo !: any;

  constructor(private productService: ProductsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.colId = param.get('twoid');
      console.log("The twoId is : ", this.colId);

      this.colProductsTwo = this.productService.homeCardTwo.filter((pr: any) => pr.ctid == this.colId);
      console.log("The colProductsTwo are : ", this.colProductsTwo);


    })
  }

}
