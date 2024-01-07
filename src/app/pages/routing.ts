import { Routes } from '@angular/router';
import { AdsComponent } from '../features/ads/ads.component';
import { AdsTypesComponent } from '../features/ads-types/ads-types.component';
import { AdsNewComponent } from '../features/ads-new/ads-new.component';
import { ReportWarningComponent } from '../features/report-warning/report-warning.component';
import { AuthGuard } from '../modules/auth/services/auth.guard';
import { UserMapComponent } from '../features/user-map/user-map.component';

const Routing: Routes = [
    {
        path: '',
        component: UserMapComponent
    },
    {
        path: 'admin',
        canActivate: [AuthGuard],
        children: [
            {
                path: 'ads',
                component: AdsComponent,
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

        ]
    }, {
        path: '**',
        redirectTo: 'error/404',
    },
];

export { Routing };
