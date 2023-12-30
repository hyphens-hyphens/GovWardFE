import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { finalize, catchError, tap } from 'rxjs';
import { Adslocation, AdslocationBaseResponse, Adsnew, AdsnewBaseResponse, BooleanBaseResponse } from 'src/app/api/models';
import { AdsLocationsService, AdsNewsService } from 'src/app/api/services';
import { CommonService, TypeToast } from 'src/app/common/common.service';
import { adsProcessingList } from 'src/app/common/dto/ads-processing-list.dto';
import { adsStatusList } from 'src/app/common/dto/ads-status-list.dto';
import { adsTypesList } from 'src/app/common/dto/ads-type-list.dto';
import { SelectModel } from 'src/app/common/dto/select-model.dto';
import { warningTypeList } from 'src/app/common/dto/warning-type-list.dto';

@Component({
  selector: 'app-ads-new-form',
  templateUrl: './ads-new-form.component.html',
  styleUrls: ['./ads-new-form.component.scss']
})
export class AdsNewFormComponent implements OnInit, OnChanges {
  @Input() adsSelectedId?: number;
  @Output() refresh: EventEmitter<void> = new EventEmitter();

  adsnew: Adsnew | undefined = undefined;
  adsProcessingList: SelectModel[] = adsProcessingList;
  isLoading: boolean = false;

  constructor(
      private adsNewsService: AdsNewsService,
      private commonService: CommonService,
      private changeDetector: ChangeDetectorRef
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
      if (changes.adsSelectedId.currentValue) {
          this.getAdsById(changes.adsSelectedId.currentValue)
      }
      else {
          this.initNewAds();
      }
  }

  ngOnInit(): void {
  }

  initNewAds(): void {
      this.adsnew = {
          isActive: true,
          processingStatus: 'Chưa Xử Lý',
      };
      this.changeDetector.detectChanges();
  }

  getAdsById(id: number) {
      this.isLoading = true;
      this.adsNewsService
          .apiAdsNewsIdGet$Json({ id })
          .pipe(
              finalize(() => this.isLoading = false),
              catchError(this.commonService.handleError()),
          )
          .subscribe(
              {
                  next: (response: AdsnewBaseResponse) => {
                      if (response.errorMessage) {
                          this.commonService.show(response.errorMessage, "Error", TypeToast.error)
                      }
                      this.adsnew = { ...response.data };
                      this.changeDetector.detectChanges();
                  }
              },
          )
  }

  save(): void {
      if (this.adsnew.adsLocationId) {
          this.update();
      }
      else {
          this.create();
      }
  }

  create() {
    this.isLoading = true;
    this.adsNewsService.apiAdsNewsPost$Json({
        body: this.adsnew
    }).pipe(
        tap(() => this.isLoading = false),
        catchError(this.commonService.handleError()),
    ).subscribe(
        {
            next: (response: AdsnewBaseResponse) => {
                if (response.isError) {

                }
                else {
                    this.commonService.show("Success", "Success", TypeToast.success)
                }
            },
            error: (e) => console.error(e),
            complete: () => console.info('complete')
        }
    )
}

  update() {
      this.isLoading = true;
      this.adsNewsService.apiAdsNewsIdPut$Json({
          id: this.adsnew.adsLocationId,
          body: this.adsnew
      }).pipe(
          tap(() => this.isLoading = false),
          catchError(this.commonService.handleError()),
      ).subscribe(
          {
              next: (response: BooleanBaseResponse) => {
                  if (response.errorMessage) {
                      this.commonService.show(response.errorMessage, "Error", TypeToast.error)
                  }
                  else {
                      this.commonService.show("Success", "Success", TypeToast.success)
                  }
              },
              error: (e) => console.error(e),
              complete: () => console.info('complete')
          }
      )
  }

  cancel() {
      this.refresh.emit();
  }
}
