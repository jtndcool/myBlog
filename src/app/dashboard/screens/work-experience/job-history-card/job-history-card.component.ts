import { Component, Input, OnInit } from '@angular/core';
import { postWorkPayload } from 'src/app/dashboard/models/postWorkPayload';

@Component({
  selector: 'app-job-history-card',
  templateUrl: './job-history-card.component.html',
  styleUrls: ['./job-history-card.component.scss']
})
export class JobHistoryCardComponent implements OnInit {

  @Input("work") workHistory:postWorkPayload;
  constructor() { }

  ngOnInit(): void {
  }

}
