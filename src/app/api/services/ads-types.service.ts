/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { AdstypeBaseResponse } from '../models/adstype-base-response';
import { AdstypeIEnumerableBaseResponse } from '../models/adstype-i-enumerable-base-response';
import { apiAdsTypesGet$Json } from '../fn/ads-types/api-ads-types-get-json';
import { ApiAdsTypesGet$Json$Params } from '../fn/ads-types/api-ads-types-get-json';
import { apiAdsTypesGet$Plain } from '../fn/ads-types/api-ads-types-get-plain';
import { ApiAdsTypesGet$Plain$Params } from '../fn/ads-types/api-ads-types-get-plain';
import { apiAdsTypesIdDelete$Json } from '../fn/ads-types/api-ads-types-id-delete-json';
import { ApiAdsTypesIdDelete$Json$Params } from '../fn/ads-types/api-ads-types-id-delete-json';
import { apiAdsTypesIdDelete$Plain } from '../fn/ads-types/api-ads-types-id-delete-plain';
import { ApiAdsTypesIdDelete$Plain$Params } from '../fn/ads-types/api-ads-types-id-delete-plain';
import { apiAdsTypesIdGet$Json } from '../fn/ads-types/api-ads-types-id-get-json';
import { ApiAdsTypesIdGet$Json$Params } from '../fn/ads-types/api-ads-types-id-get-json';
import { apiAdsTypesIdGet$Plain } from '../fn/ads-types/api-ads-types-id-get-plain';
import { ApiAdsTypesIdGet$Plain$Params } from '../fn/ads-types/api-ads-types-id-get-plain';
import { apiAdsTypesIdPut$Json } from '../fn/ads-types/api-ads-types-id-put-json';
import { ApiAdsTypesIdPut$Json$Params } from '../fn/ads-types/api-ads-types-id-put-json';
import { apiAdsTypesIdPut$Plain } from '../fn/ads-types/api-ads-types-id-put-plain';
import { ApiAdsTypesIdPut$Plain$Params } from '../fn/ads-types/api-ads-types-id-put-plain';
import { apiAdsTypesPost$Json } from '../fn/ads-types/api-ads-types-post-json';
import { ApiAdsTypesPost$Json$Params } from '../fn/ads-types/api-ads-types-post-json';
import { apiAdsTypesPost$Plain } from '../fn/ads-types/api-ads-types-post-plain';
import { ApiAdsTypesPost$Plain$Params } from '../fn/ads-types/api-ads-types-post-plain';
import { BooleanBaseResponse } from '../models/boolean-base-response';

