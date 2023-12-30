/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ReportwarningBaseResponse } from '../../models/reportwarning-base-response';

export interface ApiReportWarningsIdGet$Plain$Params {
  id: number;
}

export function apiReportWarningsIdGet$Plain(http: HttpClient, rootUrl: string, params: ApiReportWarningsIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ReportwarningBaseResponse>> {
  const rb = new RequestBuilder(rootUrl, apiReportWarningsIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {"style":"simple"});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ReportwarningBaseResponse>;
    })
  );
}

apiReportWarningsIdGet$Plain.PATH = '/api/ReportWarnings/{id}';
