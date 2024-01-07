/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiDistrictsGet$Json } from '../fn/districts/api-districts-get-json';
import { ApiDistrictsGet$Json$Params } from '../fn/districts/api-districts-get-json';
import { apiDistrictsGet$Plain } from '../fn/districts/api-districts-get-plain';
import { ApiDistrictsGet$Plain$Params } from '../fn/districts/api-districts-get-plain';
import { apiDistrictsIdDelete } from '../fn/districts/api-districts-id-delete';
import { ApiDistrictsIdDelete$Params } from '../fn/districts/api-districts-id-delete';
import { apiDistrictsIdGet$Json } from '../fn/districts/api-districts-id-get-json';
import { ApiDistrictsIdGet$Json$Params } from '../fn/districts/api-districts-id-get-json';
import { apiDistrictsIdGet$Plain } from '../fn/districts/api-districts-id-get-plain';
import { ApiDistrictsIdGet$Plain$Params } from '../fn/districts/api-districts-id-get-plain';
import { apiDistrictsIdPut } from '../fn/districts/api-districts-id-put';
import { ApiDistrictsIdPut$Params } from '../fn/districts/api-districts-id-put';
import { apiDistrictsPost$Json } from '../fn/districts/api-districts-post-json';
import { ApiDistrictsPost$Json$Params } from '../fn/districts/api-districts-post-json';
import { apiDistrictsPost$Plain } from '../fn/districts/api-districts-post-plain';
import { ApiDistrictsPost$Plain$Params } from '../fn/districts/api-districts-post-plain';
import { District } from '../models/district';

@Injectable({ providedIn: 'root' })
export class DistrictsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiDistrictsGet()` */
  static readonly ApiDistrictsGetPath = '/api/Districts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDistrictsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDistrictsGet$Plain$Response(params?: ApiDistrictsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<District>>> {
    return apiDistrictsGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDistrictsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDistrictsGet$Plain(params?: ApiDistrictsGet$Plain$Params, context?: HttpContext): Observable<Array<District>> {
    return this.apiDistrictsGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<District>>): Array<District> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDistrictsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDistrictsGet$Json$Response(params?: ApiDistrictsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<District>>> {
    return apiDistrictsGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDistrictsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDistrictsGet$Json(params?: ApiDistrictsGet$Json$Params, context?: HttpContext): Observable<Array<District>> {
    return this.apiDistrictsGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<District>>): Array<District> => r.body)
    );
  }

  /** Path part for operation `apiDistrictsPost()` */
  static readonly ApiDistrictsPostPath = '/api/Districts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDistrictsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDistrictsPost$Plain$Response(params?: ApiDistrictsPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<District>> {
    return apiDistrictsPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDistrictsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDistrictsPost$Plain(params?: ApiDistrictsPost$Plain$Params, context?: HttpContext): Observable<District> {
    return this.apiDistrictsPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<District>): District => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDistrictsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDistrictsPost$Json$Response(params?: ApiDistrictsPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<District>> {
    return apiDistrictsPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDistrictsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDistrictsPost$Json(params?: ApiDistrictsPost$Json$Params, context?: HttpContext): Observable<District> {
    return this.apiDistrictsPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<District>): District => r.body)
    );
  }

  /** Path part for operation `apiDistrictsIdGet()` */
  static readonly ApiDistrictsIdGetPath = '/api/Districts/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDistrictsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDistrictsIdGet$Plain$Response(params: ApiDistrictsIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<District>> {
    return apiDistrictsIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDistrictsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDistrictsIdGet$Plain(params: ApiDistrictsIdGet$Plain$Params, context?: HttpContext): Observable<District> {
    return this.apiDistrictsIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<District>): District => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDistrictsIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDistrictsIdGet$Json$Response(params: ApiDistrictsIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<District>> {
    return apiDistrictsIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDistrictsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDistrictsIdGet$Json(params: ApiDistrictsIdGet$Json$Params, context?: HttpContext): Observable<District> {
    return this.apiDistrictsIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<District>): District => r.body)
    );
  }

  /** Path part for operation `apiDistrictsIdPut()` */
  static readonly ApiDistrictsIdPutPath = '/api/Districts/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDistrictsIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDistrictsIdPut$Response(params: ApiDistrictsIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiDistrictsIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDistrictsIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDistrictsIdPut(params: ApiDistrictsIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiDistrictsIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiDistrictsIdDelete()` */
  static readonly ApiDistrictsIdDeletePath = '/api/Districts/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDistrictsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDistrictsIdDelete$Response(params: ApiDistrictsIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiDistrictsIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDistrictsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDistrictsIdDelete(params: ApiDistrictsIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiDistrictsIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
