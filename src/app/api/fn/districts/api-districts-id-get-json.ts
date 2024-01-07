/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { District } from '../../models/district';

export interface ApiDistrictsIdGet$Json$Params {
  id: number;
}

export function apiDistrictsIdGet$Json(http: HttpClient, rootUrl: string, params: ApiDistrictsIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<District>> {
  const rb = new RequestBuilder(rootUrl, apiDistrictsIdGet$Json.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {"style":"simple"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<District>;
    })
  );
}

apiDistrictsIdGet$Json.PATH = '/api/Districts/{id}';
