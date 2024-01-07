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
import { apiAuthenticationPost } from '../fn/authentication/api-authentication-post';
import { ApiAuthenticationPost$Params } from '../fn/authentication/api-authentication-post';

@Injectable({ providedIn: 'root' })
export class AuthenticationService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiAuthenticationPost()` */
  static readonly ApiAuthenticationPostPath = '/api/authentication';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthenticationPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthenticationPost$Response(params?: ApiAuthenticationPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiAuthenticationPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthenticationPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthenticationPost(params?: ApiAuthenticationPost$Params, context?: HttpContext): Observable<void> {
    return this.apiAuthenticationPost$Response(params, context).pipe(
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
