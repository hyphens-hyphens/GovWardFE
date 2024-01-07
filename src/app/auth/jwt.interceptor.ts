import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../modules/auth';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    /**
     *
     * @param {AuthenticationService} _authenticationService
     */
    constructor(private userService: AuthService) { }

    /**
     * Add auth header with jwt if user is logged in and request is to api url
     * @param request
     * @param next
     */
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const currentUser = this.userService.currentUserValue;
        const isLoggedIn = currentUser && currentUser.token;
        console.log('isLoggedIn', isLoggedIn)

        if (isLoggedIn) {
            request = request.clone({
                setHeaders: {
                    Authorization: `${currentUser.token}`
                }
            });
        }

        return next.handle(request);
    }
}
