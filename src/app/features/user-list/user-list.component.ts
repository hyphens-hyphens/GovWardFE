import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { finalize, catchError, Observable, tap } from 'rxjs';
import { Adsnew, AdsnewListBaseResponse, UserApp, UserAppListBaseResponse } from 'src/app/api/models';
import { AdsNewsService, UsersService } from 'src/app/api/services';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['ID', 'FirstName', 'LastName','Phone','Email','Ward','District', 'Action'];
  dataSource = new MatTableDataSource<UserApp>();
  adsSelectedId?: string;
  deleteSelectedId?: string;
  isLoading: boolean = false;

  ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.getList();
  }

  constructor(private UsersService: UsersService, public dialog: MatDialog,
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
      this.UsersService.apiUsersGet$Json()
          .pipe(
              finalize(() => this.isLoading = false),
              catchError(this.commonService.handleError()),
          )
          .subscribe({
              next: (response: UserAppListBaseResponse) => {
                  this.dataSource.data = response.data;
              },
              error: (e) => console.error(e),
          });
  }


  displayForm(element: UserApp): void {
      this.adsSelectedId = element.id;
  }

  refresh() {
      this.adsSelectedId = undefined;
      this.getList();
  }

  initFilter() {
      this.dataSource.filterPredicate = function (data, filter: string): boolean {
          return data.lastName?.toLowerCase()?.includes(filter) 
          || data?.id?.toString() == filter
          || data.firstName?.toLowerCase()?.includes(filter) 
          || data?.district?.toLowerCase()?.includes(filter);
      };
  }

  /* deleteAds(element: UserApp): void {
      this.deleteSelectedId = element.id;
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
  } */

  /* confirm = () => {
      this.isLoading = true;
      this.UsersService.apiUsersGet$Json({
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
  } */
}
