/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AdslocationBaseResponse } from '../../models/adslocation-base-response';

export interface ApiAdsLocationsIdGet$Json$Params {

/**
 * id điểm quảng cáo
 */
  id: number;
}

export function apiAdsLocationsIdGet$Json(http: HttpClient, rootUrl: string, params: ApiAdsLocationsIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<AdslocationBaseResponse>> {
  const rb = new RequestBuilder(rootUrl, apiAdsLocationsIdGet$Json.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {"style":"simple"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AdslocationBaseResponse>;
    })
  );
}

apiAdsLocationsIdGet$Json.PATH = '/api/AdsLocations/{id}';
