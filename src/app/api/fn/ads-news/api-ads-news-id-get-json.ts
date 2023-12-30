/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AdsnewBaseResponse } from '../../models/adsnew-base-response';

export interface ApiAdsNewsIdGet$Json$Params {
  id: number;
}

export function apiAdsNewsIdGet$Json(http: HttpClient, rootUrl: string, params: ApiAdsNewsIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<AdsnewBaseResponse>> {
  const rb = new RequestBuilder(rootUrl, apiAdsNewsIdGet$Json.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {"style":"simple"});
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

apiAdsNewsIdGet$Json.PATH = '/api/AdsNews/{id}';
