/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { District } from '../../models/district';

export interface ApiDistrictsIdGet$Plain$Params {
  id: number;
}

export function apiDistrictsIdGet$Plain(http: HttpClient, rootUrl: string, params: ApiDistrictsIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<District>> {
  const rb = new RequestBuilder(rootUrl, apiDistrictsIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {"style":"simple"});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<District>;
    })
  );
}

apiDistrictsIdGet$Plain.PATH = '/api/Districts/{id}';
