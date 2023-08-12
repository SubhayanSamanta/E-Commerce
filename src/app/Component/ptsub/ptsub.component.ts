import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Service/products.service';

@Component({
  selector: 'app-ptsub',
  templateUrl: './ptsub.component.html',
  styleUrls: ['./ptsub.component.scss']
})
export class PtsubComponent implements OnInit {
  collId !: any;
  colProduct: any[] = [];

  constructor(private productService: ProductsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.collId = params.get('id');
      console.log("The collected id is : ", this.collId);

      this.colProduct = this.productService.productTwo.filter((p: any) => p.ptid == this.collId);
    })
  }

}
