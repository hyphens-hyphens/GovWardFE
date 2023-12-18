import { Routes } from '@angular/router';

const Routing: Routes = [

    {
        path: 'map',
        loadChildren: () => import('./map-ads/map-ads.module').then((m) => m.MapAdsModule),
    },
    // {
    //     // path: '',
    //     // // loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
    //     // pathMatch: 'full',
    // },
    {
        path: '**',
        redirectTo: 'error/404',
    },
];

export { Routing };
