import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobHistoryCardComponent } from './job-history-card.component';

describe('JobHistoryCardComponent', () => {
  let component: JobHistoryCardComponent;
  let fixture: ComponentFixture<JobHistoryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobHistoryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobHistoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
