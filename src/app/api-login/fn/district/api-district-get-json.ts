/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DistrictDtoListBaseResponse } from '../../models/district-dto-list-base-response';

export interface ApiDistrictGet$Json$Params {
}

export function apiDistrictGet$Json(http: HttpClient, rootUrl: string, params?: ApiDistrictGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<DistrictDtoListBaseResponse>> {
  const rb = new RequestBuilder(rootUrl, apiDistrictGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<DistrictDtoListBaseResponse>;
    })
  );
}

apiDistrictGet$Json.PATH = '/api/District';
