import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Service/products.service';

@Component({
  selector: 'app-single-hm-crd-one-dtls',
  templateUrl: './single-hm-crd-one-dtls.component.html',
  styleUrls: ['./single-hm-crd-one-dtls.component.scss']
})
export class SingleHmCrdOneDtlsComponent implements OnInit {
  colId !: any;
  colProductCardOne !:any;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.colId = param.get('oneid');
      console.log("The single card one id is : ", this.colId);

      this.colProductCardOne = this.productService.homeCardOne.filter((one: any) =>one.coid == this.colId)
      console.log("The singleColProduscts are :" ,this.colProductCardOne);
    })
  }

}
