import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Service/products.service';


@Component({
  selector: 'app-single-hm-crd-three-dtls',
  templateUrl: './single-hm-crd-three-dtls.component.html',
  styleUrls: ['./single-hm-crd-three-dtls.component.scss']
})
export class SingleHmCrdThreeDtlsComponent implements OnInit {
  colId !: any;
  colProductsThree !: any;

  constructor(private productService: ProductsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.colId = param.get('threeid');
      console.log("The colId is : ", this.colId);

this.colProductsThree= this.productService.homeCardThree.filter((pr:any)=>pr.ctrid == this.colId);

    })
  }

}
