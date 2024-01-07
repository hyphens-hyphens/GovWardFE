/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ReportWarning } from '../../models/report-warning';
import { ReportWarningBaseResponse } from '../../models/report-warning-base-response';

export interface ApiReportWarningsPost$Plain$Params {
  
    /**
     * Thông tin của reportwarning mới
     */
    body?: ReportWarning
}

export function apiReportWarningsPost$Plain(http: HttpClient, rootUrl: string, params?: ApiReportWarningsPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ReportWarningBaseResponse>> {
  const rb = new RequestBuilder(rootUrl, apiReportWarningsPost$Plain.PATH, 'post');
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

apiReportWarningsPost$Plain.PATH = '/api/ReportWarnings';
