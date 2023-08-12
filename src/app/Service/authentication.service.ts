import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Authentication, SignIn } from '../Class/authentication';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  //sign-up url
  signUpUrl: string = "https://wtsacademy.dedicateddevelopers.us/api/user/signup";

  //sign-in url
  signInUrl: string = "https://wtsacademy.dedicateddevelopers.us/api/user/signin";

  //profile api
  profileApi: string = "https://wtsacademy.dedicateddevelopers.us/api/user/profile-details";

  constructor(private httpClient: HttpClient, private storageService: StorageService) { }


  //signup method
  signUpMethod(data: any): Observable<Authentication[]> {
    return this.httpClient.post<Authentication[]>(this.signUpUrl, data);
  }

  //signin method
  signInMethod(data: any): Observable<SignIn[]> {
    return this.httpClient.post<SignIn[]>(this.signInUrl, data);
  }

  //profile method
  profileMethod(): Observable<Authentication[]> {
    return this.httpClient.get<Authentication[]>(this.profileApi);

  }


}
