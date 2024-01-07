import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, catchError, finalize, tap } from 'rxjs';
import { Adslocation, AdslocationListBaseResponse, Adsnew, AdsnewListBaseResponse, Adstype, AdstypeIEnumerableBaseResponse } from 'src/app/api/models';
import { AdsNewsService } from 'src/app/api/services';
import { CommonService } from 'src/app/common/common.service';
import { ConfirmDialogComponent } from 'src/app/common/confirm-dialog/confirm-dialog.component';
import { MapAdsComponent } from '../map-ads/map-ads.component';

@Component({
  selector: 'app-ads-new',
  templateUrl: './ads-new.component.html',
  styleUrls: ['./ads-new.component.scss']
})
export class AdsNewComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('mapAds') mapAdsComponent: MapAdsComponent;
  displayedColumns: string[] = ['ID', 'AdsAddress', 'Size','StartDate','EndDate','Comment','CompanyInfo', 'Action'];
  dataSource = new MatTableDataSource<Adsnew>();
  adsSelectedId?: number;
  deleteSelectedId?: number;
  isLoading: boolean = false;

  ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.getList();
  }

  constructor(private adsNewsService: AdsNewsService, public dialog: MatDialog,
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
      this.adsNewsService.apiAdsNewsGet$Json()
          .pipe(
              finalize(() => this.isLoading = false),
              catchError(this.commonService.handleError()),
          )
          .subscribe({
              next: (response: AdsnewListBaseResponse) => {
                  this.dataSource.data = response.data;
              },
              error: (e) => console.error(e),
          });
  }

displayInMap(element: Adsnew): void {
    this.adsSelectedId = element.adsNewId;

    this.mapAdsComponent.focusToLocation(element.latitude, element.longtitude)
}

  displayForm(element: Adsnew): void {
      this.adsSelectedId = element.adsNewId;
  }

  refresh() {
      this.adsSelectedId = undefined;
      this.getList();
  }

  initFilter() {
      this.dataSource.filterPredicate = function (data, filter: string): boolean {
          return data.adsAddress?.toLowerCase()?.includes(filter) 
          || data?.adsLocationId?.toString() == filter
          || data?.comment?.toLowerCase()?.includes(filter)
          || data?.companyInfo?.toLowerCase()?.includes(filter)
          ;
      };
  }

  deleteAds(element: Adsnew): void {
      this.deleteSelectedId = element.adsNewId;
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
      this.adsNewsService.apiAdsNewsIdDelete$Json({
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