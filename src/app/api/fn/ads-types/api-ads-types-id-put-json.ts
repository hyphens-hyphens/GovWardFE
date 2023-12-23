/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Adstype } from '../../models/adstype';
import { BooleanBaseResponse } from '../../models/boolean-base-response';

export interface ApiAdsTypesIdPut$Json$Params {
  id: number;
      body?: Adstype
}

export function apiAdsTypesIdPut$Json(http: HttpClient, rootUrl: string, params: ApiAdsTypesIdPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanBaseResponse>> {
  const rb = new RequestBuilder(rootUrl, apiAdsTypesIdPut$Json.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {"style":"simple"});
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<BooleanBaseResponse>;
    })
  );
}

apiAdsTypesIdPut$Json.PATH = '/api/AdsTypes/{id}';
