import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  //setData in storage
  setData(first_name: string, last_name: string, email: any, token: any, img:string) {
    window.localStorage.setItem("f_name", first_name),
      window.localStorage.setItem("l_name", last_name),
      window.localStorage.setItem("email", email),
      window.localStorage.setItem("img",img),
      window.localStorage.setItem('token', token)
  }

  //getdata from storage
  getData() {
    const savedData: any[] = [];
    let data = {
      first_name: window.localStorage.getItem('f_name'),
      last_name: window.localStorage.getItem('l_name'),
      email: window.localStorage.getItem('email'),
      proImg : window.localStorage.getItem("img")
    };
    savedData.push(data);
    return savedData;
  }

  //get token
  getToken() {
    return window.localStorage.getItem('token');
  }

  //get destroy
  getDestroy() {
    return window.localStorage.clear();
  }


}
