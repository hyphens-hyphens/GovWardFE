/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { District } from '../../models/district';

export interface ApiDistrictsGet$Json$Params {
}

export function apiDistrictsGet$Json(http: HttpClient, rootUrl: string, params?: ApiDistrictsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<District>>> {
  const rb = new RequestBuilder(rootUrl, apiDistrictsGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<District>>;
    })
  );
}

apiDistrictsGet$Json.PATH = '/api/Districts';
