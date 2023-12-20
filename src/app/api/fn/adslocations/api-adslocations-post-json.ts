/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Adslocation } from '../../models/adslocation';

export interface ApiAdslocationsPost$Json$Params {
      body?: Adslocation
}

export function apiAdslocationsPost$Json(http: HttpClient, rootUrl: string, params?: ApiAdslocationsPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Adslocation>> {
  const rb = new RequestBuilder(rootUrl, apiAdslocationsPost$Json.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Adslocation>;
    })
  );
}

apiAdslocationsPost$Json.PATH = '/api/Adslocations';
