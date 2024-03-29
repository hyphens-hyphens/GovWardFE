/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ReportWarningBaseResponse } from '../../models/report-warning-base-response';

export interface ApiReportWarningsIdGet$Json$Params {

/**
 * id của reportwarning muốn tìm kiếm
 */
  id: number;
}

export function apiReportWarningsIdGet$Json(http: HttpClient, rootUrl: string, params: ApiReportWarningsIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ReportWarningBaseResponse>> {
  const rb = new RequestBuilder(rootUrl, apiReportWarningsIdGet$Json.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {"style":"simple"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ReportWarningBaseResponse>;
    })
  );
}

apiReportWarningsIdGet$Json.PATH = '/api/ReportWarnings/{id}';
