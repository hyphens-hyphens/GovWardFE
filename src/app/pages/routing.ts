import { Routes } from '@angular/router';
import { AdsNewComponent } from '../features/ads-new/ads-new.component';
import { AdsTypesComponent } from '../features/ads-types/ads-types.component';
import { AdsComponent } from '../features/ads/ads.component';
import { ReportWarningComponent } from '../features/report-warning/report-warning.component';
import { UserListComponent } from '../features/user-list/user-list.component';
import { UserMapComponent } from '../features/user-map/user-map.component';
import { AuthGuard } from '../modules/auth/services/auth.guard';

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
                path: 'user',
                component: UserListComponent
            },
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