@Injectable({ providedIn: 'root' })
export class AdsTypesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiAdsTypesGet()` */
  static readonly ApiAdsTypesGetPath = '/api/AdsTypes';

  /**
   * Lấy thông tin bảng adstype.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdsTypesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdsTypesGet$Plain$Response(params?: ApiAdsTypesGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<AdstypeIEnumerableBaseResponse>> {
    return apiAdsTypesGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy thông tin bảng adstype.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdsTypesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdsTypesGet$Plain(params?: ApiAdsTypesGet$Plain$Params, context?: HttpContext): Observable<AdstypeIEnumerableBaseResponse> {
    return this.apiAdsTypesGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<AdstypeIEnumerableBaseResponse>): AdstypeIEnumerableBaseResponse => r.body)
    );
  }

  /**
   * Lấy thông tin bảng adstype.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdsTypesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdsTypesGet$Json$Response(params?: ApiAdsTypesGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<AdstypeIEnumerableBaseResponse>> {
    return apiAdsTypesGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy thông tin bảng adstype.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdsTypesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdsTypesGet$Json(params?: ApiAdsTypesGet$Json$Params, context?: HttpContext): Observable<AdstypeIEnumerableBaseResponse> {
    return this.apiAdsTypesGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<AdstypeIEnumerableBaseResponse>): AdstypeIEnumerableBaseResponse => r.body)
    );
  }

  /** Path part for operation `apiAdsTypesPost()` */
  static readonly ApiAdsTypesPostPath = '/api/AdsTypes';

  /**
   * Thêm 1 adstype mới.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdsTypesPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdsTypesPost$Plain$Response(params?: ApiAdsTypesPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanBaseResponse>> {
    return apiAdsTypesPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Thêm 1 adstype mới.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdsTypesPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdsTypesPost$Plain(params?: ApiAdsTypesPost$Plain$Params, context?: HttpContext): Observable<BooleanBaseResponse> {
    return this.apiAdsTypesPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanBaseResponse>): BooleanBaseResponse => r.body)
    );
  }

  /**
   * Thêm 1 adstype mới.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdsTypesPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdsTypesPost$Json$Response(params?: ApiAdsTypesPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanBaseResponse>> {
    return apiAdsTypesPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Thêm 1 adstype mới.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdsTypesPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdsTypesPost$Json(params?: ApiAdsTypesPost$Json$Params, context?: HttpContext): Observable<BooleanBaseResponse> {
    return this.apiAdsTypesPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanBaseResponse>): BooleanBaseResponse => r.body)
    );
  }

  /** Path part for operation `apiAdsTypesIdGet()` */
  static readonly ApiAdsTypesIdGetPath = '/api/AdsTypes/{id}';

  /**
   * Lấy thông tin adstype của id vừa nhập.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdsTypesIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdsTypesIdGet$Plain$Response(params: ApiAdsTypesIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<AdstypeBaseResponse>> {
    return apiAdsTypesIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy thông tin adstype của id vừa nhập.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdsTypesIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdsTypesIdGet$Plain(params: ApiAdsTypesIdGet$Plain$Params, context?: HttpContext): Observable<AdstypeBaseResponse> {
    return this.apiAdsTypesIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<AdstypeBaseResponse>): AdstypeBaseResponse => r.body)
    );
  }

  /**
   * Lấy thông tin adstype của id vừa nhập.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdsTypesIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdsTypesIdGet$Json$Response(params: ApiAdsTypesIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<AdstypeBaseResponse>> {
    return apiAdsTypesIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy thông tin adstype của id vừa nhập.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdsTypesIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdsTypesIdGet$Json(params: ApiAdsTypesIdGet$Json$Params, context?: HttpContext): Observable<AdstypeBaseResponse> {
    return this.apiAdsTypesIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<AdstypeBaseResponse>): AdstypeBaseResponse => r.body)
    );
  }

  /** Path part for operation `apiAdsTypesIdPut()` */
  static readonly ApiAdsTypesIdPutPath = '/api/AdsTypes/{id}';

  /**
   * Update thông tin adstype của id vừa nhập.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdsTypesIdPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdsTypesIdPut$Plain$Response(params: ApiAdsTypesIdPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanBaseResponse>> {
    return apiAdsTypesIdPut$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Update thông tin adstype của id vừa nhập.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdsTypesIdPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdsTypesIdPut$Plain(params: ApiAdsTypesIdPut$Plain$Params, context?: HttpContext): Observable<BooleanBaseResponse> {
    return this.apiAdsTypesIdPut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanBaseResponse>): BooleanBaseResponse => r.body)
    );
  }

  /**
   * Update thông tin adstype của id vừa nhập.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdsTypesIdPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdsTypesIdPut$Json$Response(params: ApiAdsTypesIdPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanBaseResponse>> {
    return apiAdsTypesIdPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Update thông tin adstype của id vừa nhập.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdsTypesIdPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdsTypesIdPut$Json(params: ApiAdsTypesIdPut$Json$Params, context?: HttpContext): Observable<BooleanBaseResponse> {
    return this.apiAdsTypesIdPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanBaseResponse>): BooleanBaseResponse => r.body)
    );
  }

  /** Path part for operation `apiAdsTypesIdDelete()` */
  static readonly ApiAdsTypesIdDeletePath = '/api/AdsTypes/{id}';

  /**
   * Xóa 1 adstype theo id vừa nhập.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdsTypesIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdsTypesIdDelete$Plain$Response(params: ApiAdsTypesIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanBaseResponse>> {
    return apiAdsTypesIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Xóa 1 adstype theo id vừa nhập.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdsTypesIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdsTypesIdDelete$Plain(params: ApiAdsTypesIdDelete$Plain$Params, context?: HttpContext): Observable<BooleanBaseResponse> {
    return this.apiAdsTypesIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanBaseResponse>): BooleanBaseResponse => r.body)
    );
  }

  /**
   * Xóa 1 adstype theo id vừa nhập.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdsTypesIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdsTypesIdDelete$Json$Response(params: ApiAdsTypesIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<BooleanBaseResponse>> {
    return apiAdsTypesIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Xóa 1 adstype theo id vừa nhập.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdsTypesIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdsTypesIdDelete$Json(params: ApiAdsTypesIdDelete$Json$Params, context?: HttpContext): Observable<BooleanBaseResponse> {
    return this.apiAdsTypesIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<BooleanBaseResponse>): BooleanBaseResponse => r.body)
    );
  }

}
