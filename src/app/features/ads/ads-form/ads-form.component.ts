import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Adslocation } from 'src/app/api/models';
import { AdslocationsService } from 'src/app/api/services';

@Component({
    selector: 'app-ads-form',
    templateUrl: './ads-form.component.html',
    styleUrls: ['./ads-form.component.scss']
})
export class AdsLocationFormComponent implements OnInit {
    @Input() adsSelectedId?: number;
    @Output() refresh: EventEmitter<void> = new EventEmitter();

    ads: Adslocation | undefined = undefined;

    constructor(private adsLocationService: AdslocationsService) { }

    ngOnInit(): void { }

    getAdsById(id: number) {
        this.adsLocationService
            .apiAdslocationsIdGet$Json({ id })
            .subscribe(
                {
                    next: (response: Adslocation) => {
                        this.ads = response;
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
