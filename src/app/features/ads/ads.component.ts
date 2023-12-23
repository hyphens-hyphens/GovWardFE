import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, tap } from 'rxjs';
import { Adslocation } from 'src/app/api/models';
import { AdslocationsService } from 'src/app/api/services';
import { ConfirmDialogComponent } from 'src/app/common/confirm-dialog/confirm-dialog.component';

@Component({
    selector: 'app-ads',
    templateUrl: './ads.component.html',
    styleUrls: ['./ads.component.scss']
})
export class AdsLocationComponent implements OnInit, AfterViewInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;

    displayedColumns: string[] = ['ID', 'Address', 'Latitute', 'Longtitute', 'Action'];
    dataSource = new MatTableDataSource<Adslocation>();
    adsSelectedId?: number;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.getList();
    }

    constructor(private adsLocationService: AdslocationsService, public dialog: MatDialog) { }

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

    displayForm(element: Adslocation): void {
        this.adsSelectedId = element.id;
    }

    refresh() {
        this.adsSelectedId = undefined;
        this.getList();
    }

    deleteAds(element: Adslocation): void {
        this.openDialog().subscribe({
            next: (response) => {
                console.log(response)
            },
            error: (e) => console.error(e),
            complete: () => console.info('complete')
        })
    }

    openDialog(): Observable<any> {
        return this.dialog.open(ConfirmDialogComponent, {
            width: '250px',
        })
            .afterClosed()
    }
}
