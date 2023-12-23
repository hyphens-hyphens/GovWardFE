import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Adslocation } from 'src/app/api/models';
import { AdslocationsService } from 'src/app/api/services';

@Component({
    selector: 'app-ads-location',
    templateUrl: './ads-location.component.html',
    styleUrls: ['./ads-location.component.scss']
})
export class AdsLocationComponent implements OnInit, AfterViewInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;

    displayedColumns: string[] = ['ID', 'Address', 'Latitute', 'Longtitute'];
    dataSource = new MatTableDataSource<Adslocation>();

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.getList();
    }

    constructor(private adsLocationService: AdslocationsService) { }

    ngOnInit(): void {

    }

    getList(): void {
        this.adsLocationService.apiAdslocationsGet$Json()
            .subscribe({
                next: (response: Adslocation[]) => {
                    this.dataSource.data = response;
                },
                error: (e) => console.error(e),
                complete: () => console.info('complete')
            });
    }
}
