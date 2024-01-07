/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { BooleanBaseResponse } from '../../models/boolean-base-response';
import { UpdateStatusRequest } from '../../models/update-status-request';

export interface ApiReportWarningsUpdateStatusPost$Json$Params {
      body?: UpdateStatusRequest
}

export function apiReportWarningsUpdateStatusPost$Json(http: HttpClient, rootUrl: string, params?: ApiReportWarningsUpdateStatusPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanBaseResponse>> {
  const rb = new RequestBuilder(rootUrl, apiReportWarningsUpdateStatusPost$Json.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
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

apiReportWarningsUpdateStatusPost$Json.PATH = '/api/ReportWarnings/update-status';
