import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapAdsComponent } from './map-ads.component';

describe('MapAdsComponent', () => {
  let component: MapAdsComponent;
  let fixture: ComponentFixture<MapAdsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapAdsComponent]
    });
    fixture = TestBed.createComponent(MapAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
