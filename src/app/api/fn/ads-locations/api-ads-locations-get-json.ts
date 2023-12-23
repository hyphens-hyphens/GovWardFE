/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AdslocationListBaseResponse } from '../../models/adslocation-list-base-response';

export interface ApiAdsLocationsGet$Json$Params {
}

export function apiAdsLocationsGet$Json(http: HttpClient, rootUrl: string, params?: ApiAdsLocationsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<AdslocationListBaseResponse>> {
  const rb = new RequestBuilder(rootUrl, apiAdsLocationsGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AdslocationListBaseResponse>;
    })
  );
}

apiAdsLocationsGet$Json.PATH = '/api/AdsLocations';
