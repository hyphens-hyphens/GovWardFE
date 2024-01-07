/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AdsnewBaseResponse } from '../../models/adsnew-base-response';

export interface ApiAdsNewsIdGet$Plain$Params {

/**
 * id của adsnew muốn tìm kiếm
 */
  id: number;
}

export function apiAdsNewsIdGet$Plain(http: HttpClient, rootUrl: string, params: ApiAdsNewsIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<AdsnewBaseResponse>> {
  const rb = new RequestBuilder(rootUrl, apiAdsNewsIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {"style":"simple"});
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

apiAdsNewsIdGet$Plain.PATH = '/api/AdsNews/{id}';
