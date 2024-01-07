import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMapFormComponent } from './user-map-form.component';

describe('UserMapFormComponent', () => {
  let component: UserMapFormComponent;
  let fixture: ComponentFixture<UserMapFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserMapFormComponent]
    });
    fixture = TestBed.createComponent(UserMapFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
