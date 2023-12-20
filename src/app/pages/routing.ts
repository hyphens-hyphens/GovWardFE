import { Routes } from '@angular/router';
import { AdsLocationComponent } from '../features/AdsLocation/ads-location/ads-location.component';

const Routing: Routes = [

    {
        path: 'map',
        loadChildren: () => import('./map-ads/map-ads.module').then((m) => m.MapAdsModule),
    },
    {
        path: 'ads-locations',
        component: AdsLocationComponent
    },
    {
        path: '**',
        redirectTo: 'error/404',
    },
];

export { Routing };
