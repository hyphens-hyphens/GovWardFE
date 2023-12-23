import { Routes } from '@angular/router';
import { AdsComponent } from '../features/ads/ads.component';
import { AdsTypesComponent } from '../features/ads-types/ads-types.component';

const Routing: Routes = [

    {
        path: 'map',
        loadChildren: () => import('../features/map-ads/map-ads.module').then((m) => m.MapAdsModule),
    },
    {
        path: 'ads',
        component: AdsComponent
    },
    {
        path: 'ads-types',
        component: AdsTypesComponent
    },
    {
        path: '**',
        redirectTo: 'error/404',
    },
];

export { Routing };
