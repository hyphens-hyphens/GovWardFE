/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiAuthenticationLoginPost } from '../fn/authentication/api-authentication-login-post';
import { ApiAuthenticationLoginPost$Params } from '../fn/authentication/api-authentication-login-post';
import { apiAuthenticationRegisterAdminPost } from '../fn/authentication/api-authentication-register-admin-post';
import { ApiAuthenticationRegisterAdminPost$Params } from '../fn/authentication/api-authentication-register-admin-post';
import { apiAuthenticationRegisterUserPost } from '../fn/authentication/api-authentication-register-user-post';
import { ApiAuthenticationRegisterUserPost$Params } from '../fn/authentication/api-authentication-register-user-post';

@Injectable({ providedIn: 'root' })
export class AuthenticationService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiAuthenticationRegisterUserPost()` */
  static readonly ApiAuthenticationRegisterUserPostPath = '/api/authentication/RegisterUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthenticationRegisterUserPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthenticationRegisterUserPost$Response(params?: ApiAuthenticationRegisterUserPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiAuthenticationRegisterUserPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthenticationRegisterUserPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthenticationRegisterUserPost(params?: ApiAuthenticationRegisterUserPost$Params, context?: HttpContext): Observable<void> {
    return this.apiAuthenticationRegisterUserPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiAuthenticationRegisterAdminPost()` */
  static readonly ApiAuthenticationRegisterAdminPostPath = '/api/authentication/RegisterAdmin';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthenticationRegisterAdminPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthenticationRegisterAdminPost$Response(params?: ApiAuthenticationRegisterAdminPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiAuthenticationRegisterAdminPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthenticationRegisterAdminPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthenticationRegisterAdminPost(params?: ApiAuthenticationRegisterAdminPost$Params, context?: HttpContext): Observable<void> {
    return this.apiAuthenticationRegisterAdminPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiAuthenticationLoginPost()` */
  static readonly ApiAuthenticationLoginPostPath = '/api/authentication/login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthenticationLoginPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthenticationLoginPost$Response(params?: ApiAuthenticationLoginPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiAuthenticationLoginPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthenticationLoginPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthenticationLoginPost(params?: ApiAuthenticationLoginPost$Params, context?: HttpContext): Observable<void> {
    return this.apiAuthenticationLoginPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
