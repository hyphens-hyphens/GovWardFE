import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsNewFormComponent } from './ads-new-form.component';

describe('AdsNewFormComponent', () => {
  let component: AdsNewFormComponent;
  let fixture: ComponentFixture<AdsNewFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdsNewFormComponent]
    });
    fixture = TestBed.createComponent(AdsNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
