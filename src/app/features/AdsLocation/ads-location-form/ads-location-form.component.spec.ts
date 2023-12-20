import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsLocationFormComponent } from './ads-location-form.component';

describe('AdsLocationFormComponent', () => {
  let component: AdsLocationFormComponent;
  let fixture: ComponentFixture<AdsLocationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdsLocationFormComponent]
    });
    fixture = TestBed.createComponent(AdsLocationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
