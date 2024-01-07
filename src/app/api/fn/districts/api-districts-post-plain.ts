/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { District } from '../../models/district';

export interface ApiDistrictsPost$Plain$Params {
      body?: District
}

export function apiDistrictsPost$Plain(http: HttpClient, rootUrl: string, params?: ApiDistrictsPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<District>> {
  const rb = new RequestBuilder(rootUrl, apiDistrictsPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
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

apiDistrictsPost$Plain.PATH = '/api/Districts';
