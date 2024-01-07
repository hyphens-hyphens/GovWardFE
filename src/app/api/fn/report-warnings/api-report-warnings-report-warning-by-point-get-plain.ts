/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PointPosition } from '../../models/point-position';
import { ReportWarningBaseResponse } from '../../models/report-warning-base-response';

export interface ApiReportWarningsReportWarningByPointGet$Plain$Params {
      body?: PointPosition
}

export function apiReportWarningsReportWarningByPointGet$Plain(http: HttpClient, rootUrl: string, params?: ApiReportWarningsReportWarningByPointGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ReportWarningBaseResponse>> {
  const rb = new RequestBuilder(rootUrl, apiReportWarningsReportWarningByPointGet$Plain.PATH, 'get');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ReportWarningBaseResponse>;
    })
  );
}

apiReportWarningsReportWarningByPointGet$Plain.PATH = '/api/ReportWarnings/report-warning-by-point';
