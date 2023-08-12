import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Service/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-all-product',
  templateUrl: './single-all-product.component.html',
  styleUrls: ['./single-all-product.component.scss']
})
export class SingleAllProductComponent implements OnInit {
  colId !: any;
  colSingleProd !: any;

  constructor(private productService: ProductsService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.colId = param.get('sapid');
      console.log("The collected sapid is : ", this.colId);

      this.colSingleProd = this.productService.products.filter((p: any) => p.id == this.colId);
      console.log("The colSingleProd is : ", this.colSingleProd);


    })
  }

  navigate() {
    this.router.navigateByUrl('/address');
  }

}
