/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiReportWarningsGet$Json } from '../fn/report-warnings/api-report-warnings-get-json';
import { ApiReportWarningsGet$Json$Params } from '../fn/report-warnings/api-report-warnings-get-json';
import { apiReportWarningsGet$Plain } from '../fn/report-warnings/api-report-warnings-get-plain';
import { ApiReportWarningsGet$Plain$Params } from '../fn/report-warnings/api-report-warnings-get-plain';
import { apiReportWarningsIdDelete$Json } from '../fn/report-warnings/api-report-warnings-id-delete-json';
import { ApiReportWarningsIdDelete$Json$Params } from '../fn/report-warnings/api-report-warnings-id-delete-json';
import { apiReportWarningsIdDelete$Plain } from '../fn/report-warnings/api-report-warnings-id-delete-plain';
import { ApiReportWarningsIdDelete$Plain$Params } from '../fn/report-warnings/api-report-warnings-id-delete-plain';
import { apiReportWarningsIdGet$Json } from '../fn/report-warnings/api-report-warnings-id-get-json';
import { ApiReportWarningsIdGet$Json$Params } from '../fn/report-warnings/api-report-warnings-id-get-json';
import { apiReportWarningsIdGet$Plain } from '../fn/report-warnings/api-report-warnings-id-get-plain';
import { ApiReportWarningsIdGet$Plain$Params } from '../fn/report-warnings/api-report-warnings-id-get-plain';
import { apiReportWarningsIdPut$Json } from '../fn/report-warnings/api-report-warnings-id-put-json';
import { ApiReportWarningsIdPut$Json$Params } from '../fn/report-warnings/api-report-warnings-id-put-json';
import { apiReportWarningsIdPut$Plain } from '../fn/report-warnings/api-report-warnings-id-put-plain';
import { ApiReportWarningsIdPut$Plain$Params } from '../fn/report-warnings/api-report-warnings-id-put-plain';
import { apiReportWarningsPost$Json } from '../fn/report-warnings/api-report-warnings-post-json';
import { ApiReportWarningsPost$Json$Params } from '../fn/report-warnings/api-report-warnings-post-json';
import { apiReportWarningsPost$Plain } from '../fn/report-warnings/api-report-warnings-post-plain';
import { ApiReportWarningsPost$Plain$Params } from '../fn/report-warnings/api-report-warnings-post-plain';
import { apiReportWarningsReportWarningByPointGet$Json } from '../fn/report-warnings/api-report-warnings-report-warning-by-point-get-json';
import { ApiReportWarningsReportWarningByPointGet$Json$Params } from '../fn/report-warnings/api-report-warnings-report-warning-by-point-get-json';
import { apiReportWarningsReportWarningByPointGet$Plain } from '../fn/report-warnings/api-report-warnings-report-warning-by-point-get-plain';
import { ApiReportWarningsReportWarningByPointGet$Plain$Params } from '../fn/report-warnings/api-report-warnings-report-warning-by-point-get-plain';
import { apiReportWarningsUpdateStatusPost$Json } from '../fn/report-warnings/api-report-warnings-update-status-post-json';
import { ApiReportWarningsUpdateStatusPost$Json$Params } from '../fn/report-warnings/api-report-warnings-update-status-post-json';
import { apiReportWarningsUpdateStatusPost$Plain } from '../fn/report-warnings/api-report-warnings-update-status-post-plain';
import { ApiReportWarningsUpdateStatusPost$Plain$Params } from '../fn/report-warnings/api-report-warnings-update-status-post-plain';
import { BooleanBaseResponse } from '../models/boolean-base-response';
import { ReportWarningBaseResponse } from '../models/report-warning-base-response';
import { ReportWarningListBaseResponse } from '../models/report-warning-list-base-response';

