/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Adslocation } from '../../models/adslocation';

export interface ApiAdslocationsIdGet$Plain$Params {
  id: number;
}

export function apiAdslocationsIdGet$Plain(http: HttpClient, rootUrl: string, params: ApiAdslocationsIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Adslocation>> {
  const rb = new RequestBuilder(rootUrl, apiAdslocationsIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {"style":"simple"});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Adslocation>;
    })
  );
}

apiAdslocationsIdGet$Plain.PATH = '/api/Adslocations/{id}';
