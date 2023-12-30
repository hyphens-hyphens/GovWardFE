import { Routes } from '@angular/router';
import { AdsComponent } from '../features/ads/ads.component';
import { AdsTypesComponent } from '../features/ads-types/ads-types.component';
import { AdsNewComponent } from '../features/ads-new/ads-new.component';
import { ReportWarningComponent } from '../features/report-warning/report-warning.component';

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
        path: 'ads-news',
        component: AdsNewComponent
    },
    {
        path: 'report',
        component: ReportWarningComponent
    },
    {
        path: '**',
        redirectTo: 'error/404',
    },
];

export { Routing };