@Injectable({ providedIn: 'root' })
export class ReportWarningsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiReportWarningsGet()` */
  static readonly ApiReportWarningsGetPath = '/api/ReportWarnings';

  /**
   * Lấy thông tin bảng reportwarning.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReportWarningsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReportWarningsGet$Plain$Response(params?: ApiReportWarningsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ReportWarningListBaseResponse>> {
    return apiReportWarningsGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy thông tin bảng reportwarning.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReportWarningsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReportWarningsGet$Plain(params?: ApiReportWarningsGet$Plain$Params, context?: HttpContext): Observable<ReportWarningListBaseResponse> {
    return this.apiReportWarningsGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReportWarningListBaseResponse>): ReportWarningListBaseResponse => r.body)
    );
  }

  /**
   * Lấy thông tin bảng reportwarning.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReportWarningsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReportWarningsGet$Json$Response(params?: ApiReportWarningsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ReportWarningListBaseResponse>> {
    return apiReportWarningsGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy thông tin bảng reportwarning.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReportWarningsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReportWarningsGet$Json(params?: ApiReportWarningsGet$Json$Params, context?: HttpContext): Observable<ReportWarningListBaseResponse> {
    return this.apiReportWarningsGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReportWarningListBaseResponse>): ReportWarningListBaseResponse => r.body)
    );
  }

  /** Path part for operation `apiReportWarningsPost()` */
  static readonly ApiReportWarningsPostPath = '/api/ReportWarnings';

  /**
   * Thêm 1 reportwarning mới.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReportWarningsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReportWarningsPost$Plain$Response(params?: ApiReportWarningsPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ReportWarningBaseResponse>> {
    return apiReportWarningsPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Thêm 1 reportwarning mới.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReportWarningsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReportWarningsPost$Plain(params?: ApiReportWarningsPost$Plain$Params, context?: HttpContext): Observable<ReportWarningBaseResponse> {
    return this.apiReportWarningsPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReportWarningBaseResponse>): ReportWarningBaseResponse => r.body)
    );
  }

  /**
   * Thêm 1 reportwarning mới.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReportWarningsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReportWarningsPost$Json$Response(params?: ApiReportWarningsPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ReportWarningBaseResponse>> {
    return apiReportWarningsPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Thêm 1 reportwarning mới.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReportWarningsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReportWarningsPost$Json(params?: ApiReportWarningsPost$Json$Params, context?: HttpContext): Observable<ReportWarningBaseResponse> {
    return this.apiReportWarningsPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReportWarningBaseResponse>): ReportWarningBaseResponse => r.body)
    );
  }

  /** Path part for operation `apiReportWarningsIdGet()` */
  static readonly ApiReportWarningsIdGetPath = '/api/ReportWarnings/{id}';

  /**
   * Lấy thông tin reportwarning của id vừa nhập.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReportWarningsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReportWarningsIdGet$Plain$Response(params: ApiReportWarningsIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ReportWarningBaseResponse>> {
    return apiReportWarningsIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy thông tin reportwarning của id vừa nhập.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReportWarningsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReportWarningsIdGet$Plain(params: ApiReportWarningsIdGet$Plain$Params, context?: HttpContext): Observable<ReportWarningBaseResponse> {
    return this.apiReportWarningsIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReportWarningBaseResponse>): ReportWarningBaseResponse => r.body)
    );
  }

  /**
   * Lấy thông tin reportwarning của id vừa nhập.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReportWarningsIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReportWarningsIdGet$Json$Response(params: ApiReportWarningsIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ReportWarningBaseResponse>> {
    return apiReportWarningsIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy thông tin reportwarning của id vừa nhập.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReportWarningsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReportWarningsIdGet$Json(params: ApiReportWarningsIdGet$Json$Params, context?: HttpContext): Observable<ReportWarningBaseResponse> {
    return this.apiReportWarningsIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReportWarningBaseResponse>): ReportWarningBaseResponse => r.body)
    );
  }

  /** Path part for operation `apiReportWarningsIdPut()` */
  static readonly ApiReportWarningsIdPutPath = '/api/ReportWarnings/{id}';

  /**
   * Update thông tin 1 reportwarning của id vừa nhập.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReportWarningsIdPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReportWarningsIdPut$Plain$Response(params: ApiReportWarningsIdPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanBaseResponse>> {
    return apiReportWarningsIdPut$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Update thông tin 1 reportwarning của id vừa nhập.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReportWarningsIdPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReportWarningsIdPut$Plain(params: ApiReportWarningsIdPut$Plain$Params, context?: HttpContext): Observable<BooleanBaseResponse> {
    return this.apiReportWarningsIdPut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanBaseResponse>): BooleanBaseResponse => r.body)
    );
  }

  /**
   * Update thông tin 1 reportwarning của id vừa nhập.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReportWarningsIdPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReportWarningsIdPut$Json$Response(params: ApiReportWarningsIdPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanBaseResponse>> {
    return apiReportWarningsIdPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Update thông tin 1 reportwarning của id vừa nhập.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReportWarningsIdPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReportWarningsIdPut$Json(params: ApiReportWarningsIdPut$Json$Params, context?: HttpContext): Observable<BooleanBaseResponse> {
    return this.apiReportWarningsIdPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanBaseResponse>): BooleanBaseResponse => r.body)
    );
  }

  /** Path part for operation `apiReportWarningsIdDelete()` */
  static readonly ApiReportWarningsIdDeletePath = '/api/ReportWarnings/{id}';

  /**
   * Xóa 1 reportwarning theo id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReportWarningsIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReportWarningsIdDelete$Plain$Response(params: ApiReportWarningsIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanBaseResponse>> {
    return apiReportWarningsIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Xóa 1 reportwarning theo id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReportWarningsIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReportWarningsIdDelete$Plain(params: ApiReportWarningsIdDelete$Plain$Params, context?: HttpContext): Observable<BooleanBaseResponse> {
    return this.apiReportWarningsIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanBaseResponse>): BooleanBaseResponse => r.body)
    );
  }

  /**
   * Xóa 1 reportwarning theo id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReportWarningsIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReportWarningsIdDelete$Json$Response(params: ApiReportWarningsIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanBaseResponse>> {
    return apiReportWarningsIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Xóa 1 reportwarning theo id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReportWarningsIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReportWarningsIdDelete$Json(params: ApiReportWarningsIdDelete$Json$Params, context?: HttpContext): Observable<BooleanBaseResponse> {
    return this.apiReportWarningsIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanBaseResponse>): BooleanBaseResponse => r.body)
    );
  }

  /** Path part for operation `apiReportWarningsUpdateStatusPost()` */
  static readonly ApiReportWarningsUpdateStatusPostPath = '/api/ReportWarnings/update-status';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReportWarningsUpdateStatusPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReportWarningsUpdateStatusPost$Plain$Response(params?: ApiReportWarningsUpdateStatusPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanBaseResponse>> {
    return apiReportWarningsUpdateStatusPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReportWarningsUpdateStatusPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReportWarningsUpdateStatusPost$Plain(params?: ApiReportWarningsUpdateStatusPost$Plain$Params, context?: HttpContext): Observable<BooleanBaseResponse> {
    return this.apiReportWarningsUpdateStatusPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanBaseResponse>): BooleanBaseResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReportWarningsUpdateStatusPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReportWarningsUpdateStatusPost$Json$Response(params?: ApiReportWarningsUpdateStatusPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanBaseResponse>> {
    return apiReportWarningsUpdateStatusPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReportWarningsUpdateStatusPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReportWarningsUpdateStatusPost$Json(params?: ApiReportWarningsUpdateStatusPost$Json$Params, context?: HttpContext): Observable<BooleanBaseResponse> {
    return this.apiReportWarningsUpdateStatusPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanBaseResponse>): BooleanBaseResponse => r.body)
    );
  }

  /** Path part for operation `apiReportWarningsReportWarningByPointGet()` */
  static readonly ApiReportWarningsReportWarningByPointGetPath = '/api/ReportWarnings/report-warning-by-point';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReportWarningsReportWarningByPointGet$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReportWarningsReportWarningByPointGet$Plain$Response(params?: ApiReportWarningsReportWarningByPointGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ReportWarningBaseResponse>> {
    return apiReportWarningsReportWarningByPointGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReportWarningsReportWarningByPointGet$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReportWarningsReportWarningByPointGet$Plain(params?: ApiReportWarningsReportWarningByPointGet$Plain$Params, context?: HttpContext): Observable<ReportWarningBaseResponse> {
    return this.apiReportWarningsReportWarningByPointGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReportWarningBaseResponse>): ReportWarningBaseResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReportWarningsReportWarningByPointGet$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReportWarningsReportWarningByPointGet$Json$Response(params?: ApiReportWarningsReportWarningByPointGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ReportWarningBaseResponse>> {
    return apiReportWarningsReportWarningByPointGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReportWarningsReportWarningByPointGet$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReportWarningsReportWarningByPointGet$Json(params?: ApiReportWarningsReportWarningByPointGet$Json$Params, context?: HttpContext): Observable<ReportWarningBaseResponse> {
    return this.apiReportWarningsReportWarningByPointGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReportWarningBaseResponse>): ReportWarningBaseResponse => r.body)
    );
  }

}
