import { Component, OnInit } from '@angular/core';
import { Adslocation } from 'src/app/api/models';
import { AdslocationsService } from 'src/app/api/services';

@Component({
    selector: 'app-ads-location',
    templateUrl: './ads-location.component.html',
    styleUrls: ['./ads-location.component.scss']
})
export class AdsLocationComponent implements OnInit {

    adsLocations: Array<Adslocation> = [];

    constructor(private adsLocationService: AdslocationsService) { }

    ngOnInit(): void {
        this.getList();
    }

    getList(): void {
        this.adsLocationService.apiAdslocationsGet$Json()
            .subscribe({
                next: (response: Adslocation[]) => {
                    this.adsLocations = response ?? [];
                },
                error: (e) => console.error(e),
                complete: () => console.info('complete')
            });
    }
}
