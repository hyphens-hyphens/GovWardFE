/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiUsersGet$Json } from '../fn/users/api-users-get-json';
import { ApiUsersGet$Json$Params } from '../fn/users/api-users-get-json';
import { apiUsersGet$Plain } from '../fn/users/api-users-get-plain';
import { ApiUsersGet$Plain$Params } from '../fn/users/api-users-get-plain';
import { UserAppListBaseResponse } from '../models/user-app-list-base-response';

@Injectable({ providedIn: 'root' })
export class UsersService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiUsersGet()` */
  static readonly ApiUsersGetPath = '/api/Users';

  /**
   * Lấy danh sách Users.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGet$Plain$Response(params?: ApiUsersGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<UserAppListBaseResponse>> {
    return apiUsersGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy danh sách Users.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUsersGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGet$Plain(params?: ApiUsersGet$Plain$Params, context?: HttpContext): Observable<UserAppListBaseResponse> {
    return this.apiUsersGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserAppListBaseResponse>): UserAppListBaseResponse => r.body)
    );
  }

  /**
   * Lấy danh sách Users.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGet$Json$Response(params?: ApiUsersGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<UserAppListBaseResponse>> {
    return apiUsersGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Lấy danh sách Users.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUsersGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGet$Json(params?: ApiUsersGet$Json$Params, context?: HttpContext): Observable<UserAppListBaseResponse> {
    return this.apiUsersGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserAppListBaseResponse>): UserAppListBaseResponse => r.body)
    );
  }

}
