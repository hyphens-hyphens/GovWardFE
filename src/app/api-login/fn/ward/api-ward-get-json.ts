/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { WardDtoListBaseResponse } from '../../models/ward-dto-list-base-response';

export interface ApiWardGet$Json$Params {
}

export function apiWardGet$Json(http: HttpClient, rootUrl: string, params?: ApiWardGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<WardDtoListBaseResponse>> {
  const rb = new RequestBuilder(rootUrl, apiWardGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<WardDtoListBaseResponse>;
    })
  );
}

apiWardGet$Json.PATH = '/api/Ward';
