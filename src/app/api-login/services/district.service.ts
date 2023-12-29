/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiDistrictGet$Json } from '../fn/district/api-district-get-json';
import { ApiDistrictGet$Json$Params } from '../fn/district/api-district-get-json';
import { apiDistrictGet$Plain } from '../fn/district/api-district-get-plain';
import { ApiDistrictGet$Plain$Params } from '../fn/district/api-district-get-plain';
import { DistrictDtoListBaseResponse } from '../models/district-dto-list-base-response';

@Injectable({ providedIn: 'root' })
export class DistrictService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiDistrictGet()` */
  static readonly ApiDistrictGetPath = '/api/District';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDistrictGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDistrictGet$Plain$Response(params?: ApiDistrictGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<DistrictDtoListBaseResponse>> {
    return apiDistrictGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDistrictGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDistrictGet$Plain(params?: ApiDistrictGet$Plain$Params, context?: HttpContext): Observable<DistrictDtoListBaseResponse> {
    return this.apiDistrictGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<DistrictDtoListBaseResponse>): DistrictDtoListBaseResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDistrictGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDistrictGet$Json$Response(params?: ApiDistrictGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<DistrictDtoListBaseResponse>> {
    return apiDistrictGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDistrictGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDistrictGet$Json(params?: ApiDistrictGet$Json$Params, context?: HttpContext): Observable<DistrictDtoListBaseResponse> {
    return this.apiDistrictGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<DistrictDtoListBaseResponse>): DistrictDtoListBaseResponse => r.body)
    );
  }

}
