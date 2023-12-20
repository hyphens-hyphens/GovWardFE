/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { Adslocation } from '../models/adslocation';
import { apiAdslocationsGet$Json } from '../fn/adslocations/api-adslocations-get-json';
import { ApiAdslocationsGet$Json$Params } from '../fn/adslocations/api-adslocations-get-json';
import { apiAdslocationsGet$Plain } from '../fn/adslocations/api-adslocations-get-plain';
import { ApiAdslocationsGet$Plain$Params } from '../fn/adslocations/api-adslocations-get-plain';
import { apiAdslocationsIdDelete } from '../fn/adslocations/api-adslocations-id-delete';
import { ApiAdslocationsIdDelete$Params } from '../fn/adslocations/api-adslocations-id-delete';
import { apiAdslocationsIdGet$Json } from '../fn/adslocations/api-adslocations-id-get-json';
import { ApiAdslocationsIdGet$Json$Params } from '../fn/adslocations/api-adslocations-id-get-json';
import { apiAdslocationsIdGet$Plain } from '../fn/adslocations/api-adslocations-id-get-plain';
import { ApiAdslocationsIdGet$Plain$Params } from '../fn/adslocations/api-adslocations-id-get-plain';
import { apiAdslocationsIdPut } from '../fn/adslocations/api-adslocations-id-put';
import { ApiAdslocationsIdPut$Params } from '../fn/adslocations/api-adslocations-id-put';
import { apiAdslocationsPost$Json } from '../fn/adslocations/api-adslocations-post-json';
import { ApiAdslocationsPost$Json$Params } from '../fn/adslocations/api-adslocations-post-json';
import { apiAdslocationsPost$Plain } from '../fn/adslocations/api-adslocations-post-plain';
import { ApiAdslocationsPost$Plain$Params } from '../fn/adslocations/api-adslocations-post-plain';

@Injectable({ providedIn: 'root' })
export class AdslocationsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiAdslocationsGet()` */
  static readonly ApiAdslocationsGetPath = '/api/Adslocations';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdslocationsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdslocationsGet$Plain$Response(params?: ApiAdslocationsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Adslocation>>> {
    return apiAdslocationsGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdslocationsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdslocationsGet$Plain(params?: ApiAdslocationsGet$Plain$Params, context?: HttpContext): Observable<Array<Adslocation>> {
    return this.apiAdslocationsGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Adslocation>>): Array<Adslocation> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdslocationsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdslocationsGet$Json$Response(params?: ApiAdslocationsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Adslocation>>> {
    return apiAdslocationsGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdslocationsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdslocationsGet$Json(params?: ApiAdslocationsGet$Json$Params, context?: HttpContext): Observable<Array<Adslocation>> {
    return this.apiAdslocationsGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Adslocation>>): Array<Adslocation> => r.body)
    );
  }

  /** Path part for operation `apiAdslocationsPost()` */
  static readonly ApiAdslocationsPostPath = '/api/Adslocations';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdslocationsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdslocationsPost$Plain$Response(params?: ApiAdslocationsPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Adslocation>> {
    return apiAdslocationsPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdslocationsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdslocationsPost$Plain(params?: ApiAdslocationsPost$Plain$Params, context?: HttpContext): Observable<Adslocation> {
    return this.apiAdslocationsPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Adslocation>): Adslocation => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdslocationsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdslocationsPost$Json$Response(params?: ApiAdslocationsPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Adslocation>> {
    return apiAdslocationsPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdslocationsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdslocationsPost$Json(params?: ApiAdslocationsPost$Json$Params, context?: HttpContext): Observable<Adslocation> {
    return this.apiAdslocationsPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Adslocation>): Adslocation => r.body)
    );
  }

  /** Path part for operation `apiAdslocationsIdGet()` */
  static readonly ApiAdslocationsIdGetPath = '/api/Adslocations/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdslocationsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdslocationsIdGet$Plain$Response(params: ApiAdslocationsIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Adslocation>> {
    return apiAdslocationsIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdslocationsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdslocationsIdGet$Plain(params: ApiAdslocationsIdGet$Plain$Params, context?: HttpContext): Observable<Adslocation> {
    return this.apiAdslocationsIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Adslocation>): Adslocation => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdslocationsIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdslocationsIdGet$Json$Response(params: ApiAdslocationsIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Adslocation>> {
    return apiAdslocationsIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdslocationsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdslocationsIdGet$Json(params: ApiAdslocationsIdGet$Json$Params, context?: HttpContext): Observable<Adslocation> {
    return this.apiAdslocationsIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Adslocation>): Adslocation => r.body)
    );
  }

  /** Path part for operation `apiAdslocationsIdPut()` */
  static readonly ApiAdslocationsIdPutPath = '/api/Adslocations/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdslocationsIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdslocationsIdPut$Response(params: ApiAdslocationsIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiAdslocationsIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdslocationsIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdslocationsIdPut(params: ApiAdslocationsIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiAdslocationsIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiAdslocationsIdDelete()` */
  static readonly ApiAdslocationsIdDeletePath = '/api/Adslocations/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdslocationsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdslocationsIdDelete$Response(params: ApiAdslocationsIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiAdslocationsIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdslocationsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdslocationsIdDelete(params: ApiAdslocationsIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiAdslocationsIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
