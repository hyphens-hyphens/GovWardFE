import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsNewComponent } from './ads-new.component';

describe('AdsNewComponent', () => {
  let component: AdsNewComponent;
  let fixture: ComponentFixture<AdsNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdsNewComponent]
    });
    fixture = TestBed.createComponent(AdsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
