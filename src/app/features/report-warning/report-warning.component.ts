import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, catchError, finalize, tap } from 'rxjs';
import { Adsnew, ReportWarning, ReportWarningListBaseResponse } from 'src/app/api/models';
import { ReportWarningsService } from 'src/app/api/services';
import { CommonService } from 'src/app/common/common.service';
import { ConfirmDialogComponent } from 'src/app/common/confirm-dialog/confirm-dialog.component';
import { CurrentPlaceSelect, MapAdsComponent } from '../map-ads/map-ads.component';

@Component({
    selector: 'app-report-warning',
    templateUrl: './report-warning.component.html',
    styleUrls: ['./report-warning.component.scss']
})
export class ReportWarningComponent implements OnInit, AfterViewInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild('mapAds') mapAdsComponent: MapAdsComponent;
    displayedColumns: string[] = ['ID', 'FullName', 'Type', 'PhoneNumber', 'Comment', 'AdsLocationID', 'Status', 'Action'];
    dataSource = new MatTableDataSource<ReportWarning>();
    adsSelectedId?: number;
    deleteSelectedId?: number;
    isLoading: boolean = false;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.getList();
    }

    constructor(private ReportWarningsService: ReportWarningsService, public dialog: MatDialog,
        private commonService: CommonService
    ) { }

    ngOnInit(): void {
        this.initFilter();
    }

    search(filterValue?: string) {
        filterValue ??= '';
        filterValue = filterValue?.trim();
        filterValue = filterValue?.toLowerCase();
        this.dataSource.filter = filterValue;
    }

    getList(): void {
        this.isLoading = true;
        this.ReportWarningsService.apiReportWarningsGet$Json()
            .pipe(
                finalize(() => this.isLoading = false),
                catchError(this.commonService.handleError()),
            )
            .subscribe({
                next: (response: ReportWarningListBaseResponse) => {
                    this.dataSource.data = response.data;

                    const list = response.data.map(x => <CurrentPlaceSelect>{
                        isWarning: x.warningType !== 'Tố giác sai phạm',
                        lat: x.latitude,
                        lng: x.longtitude
                    })

                    this.mapAdsComponent.setMyMarkers(list);
                },
                error: (e) => console.error(e),
            });
    }

    displayInMap(element: ReportWarning): void {
        this.adsSelectedId = element.adsNewId;

        this.mapAdsComponent.focusToLocation(element.latitude, element.longtitude,
            element.warningType !== 'Tố giác sai phạm'
        )
    }


    displayForm(element: ReportWarning): void {
        this.adsSelectedId = element.reportWarningId;
    }

    refresh() {
        this.adsSelectedId = undefined;
        this.getList();
    }

    initFilter() {
        this.dataSource.filterPredicate = function (data, filter: string): boolean {
            return data.fullName?.toLowerCase()?.includes(filter)
                || data?.adsLocationId?.toString() == filter
                || data?.comment?.toLowerCase()?.includes(filter)
                || data?.reportWarningStatus?.toLowerCase()?.includes(filter)
                ;
        };
    }

    deleteAds(element: ReportWarning): void {
        this.deleteSelectedId = element.reportWarningId;
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
        this.isLoading = true;
        this.ReportWarningsService.apiReportWarningsIdDelete$Json({
            id: this.deleteSelectedId
        }).pipe(
            tap(() => this.refresh()),
            finalize(() => {
                this.clearSelectedDelete();
                this.isLoading = false;
            }),
            catchError(this.commonService.handleError()),
        ).subscribe();
    }

    clearSelectedDelete = () => {
        this.deleteSelectedId = undefined;
    }
}
