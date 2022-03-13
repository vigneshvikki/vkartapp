import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUrl = "http://localhost/shopping/public/api/";
  userInfo:any;  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 }
  constructor(private http:HttpClient) { }
  
  login(model:any)
  {
    return this.http.post(this.authUrl+'login',model).pipe(
      map((response:any) => {
        const result = response;
        if(result.status=="Success")
        {
          console.log(result.data.userdata.name);
          localStorage.setItem('token',result.data.token);
          localStorage.setItem('userdata',result.data.userdata);
          localStorage.setItem('username',result.data.userdata.name);
        }
        else{
          console.log(result.error);
        }

      }
      )
    )
  }
  getUserData()
  {
    this.userInfo = localStorage.getItem('userdata');
    console.log(this.userInfo.email);
  }
  getUserName()
  {
    return localStorage.getItem('username');

  }
  IsLoggedIn()
  {
    const token = localStorage.getItem('token');
    return token;
  }
  clearData() {
    localStorage.clear();
  }
  LogOut()
  {
     localStorage.removeItem('token');
  }
}
