/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { BooleanBaseResponse } from '../../models/boolean-base-response';

export interface ApiAdsNewsIdDelete$Json$Params {
  id: number;
}

export function apiAdsNewsIdDelete$Json(http: HttpClient, rootUrl: string, params: ApiAdsNewsIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanBaseResponse>> {
  const rb = new RequestBuilder(rootUrl, apiAdsNewsIdDelete$Json.PATH, 'delete');
  if (params) {
    rb.path('id', params.id, {"style":"simple"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<BooleanBaseResponse>;
    })
  );
}

apiAdsNewsIdDelete$Json.PATH = '/api/AdsNews/{id}';
