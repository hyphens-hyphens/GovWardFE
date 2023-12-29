import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { finalize } from 'rxjs';
import { Adslocation, AdslocationBaseResponse, BooleanBaseResponse } from 'src/app/api/models';
import { AdsLocationsService } from 'src/app/api/services';
import { adsStatusList } from 'src/app/common/dto/ads-status-list.dto';
import { adsTypesList } from 'src/app/common/dto/ads-type-list.dto';
import { SelectModel } from 'src/app/common/dto/select-model.dto';

@Component({
    selector: 'app-ads-form',
    templateUrl: './ads-form.component.html',
    styleUrls: ['./ads-form.component.scss']
})
export class AdsLocationFormComponent implements OnInit {
    @Input() adsSelectedId?: number;
    @Output() refresh: EventEmitter<void> = new EventEmitter();

    ads: Adslocation | undefined = undefined;
    adsTypesList: SelectModel[] = adsTypesList;
    adsStatusList: SelectModel[] = adsStatusList;
    isLoading: boolean = false;

    constructor(private adsLocationService: AdsLocationsService) { }

    ngOnInit(): void {
        if (this.adsSelectedId) {
            this.getAdsById(this.adsSelectedId)
        }
        else {
            this.initNewAds();
        }
    }

    initNewAds(): void {
        this.ads = {
            isActive: true,
            adsStatus: 'ChuaXetDuyet',
            typeId: 1
        };
    }

    getAdsById(id: number) {
        this.isLoading = true;
        this.adsLocationService
            .apiAdsLocationsIdGet$Json({ id })
            .pipe(
                finalize(() => this.isLoading = false)
            )
            .subscribe(
                {
                    next: (response: AdslocationBaseResponse) => {
                        if (response.isError) {
                            window.alert(response.errorMessage);
                        }
                        else {
                            this.ads = response.data;
                        }
                    },
                    error: (e) => console.error(e),
                    complete: () => console.info('complete')
                }
            )
    }

    save(): void {
        this.isLoading = true;
        if (this.ads.adsLocationId) {
            this.update();
        }
        else {
            this.create();
        }
    }

    create() {
        this.adsLocationService.apiAdsLocationsPost$Json({
            body: this.ads
        }).pipe(
            finalize(() => this.isLoading = false)
        ).subscribe(
            {
                next: (response: BooleanBaseResponse) => {
                    if (response.isError) {

                    }
                },
                error: (e) => console.error(e),
                complete: () => console.info('complete')
            }
        )
    }

    update() {
        this.adsLocationService.apiAdsLocationsIdPut$Json({
            id: this.ads.adsLocationId,
            body: this.ads
        }).pipe(
            finalize(() => this.isLoading = false)
        ).subscribe()
    }

    cancel() {
        this.refresh.emit();
    }
}
