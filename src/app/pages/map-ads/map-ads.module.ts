import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapAdsComponent } from './map-ads.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [MapAdsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MapAdsComponent,
      },
    ])
  ]
})
export class MapAdsModule { }
