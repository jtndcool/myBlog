import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { signupPayload } from '../../models/signupPayload';
import { AuthService } from '../../services/auth.service';
import { HttpService } from '../../services/http.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  name:String;
  email:String;
  password:String;
  registerPayload:signupPayload;
  isLoading:boolean = false;
  constructor(private _httpService:HttpService, private _auth:AuthService, private _route:Router, private _notification:NotificationService) { }

  ngOnInit(){
    if(!!JSON.parse(localStorage.getItem('user'))) {
      this._route.navigate(['/home']);
    }
  }

  onSubmit(form:NgForm) {
    this.registerPayload = form.value;
    console.log("----------------", this.registerPayload);

    
    let signupObs: Observable<any>;
    signupObs = this._auth.signUp(this.registerPayload);
    this.isLoading=true;
    signupObs.subscribe(
      data=>{
        if(data) {
          console.log("data is", data);
          this._notification.showSuccess("Successfully Registered now pls login", "SUCCESS");
          this._route.navigate(['/login']);
          this.isLoading=false;
        }
        
        
      },
      errorResp=>{
        this._notification.showError(errorResp, "FAILURE");
        console.log(errorResp);
        this.isLoading=false;
      }
    )
  }

  login() {
    this._route.navigate(['/login']);
  }
}
