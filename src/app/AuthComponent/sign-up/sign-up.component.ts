import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Service/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpData !: FormGroup;
  colSignUpData !: any;
  selectedImg !: File;
  apiRes !: any;

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  onFileSelection(e: any) {
    this.selectedImg = e?.target.files[0];
    console.log("The rewsponse for selectedImg is : ", this.selectedImg);
  }

  ngOnInit(): void {
    this.signUpData = new FormGroup({
      first_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      last_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.pattern("^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,15}$")]),
      password: new FormControl('', [Validators.required, Validators.pattern("^([a-z0-9A-Z.-]+)@([a-z]{2,15}).([a-z.]{2,20})$")])
    })
  }


  submitSignUpData() {
    console.log("The submitted signUpData are : ", this.signUpData.value);
    this.colSignUpData = this.signUpData.value;

    const formData: FormData = new FormData();
    formData.append("first_name", this.colSignUpData.first_name),
      formData.append("last_name", this.colSignUpData.last_name),
      formData.append("email", this.colSignUpData.email),
      formData.append("password", this.colSignUpData.password),
      formData.append("profile_pic", this.selectedImg, this.selectedImg.name)

    this.authenticationService.signUpMethod(formData).subscribe((res) => {
      console.log("The signUpMethod res is : ", res);
      this.apiRes = res;
      if (this.apiRes.status == 200) {
        alert(this.apiRes.message);
        this.router.navigateByUrl('/sign-in');
      }
      else {
        alert(this.apiRes.message);
      }
    })

  }

}
