import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { finalize, catchError, tap } from 'rxjs';
import { Adsnew, AdsnewBaseResponse, BooleanBaseResponse, Reportwarning, ReportwarningBaseResponse, ReportwarningListBaseResponse } from 'src/app/api/models';
import { AdsNewsService, ReportWarningsService } from 'src/app/api/services';
import { CommonService, TypeToast } from 'src/app/common/common.service';
import { adsProcessingList } from 'src/app/common/dto/ads-processing-list.dto';
import { adsStatusList } from 'src/app/common/dto/ads-status-list.dto';
import { SelectModel } from 'src/app/common/dto/select-model.dto';
import { warningTypeList } from 'src/app/common/dto/warning-type-list.dto';

@Component({
  selector: 'app-report-warning-form',
  templateUrl: './report-warning-form.component.html',
  styleUrls: ['./report-warning-form.component.scss']
})
export class ReportWarningFormComponent implements OnInit, OnChanges {
  @Input() adsSelectedId?: number;
  @Output() refresh: EventEmitter<void> = new EventEmitter();

  reportwarning: Reportwarning | undefined = undefined;
  warningTypeList: SelectModel[] = warningTypeList;
  adsStatusList: SelectModel[] = adsStatusList;
  isLoading: boolean = false;
  isFormValid: boolean | undefined = undefined;

  constructor(
      private ReportWarningsService: ReportWarningsService,
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
      this.reportwarning = {
          isActive: true,
          /* processingStatus: 'Chưa Xử Lý', */
      };
      this.changeDetector.detectChanges();
  }

  getAdsById(id: number) {
    this.isLoading = true;
    this.ReportWarningsService
        .apiReportWarningsIdGet$Json({ id })
        .pipe(
            finalize(() => this.isLoading = false),
            catchError(this.commonService.handleError()),
        )
        .subscribe(
            {
                next: (response: ReportwarningBaseResponse) => {
                    if (response.errorMessage) {
                        this.commonService.show(response.errorMessage, "Error", TypeToast.error)
                    }
                    this.reportwarning = { ...response.data };
                    this.changeDetector.detectChanges();
                }
            },
        )
}

  save(): void {
      if (this.reportwarning.reportWarningId) {
          this.update();
      }
      else {
          this.create();
      }
  }

  create() {
    this.isLoading = true;
    this.ReportWarningsService.apiReportWarningsPost$Json({
        body: this.reportwarning
    }).pipe(
        tap(() => this.isLoading = false),
        catchError(this.commonService.handleError()),
    ).subscribe(
        {
            next: (response: ReportwarningBaseResponse) => {
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
      this.ReportWarningsService.apiReportWarningsIdPut$Json({
          id: this.reportwarning.reportWarningId,
          body: this.reportwarning
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

  ngModelOnChange(isValid: boolean): void {
    this.isFormValid ??= true;
    this.isFormValid &&= isValid;
}
}
