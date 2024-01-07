import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportWarningFormComponent } from './report-warning-form.component';

describe('ReportWarningFormComponent', () => {
    let component: ReportWarningFormComponent;
    let fixture: ComponentFixture<ReportWarningFormComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ReportWarningFormComponent]
        });
        fixture = TestBed.createComponent(ReportWarningFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
