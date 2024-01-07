/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Adsnew } from '../../models/adsnew';
import { AdsnewBaseResponse } from '../../models/adsnew-base-response';

export interface ApiAdsNewsPost$Json$Params {
  
    /**
     * thông tin adsnew mới
     */
    body?: Adsnew
}

export function apiAdsNewsPost$Json(http: HttpClient, rootUrl: string, params?: ApiAdsNewsPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<AdsnewBaseResponse>> {
  const rb = new RequestBuilder(rootUrl, apiAdsNewsPost$Json.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AdsnewBaseResponse>;
    })
  );
}

apiAdsNewsPost$Json.PATH = '/api/AdsNews';
