import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, tap, timeout } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { postWorkPayload } from '../models/postWorkPayload';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }

  postWork(payload:postWorkPayload) {
    return this._http.post<postWorkPayload>(environment.baseUrl+'user_job_history', payload, {observe: 'response'}).pipe(timeout(5000),

      catchError(this.handleError)
    );

  }
  getWorkHistory(email:String) {
    return this._http.get<any>(environment.baseUrl+"user_job_history?email_id="+email).pipe(timeout(5000),

      catchError(this.handleError)
    );

  }
  private handleError(httpError: HttpErrorResponse) {
    return throwError("An unknown Error Occured");
  }
}
