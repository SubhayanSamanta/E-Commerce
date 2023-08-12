import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Service/authentication.service';
import { StorageService } from 'src/app/Service/storage.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInData!: FormGroup;
  colSiginData !: any;
  colSigninRespo !: any;

  constructor(private authenticationService: AuthenticationService, private router: Router, private storageService: StorageService) { }

  ngOnInit(): void {
    this.signInData = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern("^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,15}$")]),
      password: new FormControl('', [Validators.required, Validators.pattern("^([a-z0-9A-Z.-]+)@([a-z]{2,15}).([a-z.]{2,20})$")])
    })
  }

  submitSigninData() {
    console.log("The sigInData are : ", this.signInData.value);
    this.colSiginData = this.signInData.value;

    this.authenticationService.signInMethod(this.colSiginData).subscribe((respo) => {
      console.log("The signin respo is : ", respo);
      this.colSigninRespo = respo;

      if (this.colSigninRespo.status == 200) {
        alert(this.colSigninRespo.message);
        this.router.navigateByUrl('/profile');
      }
      else {
        alert(this.colSigninRespo.message);
      }
      this.storageService.setData(
        this.colSigninRespo.data.first_name,
        this.colSigninRespo.data.last_name,
        this.colSigninRespo.data.email,
        this.colSigninRespo.token,
        this.colSigninRespo.data.profile_pic
      );

    })
  }

}
