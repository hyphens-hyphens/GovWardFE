import { Routes } from '@angular/router';
<<<<<<< HEAD
import { AdsLocationComponent } from '../features/ads/ads.component';
=======
import { AdsLocationComponent } from '../features/ads-location/ads-location.component';
>>>>>>> c5788e1a776aca8407c3e98b08c665c28c81bac6

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
