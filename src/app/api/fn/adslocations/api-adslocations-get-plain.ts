/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Adslocation } from '../../models/adslocation';

export interface ApiAdslocationsGet$Plain$Params {
}

export function apiAdslocationsGet$Plain(http: HttpClient, rootUrl: string, params?: ApiAdslocationsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Adslocation>>> {
  const rb = new RequestBuilder(rootUrl, apiAdslocationsGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Adslocation>>;
    })
  );
}

apiAdslocationsGet$Plain.PATH = '/api/Adslocations';
