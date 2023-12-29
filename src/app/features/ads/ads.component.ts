import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, finalize, tap } from 'rxjs';
import { Adslocation, AdslocationListBaseResponse } from 'src/app/api/models';
import { AdsLocationsService } from 'src/app/api/services';
import { ConfirmDialogComponent } from 'src/app/common/confirm-dialog/confirm-dialog.component';

@Component({
    selector: 'app-ads',
    templateUrl: './ads.component.html',
    styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit, AfterViewInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;

    displayedColumns: string[] = ['ID', 'Address','Size','Quantity','Type','Status','Images','EndDate','Latitude', 'Longtitude', 'Action'];
    dataSource = new MatTableDataSource<Adslocation>();
    adsSelectedId?: number;
    deleteSelectedId?: number;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.getList();
    }

    constructor(private adsLocationService: AdsLocationsService, public dialog: MatDialog) { }

    ngOnInit(): void { }

    getList(): void {
        this.adsLocationService.apiAdsLocationsGet$Json()
            .subscribe({
                next: (response: AdslocationListBaseResponse) => {
                    this.dataSource.data = response.data;
                },
                error: (e) => console.error(e),
            });
    }

    displayForm(element: Adslocation): void {
        this.adsSelectedId = element.adsLocationId;
    }

    refresh() {
        this.adsSelectedId = undefined;
        this.getList();
    }

    deleteAds(element: Adslocation): void {
        this.deleteSelectedId = element.adsLocationId;
        this.openDialog()
            .pipe(finalize(() => this.clearSelectedDelete()))
            .subscribe()
    }

    openDialog(): Observable<any> {
        return this.dialog.open(ConfirmDialogComponent, {
            width: '250px',
            data: {
                confirmFunction: this.confirm,
                rejectFunction: this.clearSelectedDelete
            }
        }).afterClosed()
    }

    confirm = () => {
        this.adsLocationService.apiAdsLocationsIdDelete$Json({
            id: this.deleteSelectedId
        }).pipe(
            tap(() => this.refresh()),
            finalize(() => this.clearSelectedDelete())
        ).subscribe();
    }

    clearSelectedDelete = () => {
        this.deleteSelectedId = undefined;
    }
}
