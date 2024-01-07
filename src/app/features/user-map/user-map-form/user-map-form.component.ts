import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { finalize, catchError, tap } from 'rxjs';
import { Adslocation, AdslocationBaseResponse, Adsnew, BooleanBaseResponse } from 'src/app/api/models';
import { AdsLocationsService, ReportWarningsService } from 'src/app/api/services';
import { CommonService, TypeToast } from 'src/app/common/common.service';
import { adsStatusList } from 'src/app/common/dto/ads-status-list.dto';
import { adsTypesList } from 'src/app/common/dto/ads-type-list.dto';
import { SelectModel } from 'src/app/common/dto/select-model.dto';
import { warningTypeList } from 'src/app/common/dto/warning-type-list.dto';

@Component({
    selector: 'app-user-map-form',
    templateUrl: './user-map-form.component.html',
    styleUrls: ['./user-map-form.component.scss']
})
export class UserMapFormComponent implements OnInit, OnChanges {
    @Input() adsSelectedId?: number;
    @Output() refresh: EventEmitter<void> = new EventEmitter();

    ads: Adsnew | undefined = undefined;
    adsTypesList: SelectModel[] = adsTypesList;
    adsStatusList: SelectModel[] = adsStatusList;
    isLoading: boolean = false;
    isFormValid: boolean | undefined = undefined;

    warningTypeList: SelectModel[] = warningTypeList;

    constructor(
        private adsLocationService: AdsLocationsService,
        private reportWarningService: ReportWarningsService,
        private commonService: CommonService,
        private changeDetector: ChangeDetectorRef
    ) { }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.adsSelectedId.currentValue) {
            this.getById(changes.adsSelectedId.currentValue)
        }
        else {
            this.initNew();
        }
    }

    ngOnInit(): void {
    }

    initNew(): void {
        this.ads = {
            isActive: true,
            longtitude: 0,
            latitude: 0,
        };
        this.changeDetector.detectChanges();
    }

    getById(id: number) {
        this.isLoading = true;
        this.adsLocationService
            .apiAdsLocationsIdGet$Json({ id })
            .pipe(
                finalize(() => this.isLoading = false),
                catchError(this.commonService.handleError()),
            )
            .subscribe(
                {
                    next: (response: AdslocationBaseResponse) => {
                        if (response.errorMessage) {
                            this.commonService.show(response.errorMessage, "Error", TypeToast.error)
                        }
                        this.ads = { ...response.data };
                        this.changeDetector.detectChanges();
                    }
                },
            )
    }

    save(): void {
        if (this.ads.adsLocationId) {
            this.update();
        }
        else {
            this.create();
        }
    }

    create() {
        this.isLoading = true;
        this.adsLocationService.apiAdsLocationsPost$Json({
            body: this.ads
        }).pipe(
            tap(() => this.isLoading = false),
            catchError(this.commonService.handleError()),
        ).subscribe(
            {
                next: (response: BooleanBaseResponse) => {
                    if (response.isError) {

                    }
                    else {
                        this.commonService.show("Success", "Success", TypeToast.success)
                    }
                },
                error: (e) => console.error(e),
                complete: () => console.info('complete')
            }
        )
    }

    update() {
        this.isLoading = true;
        this.adsLocationService.apiAdsLocationsIdPut$Json({
            id: this.ads.adsLocationId,
            body: this.ads
        }).pipe(
            tap(() => this.isLoading = false),
            catchError(this.commonService.handleError()),
        ).subscribe(
            {
                next: (response: BooleanBaseResponse) => {
                    if (response.errorMessage) {
                        this.commonService.show(response.errorMessage, "Error", TypeToast.error)
                    }
                    else {
                        this.commonService.show("Success", "Success", TypeToast.success)
                    }
                },
                error: (e) => console.error(e),
                complete: () => console.info('complete')
            }
        )
    }

    cancel() {
        this.refresh.emit();
    }

    ngModelOnChange(isValid: boolean): void {
        this.isFormValid ??= true;
        this.isFormValid &&= isValid;
    }
}
