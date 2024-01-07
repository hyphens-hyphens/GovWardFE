/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Reportwarning } from '../../models/reportwarning';
import { ReportwarningBaseResponse } from '../../models/reportwarning-base-response';

export interface ApiReportWarningsPost$Json$Params {
  
    /**
     * Thông tin của reportwarning mới
     */
    body?: Reportwarning
}

export function apiReportWarningsPost$Json(http: HttpClient, rootUrl: string, params?: ApiReportWarningsPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ReportwarningBaseResponse>> {
  const rb = new RequestBuilder(rootUrl, apiReportWarningsPost$Json.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ReportwarningBaseResponse>;
    })
  );
}

apiReportWarningsPost$Json.PATH = '/api/ReportWarnings';
