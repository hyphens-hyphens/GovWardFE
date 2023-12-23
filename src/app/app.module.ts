import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { ClipboardModule } from 'ngx-clipboard';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// #fake-start#
import { FakeAPIService } from './_fake/fake-api.service';
import { ApiModule } from './api/api.module';
import { AuthService } from './modules/auth';
// #fake-end#

// angular-material
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AdsLocationFormComponent } from './features/ads/ads-form/ads-form.component';
import { AdsLocationComponent } from './features/ads/ads.component';
import { MapAdsModule } from './features/map-ads/map-ads.module';
// angular-material

function appInitializer(authService: AuthService) {
    return () => {
        return new Promise((resolve) => {
            //@ts-ignore
            authService.getUserByToken().subscribe().add(resolve);
        });
    };
}

@NgModule({
    declarations: [AppComponent, AdsLocationComponent, AdsLocationFormComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot(),
        HttpClientModule,
        ClipboardModule,
        MatTableModule,
        MatPaginatorModule,
        // #fake-start#
        environment.isMockEnabled
            ? HttpClientInMemoryWebApiModule.forRoot(FakeAPIService, {
                passThruUnknownUrl: true,
                dataEncapsulation: false,
            })
            : [],
        // #fake-end#
        AppRoutingModule,
        InlineSVGModule.forRoot(),
        NgbModule,
        SweetAlert2Module.forRoot(),
        ApiModule.forRoot({ rootUrl: environment.apiUrl_GOV }),
        MatCardModule,
        MatGridListModule,
        MapAdsModule,
        MatInputModule
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: appInitializer,
            multi: true,
            deps: [AuthService],
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
