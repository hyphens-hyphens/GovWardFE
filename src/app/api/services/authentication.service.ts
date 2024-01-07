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
import { apiAuthenticationRegisterUserPost } from '../fn/authentication/api-authentication-register-user-post';
import { ApiAuthenticationRegisterUserPost$Params } from '../fn/authentication/api-authentication-register-user-post';

@Injectable({ providedIn: 'root' })
export class AuthenticationService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiAuthenticationRegisterUserPost()` */
  static readonly ApiAuthenticationRegisterUserPostPath = '/api/authentication/register-user';

  /**
   * Register.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthenticationRegisterUserPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthenticationRegisterUserPost$Response(params?: ApiAuthenticationRegisterUserPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiAuthenticationRegisterUserPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Register.
   *
   *
   *
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

  /** Path part for operation `apiAuthenticationLoginPost()` */
  static readonly ApiAuthenticationLoginPostPath = '/api/authentication/login';

  /**
   * Login.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthenticationLoginPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthenticationLoginPost$Response(params?: ApiAuthenticationLoginPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiAuthenticationLoginPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Login.
   *
   *
   *
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
