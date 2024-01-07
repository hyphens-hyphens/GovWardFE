/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { District } from '../../models/district';

export interface ApiDistrictsGet$Plain$Params {
}

export function apiDistrictsGet$Plain(http: HttpClient, rootUrl: string, params?: ApiDistrictsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<District>>> {
  const rb = new RequestBuilder(rootUrl, apiDistrictsGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<District>>;
    })
  );
}

apiDistrictsGet$Plain.PATH = '/api/Districts';
