/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AdslocationBaseResponse } from '../../models/adslocation-base-response';

export interface ApiAdsLocationsIdGet$Plain$Params {
  id: number;
}

export function apiAdsLocationsIdGet$Plain(http: HttpClient, rootUrl: string, params: ApiAdsLocationsIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<AdslocationBaseResponse>> {
  const rb = new RequestBuilder(rootUrl, apiAdsLocationsIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {"style":"simple"});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AdslocationBaseResponse>;
    })
  );
}

apiAdsLocationsIdGet$Plain.PATH = '/api/AdsLocations/{id}';
