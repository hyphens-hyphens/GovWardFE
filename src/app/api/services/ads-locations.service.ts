/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { AdslocationBaseResponse } from '../models/adslocation-base-response';
import { AdslocationListBaseResponse } from '../models/adslocation-list-base-response';
import { apiAdsLocationsGet$Json } from '../fn/ads-locations/api-ads-locations-get-json';
import { ApiAdsLocationsGet$Json$Params } from '../fn/ads-locations/api-ads-locations-get-json';
import { apiAdsLocationsGet$Plain } from '../fn/ads-locations/api-ads-locations-get-plain';
import { ApiAdsLocationsGet$Plain$Params } from '../fn/ads-locations/api-ads-locations-get-plain';
import { apiAdsLocationsIdDelete$Json } from '../fn/ads-locations/api-ads-locations-id-delete-json';
import { ApiAdsLocationsIdDelete$Json$Params } from '../fn/ads-locations/api-ads-locations-id-delete-json';
import { apiAdsLocationsIdDelete$Plain } from '../fn/ads-locations/api-ads-locations-id-delete-plain';
import { ApiAdsLocationsIdDelete$Plain$Params } from '../fn/ads-locations/api-ads-locations-id-delete-plain';
import { apiAdsLocationsIdGet$Json } from '../fn/ads-locations/api-ads-locations-id-get-json';
import { ApiAdsLocationsIdGet$Json$Params } from '../fn/ads-locations/api-ads-locations-id-get-json';
import { apiAdsLocationsIdGet$Plain } from '../fn/ads-locations/api-ads-locations-id-get-plain';
import { ApiAdsLocationsIdGet$Plain$Params } from '../fn/ads-locations/api-ads-locations-id-get-plain';
import { apiAdsLocationsIdPut$Json } from '../fn/ads-locations/api-ads-locations-id-put-json';
import { ApiAdsLocationsIdPut$Json$Params } from '../fn/ads-locations/api-ads-locations-id-put-json';
import { apiAdsLocationsIdPut$Plain } from '../fn/ads-locations/api-ads-locations-id-put-plain';
import { ApiAdsLocationsIdPut$Plain$Params } from '../fn/ads-locations/api-ads-locations-id-put-plain';
import { apiAdsLocationsPost$Json } from '../fn/ads-locations/api-ads-locations-post-json';
import { ApiAdsLocationsPost$Json$Params } from '../fn/ads-locations/api-ads-locations-post-json';
import { apiAdsLocationsPost$Plain } from '../fn/ads-locations/api-ads-locations-post-plain';
import { ApiAdsLocationsPost$Plain$Params } from '../fn/ads-locations/api-ads-locations-post-plain';
import { BooleanBaseResponse } from '../models/boolean-base-response';

