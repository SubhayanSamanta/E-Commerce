import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Service/authentication.service';
import { StorageService } from 'src/app/Service/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  searchData !: FormGroup;
  colSearchData !: any;

  colRespon !: any;
  imgPath !: any;

  token !: any;
  data !: any;
  fname !: any;
  lname!: any;

  baseURL: string = "https://wtsacademy.dedicateddevelopers.us/";

  folderPath: string = "uploads/user/profile_pic/";

  constructor(private authService: AuthenticationService, private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {

    // this.authService.profileMethod().subscribe((respon) => {
    //   console.log("The profile api respon is : ", respon);
    //   this.colRespon = respon;

    //   this.imgPath = this.baseURL + this.folderPath + this.colRespon.data.profile_pic;
    // })

    this.searchData = new FormGroup({
      sdata: new FormControl('')
    })

  }

  subSearchData() {
    // console.log( this.searchData);
    this.colSearchData = this.searchData.value;
    console.log("The subSearchData is : ", this.colSearchData);
    this.router.navigateByUrl(`/searched/${this.colSearchData.sdata}`)
  }

  signOut() {
    this.storageService.getDestroy();
    alert("Loggedout Succesfully.");
    this.router.navigateByUrl('/sign-in');
  }

  loggedIn() {
    this.token = this.storageService.getToken();
    if (this.token) {
      this.data = this.storageService.getData();
      this.fname = this.data[0].first_name;
      this.lname = this.data[0].last_name;

      // if (this.imgPath == null) {
      //   this.authService.profileMethod().subscribe((respon) => {
      //     // console.log("The profile api respon is : ", respon);
      //     this.colRespon = respon;

      //     this.imgPath = this.baseURL + this.folderPath + this.colRespon?.data.profile_pic;
      //     console.log(this.imgPath);

      //   })
      // }

    this.imgPath = this.baseURL + this.folderPath + this.data[0].proImg;

    }
    return this.token;
  }

  navigate() {
    this.router.navigateByUrl("/profile");
  }

}
