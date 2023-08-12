import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Service/authentication.service';
import { StorageService } from 'src/app/Service/storage.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  colApiRes !: any;
  imgPath !: any;

  baseURL: string = "https://wtsacademy.dedicateddevelopers.us/";

  folderPath: string = "uploads/user/profile_pic/";

  constructor(private authenticationService: AuthenticationService, private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {
    this.authenticationService.profileMethod().subscribe((response) => {
      console.log("The profileApiResponse is : ", response);
      this.colApiRes = response;

      this.imgPath = this.baseURL + this.folderPath + this.colApiRes.data.profile_pic;
      // console.log(this.colApiRes);
      // console.log(this.imgPath);
      
      

    })
  }

  toLogOut() {
    this.storageService.getDestroy();
    alert("Logged Out Succesfully.");
    this.router.navigateByUrl('/sign-in');
  }


}
