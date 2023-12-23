/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AdslocationListBaseResponse } from '../../models/adslocation-list-base-response';

export interface ApiAdsLocationsGet$Plain$Params {
}

export function apiAdsLocationsGet$Plain(http: HttpClient, rootUrl: string, params?: ApiAdsLocationsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<AdslocationListBaseResponse>> {
  const rb = new RequestBuilder(rootUrl, apiAdsLocationsGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AdslocationListBaseResponse>;
    })
  );
}

apiAdsLocationsGet$Plain.PATH = '/api/AdsLocations';
