/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiWardGet$Json } from '../fn/ward/api-ward-get-json';
import { ApiWardGet$Json$Params } from '../fn/ward/api-ward-get-json';
import { apiWardGet$Plain } from '../fn/ward/api-ward-get-plain';
import { ApiWardGet$Plain$Params } from '../fn/ward/api-ward-get-plain';
import { WardDtoListBaseResponse } from '../models/ward-dto-list-base-response';

@Injectable({ providedIn: 'root' })
export class WardService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiWardGet()` */
  static readonly ApiWardGetPath = '/api/Ward';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWardGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWardGet$Plain$Response(params?: ApiWardGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<WardDtoListBaseResponse>> {
    return apiWardGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiWardGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWardGet$Plain(params?: ApiWardGet$Plain$Params, context?: HttpContext): Observable<WardDtoListBaseResponse> {
    return this.apiWardGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<WardDtoListBaseResponse>): WardDtoListBaseResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiWardGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWardGet$Json$Response(params?: ApiWardGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<WardDtoListBaseResponse>> {
    return apiWardGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiWardGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiWardGet$Json(params?: ApiWardGet$Json$Params, context?: HttpContext): Observable<WardDtoListBaseResponse> {
    return this.apiWardGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<WardDtoListBaseResponse>): WardDtoListBaseResponse => r.body)
    );
  }

}
