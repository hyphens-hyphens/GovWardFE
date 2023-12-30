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
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { ToastrModule } from 'ngx-toastr';
import { ConfirmDialogComponent } from './common/confirm-dialog/confirm-dialog.component';
import { AdsTypesFormComponent } from './features/ads-types/ads-types-form/ads-types-form.component';
import { AdsTypesComponent } from './features/ads-types/ads-types.component';
import { AdsLocationFormComponent } from './features/ads/ads-form/ads-form.component';
import { AdsComponent } from './features/ads/ads.component';
import { MapAdsModule } from './features/map-ads/map-ads.module';
import { MatNativeDateModule } from '@angular/material/core';
import { AdsNewComponent } from './features/ads-new/ads-new.component';
import { AdsNewFormComponent } from './features/ads-new/ads-new-form/ads-new-form.component';
import { ReportWarningComponent } from './features/report-warning/report-warning.component';
import { ReportWarningFormComponent } from './features/report-warning/report-warning-form/report-warning-form.component';

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
    declarations: [AppComponent, AdsComponent, AdsLocationFormComponent, ConfirmDialogComponent, AdsTypesComponent, AdsTypesFormComponent, AdsNewComponent, AdsNewFormComponent, ReportWarningComponent, ReportWarningFormComponent,],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot(),
        ToastrModule.forRoot(),
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
        MatInputModule,
        MatButtonModule,
        MatDialogModule,
        FormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatProgressBarModule,
        MatDatepickerModule,
        MatNativeDateModule
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
