import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Service/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ProductsService]
})
export class HomeComponent implements OnInit {

  productsTwo: any[] = [];

  colHomeCardOne: any[] = [];

  colHomeCardTwo: any[] = [];

  colHomeCardThree: any[] = [];

  colHomeCardFour: any[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {

    this.productsTwo = this.productService.productTwo;

    this.colHomeCardOne = this.productService.homeCardOne;

    this.colHomeCardTwo = this.productService.homeCardTwo;

    this.colHomeCardThree = this.productService.homeCardThree;

    this.colHomeCardFour = this.productService.homeCardFour;
  }

}