@Injectable({ providedIn: 'root' })
export class AdsLocationsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiAdsLocationsGet()` */
  static readonly ApiAdsLocationsGetPath = '/api/AdsLocations';

  /**
   * Trả về điểm quảng cáo.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdsLocationsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdsLocationsGet$Plain$Response(params?: ApiAdsLocationsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<AdslocationListBaseResponse>> {
    return apiAdsLocationsGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Trả về điểm quảng cáo.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdsLocationsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdsLocationsGet$Plain(params?: ApiAdsLocationsGet$Plain$Params, context?: HttpContext): Observable<AdslocationListBaseResponse> {
    return this.apiAdsLocationsGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<AdslocationListBaseResponse>): AdslocationListBaseResponse => r.body)
    );
  }

  /**
   * Trả về điểm quảng cáo.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdsLocationsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdsLocationsGet$Json$Response(params?: ApiAdsLocationsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<AdslocationListBaseResponse>> {
    return apiAdsLocationsGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Trả về điểm quảng cáo.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdsLocationsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdsLocationsGet$Json(params?: ApiAdsLocationsGet$Json$Params, context?: HttpContext): Observable<AdslocationListBaseResponse> {
    return this.apiAdsLocationsGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<AdslocationListBaseResponse>): AdslocationListBaseResponse => r.body)
    );
  }

  /** Path part for operation `apiAdsLocationsPost()` */
  static readonly ApiAdsLocationsPostPath = '/api/AdsLocations';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdsLocationsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdsLocationsPost$Plain$Response(params?: ApiAdsLocationsPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanBaseResponse>> {
    return apiAdsLocationsPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdsLocationsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdsLocationsPost$Plain(params?: ApiAdsLocationsPost$Plain$Params, context?: HttpContext): Observable<BooleanBaseResponse> {
    return this.apiAdsLocationsPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanBaseResponse>): BooleanBaseResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdsLocationsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdsLocationsPost$Json$Response(params?: ApiAdsLocationsPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanBaseResponse>> {
    return apiAdsLocationsPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdsLocationsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdsLocationsPost$Json(params?: ApiAdsLocationsPost$Json$Params, context?: HttpContext): Observable<BooleanBaseResponse> {
    return this.apiAdsLocationsPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanBaseResponse>): BooleanBaseResponse => r.body)
    );
  }

  /** Path part for operation `apiAdsLocationsIdGet()` */
  static readonly ApiAdsLocationsIdGetPath = '/api/AdsLocations/{id}';

  /**
   * Lấy điểm quảng cáo bằng ID.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdsLocationsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdsLocationsIdGet$Plain$Response(params: ApiAdsLocationsIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<AdslocationBaseResponse>> {
    return apiAdsLocationsIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy điểm quảng cáo bằng ID.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdsLocationsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdsLocationsIdGet$Plain(params: ApiAdsLocationsIdGet$Plain$Params, context?: HttpContext): Observable<AdslocationBaseResponse> {
    return this.apiAdsLocationsIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<AdslocationBaseResponse>): AdslocationBaseResponse => r.body)
    );
  }

  /**
   * Lấy điểm quảng cáo bằng ID.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdsLocationsIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdsLocationsIdGet$Json$Response(params: ApiAdsLocationsIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<AdslocationBaseResponse>> {
    return apiAdsLocationsIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy điểm quảng cáo bằng ID.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdsLocationsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdsLocationsIdGet$Json(params: ApiAdsLocationsIdGet$Json$Params, context?: HttpContext): Observable<AdslocationBaseResponse> {
    return this.apiAdsLocationsIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<AdslocationBaseResponse>): AdslocationBaseResponse => r.body)
    );
  }

  /** Path part for operation `apiAdsLocationsIdPut()` */
  static readonly ApiAdsLocationsIdPutPath = '/api/AdsLocations/{id}';

  /**
   * Chỉnh sửa thông tin điểm quảng cáo của id vừa nhập.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdsLocationsIdPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdsLocationsIdPut$Plain$Response(params: ApiAdsLocationsIdPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanBaseResponse>> {
    return apiAdsLocationsIdPut$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Chỉnh sửa thông tin điểm quảng cáo của id vừa nhập.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdsLocationsIdPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdsLocationsIdPut$Plain(params: ApiAdsLocationsIdPut$Plain$Params, context?: HttpContext): Observable<BooleanBaseResponse> {
    return this.apiAdsLocationsIdPut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanBaseResponse>): BooleanBaseResponse => r.body)
    );
  }

  /**
   * Chỉnh sửa thông tin điểm quảng cáo của id vừa nhập.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdsLocationsIdPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdsLocationsIdPut$Json$Response(params: ApiAdsLocationsIdPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanBaseResponse>> {
    return apiAdsLocationsIdPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Chỉnh sửa thông tin điểm quảng cáo của id vừa nhập.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdsLocationsIdPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdsLocationsIdPut$Json(params: ApiAdsLocationsIdPut$Json$Params, context?: HttpContext): Observable<BooleanBaseResponse> {
    return this.apiAdsLocationsIdPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanBaseResponse>): BooleanBaseResponse => r.body)
    );
  }

  /** Path part for operation `apiAdsLocationsIdDelete()` */
  static readonly ApiAdsLocationsIdDeletePath = '/api/AdsLocations/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdsLocationsIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdsLocationsIdDelete$Plain$Response(params: ApiAdsLocationsIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanBaseResponse>> {
    return apiAdsLocationsIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdsLocationsIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdsLocationsIdDelete$Plain(params: ApiAdsLocationsIdDelete$Plain$Params, context?: HttpContext): Observable<BooleanBaseResponse> {
    return this.apiAdsLocationsIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanBaseResponse>): BooleanBaseResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdsLocationsIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdsLocationsIdDelete$Json$Response(params: ApiAdsLocationsIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanBaseResponse>> {
    return apiAdsLocationsIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdsLocationsIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdsLocationsIdDelete$Json(params: ApiAdsLocationsIdDelete$Json$Params, context?: HttpContext): Observable<BooleanBaseResponse> {
    return this.apiAdsLocationsIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanBaseResponse>): BooleanBaseResponse => r.body)
    );
  }

}
