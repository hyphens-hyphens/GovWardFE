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
import { AuthService } from './modules/auth/services/auth.service';

// #fake-start#
import { MatPaginatorModule } from '@angular/material/paginator';
import { FakeAPIService } from './_fake/fake-api.service';
import { ApiModule } from './api/api.module';
import { AdsLocationFormComponent } from './pages/ads-location/ads-location-form/ads-location-form.component';
import { AdsLocationComponent } from './pages/ads-location/ads-location.component';
import { MatCardModule } from '@angular/material/card';
// #fake-end#

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
        ApiModule.forRoot({ rootUrl: environment.apiUrl }),
        MatCardModule
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
