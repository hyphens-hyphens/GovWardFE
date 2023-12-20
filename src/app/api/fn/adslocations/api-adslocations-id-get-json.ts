/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Adslocation } from '../../models/adslocation';

export interface ApiAdslocationsIdGet$Json$Params {
  id: number;
}

export function apiAdslocationsIdGet$Json(http: HttpClient, rootUrl: string, params: ApiAdslocationsIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Adslocation>> {
  const rb = new RequestBuilder(rootUrl, apiAdslocationsIdGet$Json.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {"style":"simple"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Adslocation>;
    })
  );
}

apiAdslocationsIdGet$Json.PATH = '/api/Adslocations/{id}';
