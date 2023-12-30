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
import { BooleanBaseResponse } from '../models/boolean-base-response';
import { ReportwarningBaseResponse } from '../models/reportwarning-base-response';
import { ReportwarningListBaseResponse } from '../models/reportwarning-list-base-response';

@Injectable({ providedIn: 'root' })
export class ReportWarningsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiReportWarningsGet()` */
  static readonly ApiReportWarningsGetPath = '/api/ReportWarnings';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReportWarningsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReportWarningsGet$Plain$Response(params?: ApiReportWarningsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ReportwarningListBaseResponse>> {
    return apiReportWarningsGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReportWarningsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReportWarningsGet$Plain(params?: ApiReportWarningsGet$Plain$Params, context?: HttpContext): Observable<ReportwarningListBaseResponse> {
    return this.apiReportWarningsGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReportwarningListBaseResponse>): ReportwarningListBaseResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReportWarningsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReportWarningsGet$Json$Response(params?: ApiReportWarningsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ReportwarningListBaseResponse>> {
    return apiReportWarningsGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReportWarningsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReportWarningsGet$Json(params?: ApiReportWarningsGet$Json$Params, context?: HttpContext): Observable<ReportwarningListBaseResponse> {
    return this.apiReportWarningsGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReportwarningListBaseResponse>): ReportwarningListBaseResponse => r.body)
    );
  }

  /** Path part for operation `apiReportWarningsPost()` */
  static readonly ApiReportWarningsPostPath = '/api/ReportWarnings';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReportWarningsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReportWarningsPost$Plain$Response(params?: ApiReportWarningsPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ReportwarningBaseResponse>> {
    return apiReportWarningsPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReportWarningsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReportWarningsPost$Plain(params?: ApiReportWarningsPost$Plain$Params, context?: HttpContext): Observable<ReportwarningBaseResponse> {
    return this.apiReportWarningsPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReportwarningBaseResponse>): ReportwarningBaseResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReportWarningsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReportWarningsPost$Json$Response(params?: ApiReportWarningsPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ReportwarningBaseResponse>> {
    return apiReportWarningsPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReportWarningsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReportWarningsPost$Json(params?: ApiReportWarningsPost$Json$Params, context?: HttpContext): Observable<ReportwarningBaseResponse> {
    return this.apiReportWarningsPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReportwarningBaseResponse>): ReportwarningBaseResponse => r.body)
    );
  }

  /** Path part for operation `apiReportWarningsIdGet()` */
  static readonly ApiReportWarningsIdGetPath = '/api/ReportWarnings/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReportWarningsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReportWarningsIdGet$Plain$Response(params: ApiReportWarningsIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ReportwarningBaseResponse>> {
    return apiReportWarningsIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReportWarningsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReportWarningsIdGet$Plain(params: ApiReportWarningsIdGet$Plain$Params, context?: HttpContext): Observable<ReportwarningBaseResponse> {
    return this.apiReportWarningsIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReportwarningBaseResponse>): ReportwarningBaseResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReportWarningsIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReportWarningsIdGet$Json$Response(params: ApiReportWarningsIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ReportwarningBaseResponse>> {
    return apiReportWarningsIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReportWarningsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReportWarningsIdGet$Json(params: ApiReportWarningsIdGet$Json$Params, context?: HttpContext): Observable<ReportwarningBaseResponse> {
    return this.apiReportWarningsIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReportwarningBaseResponse>): ReportwarningBaseResponse => r.body)
    );
  }

  /** Path part for operation `apiReportWarningsIdPut()` */
  static readonly ApiReportWarningsIdPutPath = '/api/ReportWarnings/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReportWarningsIdPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReportWarningsIdPut$Plain$Response(params: ApiReportWarningsIdPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanBaseResponse>> {
    return apiReportWarningsIdPut$Plain(this.http, this.rootUrl, params, context);
  }

  /**
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
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReportWarningsIdPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReportWarningsIdPut$Json$Response(params: ApiReportWarningsIdPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanBaseResponse>> {
    return apiReportWarningsIdPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
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
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReportWarningsIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReportWarningsIdDelete$Plain$Response(params: ApiReportWarningsIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanBaseResponse>> {
    return apiReportWarningsIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
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
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReportWarningsIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReportWarningsIdDelete$Json$Response(params: ApiReportWarningsIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanBaseResponse>> {
    return apiReportWarningsIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
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

}
