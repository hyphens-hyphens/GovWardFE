/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ReportwarningListBaseResponse } from '../../models/reportwarning-list-base-response';

export interface ApiReportWarningsGet$Plain$Params {
}

export function apiReportWarningsGet$Plain(http: HttpClient, rootUrl: string, params?: ApiReportWarningsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ReportwarningListBaseResponse>> {
  const rb = new RequestBuilder(rootUrl, apiReportWarningsGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ReportwarningListBaseResponse>;
    })
  );
}

apiReportWarningsGet$Plain.PATH = '/api/ReportWarnings';
