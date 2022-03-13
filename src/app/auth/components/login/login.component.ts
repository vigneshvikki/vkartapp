import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage!: any;
  // formErrors = {'email':'','password':''};
  formErrors = new Map<string, string>();

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    this.formErrors = new Map<string, string>();
    const loginObserver = {
        next: (x: any)  => {console.log('user Logged in')},
        error: (err: any) => {console.log('unable to login');
        console.log(err.status);
        if(err.status==422)
        {
          var jsonMsg = JSON.parse(err.error.message);
          // console.log(jsonMsg);
          // console.log(typeof jsonMsg);
          // console.log(typeof err.error);
  
          
           for( var key in jsonMsg)  {
                // console.log(jsonMsg[key]);
                 this.formErrors.set(key, jsonMsg[key]);
           }
        }
        else
        {
          this.errorMessage = err.error.message;
        }
        
      }
    }
    this.authService.login(f.value).subscribe(loginObserver);

  }

}
