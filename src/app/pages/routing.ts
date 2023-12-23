import { Routes } from '@angular/router';
import { AdsLocationComponent } from '../features/ads/ads.component';

const Routing: Routes = [

    {
        path: 'map',
        loadChildren: () => import('../features/map-ads/map-ads.module').then((m) => m.MapAdsModule),
    },
    {
        path: 'ads',
        component: AdsLocationComponent
    },
    {
        path: '**',
        redirectTo: 'error/404',
    },
];

export { Routing };
