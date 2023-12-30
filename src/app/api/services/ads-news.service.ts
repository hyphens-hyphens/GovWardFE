/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { AdsnewBaseResponse } from '../models/adsnew-base-response';
import { AdsnewListBaseResponse } from '../models/adsnew-list-base-response';
import { apiAdsNewsGet$Json } from '../fn/ads-news/api-ads-news-get-json';
import { ApiAdsNewsGet$Json$Params } from '../fn/ads-news/api-ads-news-get-json';
import { apiAdsNewsGet$Plain } from '../fn/ads-news/api-ads-news-get-plain';
import { ApiAdsNewsGet$Plain$Params } from '../fn/ads-news/api-ads-news-get-plain';
import { apiAdsNewsIdDelete$Json } from '../fn/ads-news/api-ads-news-id-delete-json';
import { ApiAdsNewsIdDelete$Json$Params } from '../fn/ads-news/api-ads-news-id-delete-json';
import { apiAdsNewsIdDelete$Plain } from '../fn/ads-news/api-ads-news-id-delete-plain';
import { ApiAdsNewsIdDelete$Plain$Params } from '../fn/ads-news/api-ads-news-id-delete-plain';
import { apiAdsNewsIdGet$Json } from '../fn/ads-news/api-ads-news-id-get-json';
import { ApiAdsNewsIdGet$Json$Params } from '../fn/ads-news/api-ads-news-id-get-json';
import { apiAdsNewsIdGet$Plain } from '../fn/ads-news/api-ads-news-id-get-plain';
import { ApiAdsNewsIdGet$Plain$Params } from '../fn/ads-news/api-ads-news-id-get-plain';
import { apiAdsNewsIdPut$Json } from '../fn/ads-news/api-ads-news-id-put-json';
import { ApiAdsNewsIdPut$Json$Params } from '../fn/ads-news/api-ads-news-id-put-json';
import { apiAdsNewsIdPut$Plain } from '../fn/ads-news/api-ads-news-id-put-plain';
import { ApiAdsNewsIdPut$Plain$Params } from '../fn/ads-news/api-ads-news-id-put-plain';
import { apiAdsNewsPost$Json } from '../fn/ads-news/api-ads-news-post-json';
import { ApiAdsNewsPost$Json$Params } from '../fn/ads-news/api-ads-news-post-json';
import { apiAdsNewsPost$Plain } from '../fn/ads-news/api-ads-news-post-plain';
import { ApiAdsNewsPost$Plain$Params } from '../fn/ads-news/api-ads-news-post-plain';
import { BooleanBaseResponse } from '../models/boolean-base-response';

