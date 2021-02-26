import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { catchError, tap, timeout } from 'rxjs/operators';
import { postWorkPayload } from '../models/postWorkPayload';
import { signupPayload } from '../models/signupPayload';
import { User } from '../models/User';
import { loginPayload } from '../models/loginPayload';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient) { }

  user = new BehaviorSubject<User>(null);

  login(payload:loginPayload) {
    return this._http.get<any>('../../../assets/data.json').pipe(timeout(5000),

      catchError(this.handleError)
    );

  }
  signUp(payload:signupPayload) {
    return this._http.post<any>(environment.baseUrl+"sign_up", payload, {observe: 'response'}).pipe(timeout(5000),

      catchError(this.handleError)
    );

  }
  private handleError(httpError: HttpErrorResponse) {
    return throwError("An unknown Error Occured");
  }
  autoLogin() {
  // //  const userInfo = JSON.parse(localStorage.getItem('user'));
  //   if(!userInfo) {
  //     return;
  //   }
  //   const user = new User(userInfo);
  //   this.user.next(user);
  }
}
