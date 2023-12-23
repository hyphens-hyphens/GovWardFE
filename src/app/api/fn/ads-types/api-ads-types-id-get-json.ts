/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AdstypeBaseResponse } from '../../models/adstype-base-response';

export interface ApiAdsTypesIdGet$Json$Params {
  id: number;
}

export function apiAdsTypesIdGet$Json(http: HttpClient, rootUrl: string, params: ApiAdsTypesIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<AdstypeBaseResponse>> {
  const rb = new RequestBuilder(rootUrl, apiAdsTypesIdGet$Json.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {"style":"simple"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AdstypeBaseResponse>;
    })
  );
}

apiAdsTypesIdGet$Json.PATH = '/api/AdsTypes/{id}';