@Injectable({ providedIn: 'root' })
export class AdsNewsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiAdsNewsGet()` */
  static readonly ApiAdsNewsGetPath = '/api/AdsNews';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdsNewsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdsNewsGet$Plain$Response(params?: ApiAdsNewsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<AdsnewListBaseResponse>> {
    return apiAdsNewsGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdsNewsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdsNewsGet$Plain(params?: ApiAdsNewsGet$Plain$Params, context?: HttpContext): Observable<AdsnewListBaseResponse> {
    return this.apiAdsNewsGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<AdsnewListBaseResponse>): AdsnewListBaseResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdsNewsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdsNewsGet$Json$Response(params?: ApiAdsNewsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<AdsnewListBaseResponse>> {
    return apiAdsNewsGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdsNewsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdsNewsGet$Json(params?: ApiAdsNewsGet$Json$Params, context?: HttpContext): Observable<AdsnewListBaseResponse> {
    return this.apiAdsNewsGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<AdsnewListBaseResponse>): AdsnewListBaseResponse => r.body)
    );
  }

  /** Path part for operation `apiAdsNewsPost()` */
  static readonly ApiAdsNewsPostPath = '/api/AdsNews';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdsNewsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdsNewsPost$Plain$Response(params?: ApiAdsNewsPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<AdsnewBaseResponse>> {
    return apiAdsNewsPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdsNewsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdsNewsPost$Plain(params?: ApiAdsNewsPost$Plain$Params, context?: HttpContext): Observable<AdsnewBaseResponse> {
    return this.apiAdsNewsPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<AdsnewBaseResponse>): AdsnewBaseResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdsNewsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdsNewsPost$Json$Response(params?: ApiAdsNewsPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<AdsnewBaseResponse>> {
    return apiAdsNewsPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdsNewsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdsNewsPost$Json(params?: ApiAdsNewsPost$Json$Params, context?: HttpContext): Observable<AdsnewBaseResponse> {
    return this.apiAdsNewsPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<AdsnewBaseResponse>): AdsnewBaseResponse => r.body)
    );
  }

  /** Path part for operation `apiAdsNewsIdGet()` */
  static readonly ApiAdsNewsIdGetPath = '/api/AdsNews/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdsNewsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdsNewsIdGet$Plain$Response(params: ApiAdsNewsIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<AdsnewBaseResponse>> {
    return apiAdsNewsIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdsNewsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdsNewsIdGet$Plain(params: ApiAdsNewsIdGet$Plain$Params, context?: HttpContext): Observable<AdsnewBaseResponse> {
    return this.apiAdsNewsIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<AdsnewBaseResponse>): AdsnewBaseResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdsNewsIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdsNewsIdGet$Json$Response(params: ApiAdsNewsIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<AdsnewBaseResponse>> {
    return apiAdsNewsIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdsNewsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdsNewsIdGet$Json(params: ApiAdsNewsIdGet$Json$Params, context?: HttpContext): Observable<AdsnewBaseResponse> {
    return this.apiAdsNewsIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<AdsnewBaseResponse>): AdsnewBaseResponse => r.body)
    );
  }

  /** Path part for operation `apiAdsNewsIdPut()` */
  static readonly ApiAdsNewsIdPutPath = '/api/AdsNews/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdsNewsIdPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdsNewsIdPut$Plain$Response(params: ApiAdsNewsIdPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanBaseResponse>> {
    return apiAdsNewsIdPut$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdsNewsIdPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdsNewsIdPut$Plain(params: ApiAdsNewsIdPut$Plain$Params, context?: HttpContext): Observable<BooleanBaseResponse> {
    return this.apiAdsNewsIdPut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanBaseResponse>): BooleanBaseResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdsNewsIdPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdsNewsIdPut$Json$Response(params: ApiAdsNewsIdPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanBaseResponse>> {
    return apiAdsNewsIdPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdsNewsIdPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdsNewsIdPut$Json(params: ApiAdsNewsIdPut$Json$Params, context?: HttpContext): Observable<BooleanBaseResponse> {
    return this.apiAdsNewsIdPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanBaseResponse>): BooleanBaseResponse => r.body)
    );
  }

  /** Path part for operation `apiAdsNewsIdDelete()` */
  static readonly ApiAdsNewsIdDeletePath = '/api/AdsNews/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdsNewsIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdsNewsIdDelete$Plain$Response(params: ApiAdsNewsIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanBaseResponse>> {
    return apiAdsNewsIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdsNewsIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdsNewsIdDelete$Plain(params: ApiAdsNewsIdDelete$Plain$Params, context?: HttpContext): Observable<BooleanBaseResponse> {
    return this.apiAdsNewsIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanBaseResponse>): BooleanBaseResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdsNewsIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdsNewsIdDelete$Json$Response(params: ApiAdsNewsIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanBaseResponse>> {
    return apiAdsNewsIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdsNewsIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdsNewsIdDelete$Json(params: ApiAdsNewsIdDelete$Json$Params, context?: HttpContext): Observable<BooleanBaseResponse> {
    return this.apiAdsNewsIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanBaseResponse>): BooleanBaseResponse => r.body)
    );
  }

}
