import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { postWorkPayload } from '../../models/postWorkPayload';
import { HttpService } from '../../services/http.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  company_name:String;
  title:String;
  start_date:String;
  location:String;
  description:String
  email_id:String
  workHistoryArray:postWorkPayload[]=[];
  isLoading:boolean = false;
 
  constructor(private _httpService:HttpService, private _notification:NotificationService) { }

  ngOnInit(): void {
   this.getWorkHistory();
  }

  getWorkHistory() {

    let obsWorkHistory: Observable<any>;
    obsWorkHistory = this._httpService.getWorkHistory(JSON.parse(localStorage.getItem('user')));
    this.isLoading=true;
    obsWorkHistory.subscribe(
      data=>{
        if(data) {
          console.log("data is", data);
          this.workHistoryArray = data.past_jobs;
          this.isLoading=false;
        }
        
        
      },
      errorResp=>{
        console.log(errorResp);
        this.isLoading=false;
      }
    )
  }

  onSubmit(form:NgForm){

    if(!form.valid) {
        return;
    }
    let obsPostWork: Observable<any>;
    form.value["email_id"]=JSON.parse(localStorage.getItem('user'));
    obsPostWork = this._httpService.postWork(form.value);
    this.isLoading=true;
    obsPostWork.subscribe(
      data=>{
        if(data) {
          console.log("data is", data.status);
          this._notification.showSuccess("Work History added successfully","SUCCESS");
          this.isLoading=false;
          form.reset();
          this.getWorkHistory();
        }
        
        
      },
      errorResp=>{
        console.log(errorResp);
        this._notification.showError("Something went wrong","FAILURE");
        this.isLoading=false;
      }
    )
  }


}
