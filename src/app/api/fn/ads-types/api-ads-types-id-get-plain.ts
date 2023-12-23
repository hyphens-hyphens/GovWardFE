/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AdstypeBaseResponse } from '../../models/adstype-base-response';

export interface ApiAdsTypesIdGet$Plain$Params {
  id: number;
}

export function apiAdsTypesIdGet$Plain(http: HttpClient, rootUrl: string, params: ApiAdsTypesIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<AdstypeBaseResponse>> {
  const rb = new RequestBuilder(rootUrl, apiAdsTypesIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {"style":"simple"});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AdstypeBaseResponse>;
    })
  );
}

apiAdsTypesIdGet$Plain.PATH = '/api/AdsTypes/{id}';
