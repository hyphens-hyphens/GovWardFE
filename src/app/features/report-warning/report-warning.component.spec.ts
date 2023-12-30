import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportWarningComponent } from './report-warning.component';

describe('ReportWarningComponent', () => {
  let component: ReportWarningComponent;
  let fixture: ComponentFixture<ReportWarningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportWarningComponent]
    });
    fixture = TestBed.createComponent(ReportWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
