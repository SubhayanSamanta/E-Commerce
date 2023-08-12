import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent {

  constructor(private router: Router) { }

  subData() {
    alert("Your addres is added.");

    // this.router.navigateByUrl('/payment');
  }

  navigate(){
    this.router.navigateByUrl('/payment');
  }

}
