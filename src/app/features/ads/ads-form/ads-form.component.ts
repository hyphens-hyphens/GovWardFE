import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Adslocation, AdslocationBaseResponse } from 'src/app/api/models';
import { AdsLocationsService } from 'src/app/api/services';

@Component({
    selector: 'app-ads-form',
    templateUrl: './ads-form.component.html',
    styleUrls: ['./ads-form.component.scss']
})
export class AdsLocationFormComponent implements OnInit {
    @Input() adsSelectedId?: number;
    @Output() refresh: EventEmitter<void> = new EventEmitter();

    ads: Adslocation | undefined = undefined;

    constructor(private adsLocationService: AdsLocationsService) { }

    ngOnInit(): void { }

    getAdsById(id: number) {
        this.adsLocationService
            .apiAdsLocationsIdGet$Json({ id })
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

    update(): void {

    }

    cancel() {
        this.refresh.emit();
    }
}
