/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Adsnew } from '../../models/adsnew';
import { BooleanBaseResponse } from '../../models/boolean-base-response';

export interface ApiAdsNewsIdPut$Plain$Params {
  id: number;
      body?: Adsnew
}

export function apiAdsNewsIdPut$Plain(http: HttpClient, rootUrl: string, params: ApiAdsNewsIdPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanBaseResponse>> {
  const rb = new RequestBuilder(rootUrl, apiAdsNewsIdPut$Plain.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {"style":"simple"});
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<BooleanBaseResponse>;
    })
  );
}

apiAdsNewsIdPut$Plain.PATH = '/api/AdsNews/{id}';
