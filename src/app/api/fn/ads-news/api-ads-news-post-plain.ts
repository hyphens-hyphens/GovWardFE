/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Adsnew } from '../../models/adsnew';
import { AdsnewBaseResponse } from '../../models/adsnew-base-response';

export interface ApiAdsNewsPost$Plain$Params {
      body?: Adsnew
}

export function apiAdsNewsPost$Plain(http: HttpClient, rootUrl: string, params?: ApiAdsNewsPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<AdsnewBaseResponse>> {
  const rb = new RequestBuilder(rootUrl, apiAdsNewsPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AdsnewBaseResponse>;
    })
  );
}

apiAdsNewsPost$Plain.PATH = '/api/AdsNews';
