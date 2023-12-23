/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AdstypeIEnumerableBaseResponse } from '../../models/adstype-i-enumerable-base-response';

export interface ApiAdsTypesGet$Plain$Params {
}

export function apiAdsTypesGet$Plain(http: HttpClient, rootUrl: string, params?: ApiAdsTypesGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<AdstypeIEnumerableBaseResponse>> {
  const rb = new RequestBuilder(rootUrl, apiAdsTypesGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AdstypeIEnumerableBaseResponse>;
    })
  );
}

apiAdsTypesGet$Plain.PATH = '/api/AdsTypes';
