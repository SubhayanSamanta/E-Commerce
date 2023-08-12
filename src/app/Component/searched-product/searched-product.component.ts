import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/Service/products.service';

@Component({
  selector: 'app-searched-product',
  templateUrl: './searched-product.component.html',
  styleUrls: ['./searched-product.component.scss']
})
export class SearchedProductComponent implements OnInit {
  colSearchService !: any;
  colValue!: any;

  constructor(private productService: ProductsService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // this.colSearchService = this.productService.searchService;

    // console.log("The colSearchService is : ", this.colSearchService);

    this.activatedRoute.paramMap.subscribe((params) => {
      this.colValue = params.get('value');
      console.log("The value from url : ", this.colValue);

      // this.colSearchService = this.productService.searchService.filter((sr: any) => sr.sname == this.colValue);

      // console.log("The colSearchService is : ", this.colSearchService);
      if (this.colValue == "") {
        this.colSearchService = this.colSearchService;
        console.log("The colSearchService is : ", this.colSearchService);

      }
      else {
        // this.colSearchService = this.productService.searchService.filter((pr: any) => pr.sname== this.colValue);
        // console.log("THe searched peoducts : ", this.colSearchService);
        this.colSearchService=this.productService.products.filter((prod:any)=>prod.pname.toLowerCase().includes(this.colValue.toLowerCase()))
        console.log("Searched products:",this.colSearchService);
        
      }
    })
  }

  navigate(){
    this.router.navigateByUrl('/address');
  }

}
