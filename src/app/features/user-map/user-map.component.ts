import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, catchError, finalize, tap } from 'rxjs';
import { Adslocation, AdslocationListBaseResponse, Adsnew } from 'src/app/api/models';
import { AdsLocationsService, AdsNewsService } from 'src/app/api/services';
import { CommonService } from 'src/app/common/common.service';
import { ConfirmDialogComponent } from 'src/app/common/confirm-dialog/confirm-dialog.component';
import { AuthService } from 'src/app/modules/auth';
import { MapAdsComponent } from '../map-ads/map-ads.component';

@Component({
    selector: 'app-user-map',
    templateUrl: './user-map.component.html',
    styleUrls: ['./user-map.component.scss']
})
export class UserMapComponent implements OnInit, AfterViewInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MapAdsComponent) mapAdsComponent: MapAdsComponent;
    displayedColumns: string[] = ['ID', 'Address', 'Size', 'Quantity', 'Type', 'Status', 'Images', 'EndDate', 'Latitude', 'Longtitude', 'Action'];
    dataSource = new MatTableDataSource<Adsnew>();
    adsSelectedId?: number;
    deleteSelectedId?: number;
    isLoading: boolean = false;
    isLogin: boolean = false;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.getList();
    }

    constructor(private adsNewsService: AdsNewsService, public dialog: MatDialog,
        private commonService: CommonService,
        private userService: AuthService
    ) {
        this.isLogin = this.userService.currentUserValue?.isLogin ?? false;
    }

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
        this.adsNewsService.apiAdsNewsGet$Json()
            .pipe(
                finalize(() => this.isLoading = false),
                catchError(this.commonService.handleError()),
            )
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

    displayInMap(element: Adslocation): void {
        this.adsSelectedId = element.adsLocationId;

        this.mapAdsComponent.focusToLocation(element.latitude, element.longtitude)
    }

    refresh() {
        this.adsSelectedId = undefined;
        this.getList();
    }

    initFilter() {
        this.dataSource.filterPredicate = function (data, filter: string): boolean {
            return data.adsAddress?.toLowerCase()?.includes(filter) || data?.adsLocationId?.toString() == filter;
        };
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
        this.isLoading = true;

    }

    clearSelectedDelete = () => {
        this.deleteSelectedId = undefined;
    }
}

