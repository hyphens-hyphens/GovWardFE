/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserAppListBaseResponse } from '../../models/user-app-list-base-response';

export interface ApiUsersGet$Plain$Params {
}

export function apiUsersGet$Plain(http: HttpClient, rootUrl: string, params?: ApiUsersGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<UserAppListBaseResponse>> {
  const rb = new RequestBuilder(rootUrl, apiUsersGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UserAppListBaseResponse>;
    })
  );
}

apiUsersGet$Plain.PATH = '/api/Users';
