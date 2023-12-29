/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiAdminAuthenticationLoginPost } from '../fn/admin-authentication/api-admin-authentication-login-post';
import { ApiAdminAuthenticationLoginPost$Params } from '../fn/admin-authentication/api-admin-authentication-login-post';
import { apiAdminAuthenticationPost } from '../fn/admin-authentication/api-admin-authentication-post';
import { ApiAdminAuthenticationPost$Params } from '../fn/admin-authentication/api-admin-authentication-post';

@Injectable({ providedIn: 'root' })
export class AdminAuthenticationService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiAdminAuthenticationPost()` */
  static readonly ApiAdminAuthenticationPostPath = '/api/AdminAuthentication';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminAuthenticationPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdminAuthenticationPost$Response(params?: ApiAdminAuthenticationPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiAdminAuthenticationPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdminAuthenticationPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdminAuthenticationPost(params?: ApiAdminAuthenticationPost$Params, context?: HttpContext): Observable<void> {
    return this.apiAdminAuthenticationPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiAdminAuthenticationLoginPost()` */
  static readonly ApiAdminAuthenticationLoginPostPath = '/api/AdminAuthentication/login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminAuthenticationLoginPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdminAuthenticationLoginPost$Response(params?: ApiAdminAuthenticationLoginPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiAdminAuthenticationLoginPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdminAuthenticationLoginPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdminAuthenticationLoginPost(params?: ApiAdminAuthenticationLoginPost$Params, context?: HttpContext): Observable<void> {
    return this.apiAdminAuthenticationLoginPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
