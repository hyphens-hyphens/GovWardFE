/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AdstypeIEnumerableBaseResponse } from '../../models/adstype-i-enumerable-base-response';

export interface ApiAdsTypesGet$Json$Params {
}

export function apiAdsTypesGet$Json(http: HttpClient, rootUrl: string, params?: ApiAdsTypesGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<AdstypeIEnumerableBaseResponse>> {
  const rb = new RequestBuilder(rootUrl, apiAdsTypesGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AdstypeIEnumerableBaseResponse>;
    })
  );
}

apiAdsTypesGet$Json.PATH = '/api/AdsTypes';
