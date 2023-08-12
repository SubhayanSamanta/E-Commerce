import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Service/products.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss']
})
export class AllProductComponent implements OnInit {
  colAllProduct !: any;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
   this.colAllProduct = this.productService.products;
  }

}
