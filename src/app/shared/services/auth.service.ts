import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUrl = environment['apiBaseUrl'];
  userInfo:any;  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 }
  constructor(private http:HttpClient,private router: Router) { }
  
  login(model:any)
  {
    return this.http.post(this.authUrl+'login',model).pipe(
      map((response:any) => {
        const result = response;
        if(result.status=="Success")
        {
          console.log(result.data.user_name);
          localStorage.setItem('token',result.token);
          localStorage.setItem('userdata',result.data);
          localStorage.setItem('username',result.data.user_name);
        }
        else{
          console.log(result);
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
    localStorage.removeItem('token');
  }
  LogOut()
  {
    this.clearData();
    this.router.navigate(['/']);
  }
}
