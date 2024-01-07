import { ChangeDetectorRef, Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { finalize, catchError, tap } from 'rxjs';
import { UserApp,Adsnew, AdsnewBaseResponse, BooleanBaseResponse } from 'src/app/api/models';
import { AdsNewsService, UsersService } from 'src/app/api/services';
import { CommonService, TypeToast } from 'src/app/common/common.service';
import { adsProcessingList } from 'src/app/common/dto/ads-processing-list.dto';
import { SelectModel } from 'src/app/common/dto/select-model.dto';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  @Input() adsSelectedId?: string;
  @Output() refresh: EventEmitter<void> = new EventEmitter();

  user: UserApp | undefined = undefined;
  adsProcessingList: SelectModel[] = adsProcessingList;
  isLoading: boolean = false;
  isFormValid: boolean | undefined = undefined;

  constructor(
      private userService: UsersService,
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
      this.user = {
          // isActive: true,
          // processingStatus: 'Chưa Xử Lý',
      };
      this.changeDetector.detectChanges();
  }

  getAdsById(id: number) {
      // this.isLoading = true;
      // this.adsNewsService
      //     .apiAdsNewsIdGet$Json({ id })
      //     .pipe(
      //         finalize(() => this.isLoading = false),
      //         catchError(this.commonService.handleError()),
      //     )
      //     .subscribe(
      //         {
      //             next: (response: AdsnewBaseResponse) => {
      //                 if (response.errorMessage) {
      //                     this.commonService.show(response.errorMessage, "Error", TypeToast.error)
      //                 }
      //                 this.adsnew = { ...response.data };
      //                 this.changeDetector.detectChanges();
      //             }
      //         },
      //     )
  }

  save(): void {
      if (this.user.id) {
          this.update();
      }
      else {
          this.create();
      }
  }

  create() {
    // this.isLoading = true;
    // this.adsNewsService.apiAdsNewsPost$Json({
    //     body: this.adsnew
    // }).pipe(
    //     tap(() => this.isLoading = false),
    //     catchError(this.commonService.handleError()),
    // ).subscribe(
    //     {
    //         next: (response: AdsnewBaseResponse) => {
    //             if (response.isError) {

    //             }
    //             else {
    //                 this.commonService.show("Success", "Success", TypeToast.success)
    //             }
    //         },
    //         error: (e) => console.error(e),
    //         complete: () => console.info('complete')
    //     }
    // )
}

  update() {
      // this.isLoading = true;
      // this.adsNewsService.apiAdsNewsIdPut$Json({
      //     id: this.adsnew.adsLocationId,
      //     body: this.adsnew
      // }).pipe(
      //     tap(() => this.isLoading = false),
      //     catchError(this.commonService.handleError()),
      // ).subscribe(
      //     {
      //         next: (response: BooleanBaseResponse) => {
      //             if (response.errorMessage) {
      //                 this.commonService.show(response.errorMessage, "Error", TypeToast.error)
      //             }
      //             else {
      //                 this.commonService.show("Success", "Success", TypeToast.success)
      //             }
      //         },
      //         error: (e) => console.error(e),
      //         complete: () => console.info('complete')
      //     }
      // )
  }

  cancel() {
      this.refresh.emit();
  }

  ngModelOnChange(isValid: boolean): void {
    this.isFormValid ??= true;
    this.isFormValid &&= isValid;
    }
}
