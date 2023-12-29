/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DistrictDtoListBaseResponse } from '../../models/district-dto-list-base-response';

export interface ApiDistrictGet$Plain$Params {
}

export function apiDistrictGet$Plain(http: HttpClient, rootUrl: string, params?: ApiDistrictGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<DistrictDtoListBaseResponse>> {
  const rb = new RequestBuilder(rootUrl, apiDistrictGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<DistrictDtoListBaseResponse>;
    })
  );
}

apiDistrictGet$Plain.PATH = '/api/District';
