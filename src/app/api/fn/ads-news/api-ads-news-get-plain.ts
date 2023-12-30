/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AdsnewListBaseResponse } from '../../models/adsnew-list-base-response';

export interface ApiAdsNewsGet$Plain$Params {
}

export function apiAdsNewsGet$Plain(http: HttpClient, rootUrl: string, params?: ApiAdsNewsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<AdsnewListBaseResponse>> {
  const rb = new RequestBuilder(rootUrl, apiAdsNewsGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AdsnewListBaseResponse>;
    })
  );
}

apiAdsNewsGet$Plain.PATH = '/api/AdsNews';
