import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Service/products.service';

@Component({
  selector: 'app-single-hm-crd-four-dtls',
  templateUrl: './single-hm-crd-four-dtls.component.html',
  styleUrls: ['./single-hm-crd-four-dtls.component.scss']
})
export class SingleHmCrdFourDtlsComponent implements OnInit {
  colId !: any;
  colProductsFour !: any;

  constructor(private productService: ProductsService, private activatedRoutee: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoutee.paramMap.subscribe((par) => {
      this.colId = par.get('fourid');
      console.log("The collected fourId is : ", this.colId);

      this.colProductsFour = this.productService.homeCardFour.filter((hmf: any) => hmf.cfid == this.colId);
      console.log("The collcted foProd is : ", this.colProductsFour);

    })
  }

}
