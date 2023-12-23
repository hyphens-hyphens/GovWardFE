import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapAdsComponent } from './map-ads.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [MapAdsComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: '',
                component: MapAdsComponent,
            },
        ])
    ],
    exports: [
        MapAdsComponent
    ]
})
export class MapAdsModule { }
