import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Adstype, AdstypeIEnumerableBaseResponse } from 'src/app/api/models';
import { AdsTypesService } from 'src/app/api/services';
import { ConfirmDialogComponent } from 'src/app/common/confirm-dialog/confirm-dialog.component';

@Component({
    selector: 'app-ads-types',
    templateUrl: './ads-types.component.html',
    styleUrls: ['./ads-types.component.scss']
})
export class AdsTypesComponent implements OnInit, AfterViewInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;

    displayedColumns: string[] = ['ID', 'Name', 'DisplayName'];
    dataSource = new MatTableDataSource<Adstype>();
    adsSelectedId?: number;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.getList();
    }

    constructor(private AdsTypeService: AdsTypesService, public dialog: MatDialog) { }

    ngOnInit(): void {

    }

    getList(): void {
        this.AdsTypeService.apiAdsTypesGet$Json()
            .subscribe({
                next: (response: AdstypeIEnumerableBaseResponse) => {
                    this.dataSource.data = response.data;
                },
                error: (e) => console.error(e),
                complete: () => console.info('complete')
            });
    }

    displayForm(element: Adstype): void {
        this.adsSelectedId = element.adsTypeId;
    }

    refresh() {
        this.adsSelectedId = undefined;
        this.getList();
    }

    deleteAds(element: Adstype): void {
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

