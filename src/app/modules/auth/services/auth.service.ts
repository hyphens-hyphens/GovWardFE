import { Injectable, OnDestroy } from '@angular/core';
import { Observable, BehaviorSubject, of, Subscription } from 'rxjs';
import { map, catchError, switchMap, finalize } from 'rxjs/operators';
import { UserModel } from '../models/user.model';
import { AuthModel } from '../models/auth.model';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AuthHTTPService } from './auth-http/auth-http.service';

export type UserType = UserModel | undefined;

@Injectable({
    providedIn: 'root',
})
export class AuthService implements OnDestroy {
    // private fields
    private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
    private authLocalStorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;

    // public fields
    currentUser$: Observable<UserType>;
    isLoading$: Observable<boolean>;
    currentUserSubject: BehaviorSubject<UserType>;
    isLoadingSubject: BehaviorSubject<boolean>;

    get currentUserValue(): UserType {
        return this.currentUserSubject.value;
    }

    set currentUserValue(user: UserType) {
        this.currentUserSubject.next(user);
    }

    constructor(
        private authHttpService: AuthHTTPService,
        private router: Router
    ) {
        this.isLoadingSubject = new BehaviorSubject<boolean>(false);
        this.currentUserSubject = new BehaviorSubject<UserType>(undefined);
        this.currentUser$ = this.currentUserSubject.asObservable();
        this.isLoading$ = this.isLoadingSubject.asObservable();
        const subscr = this.getUserByToken().subscribe();
        this.unsubscribe.push(subscr);
    }

    // public methods
    login(email: string, password: string): Observable<UserType> {
        this.isLoadingSubject.next(true);
        return this.authHttpService.login(email, password).pipe(
            map((auth: AuthModel) => {
                console.log(auth)
                const result = this.setAuthFromLocalStorage(auth);
                return result;
            }),
            switchMap(() => this.getUserByToken()),
            catchError((err) => {
                console.error('err', err);
                return of(undefined);
            }),
            finalize(() => this.isLoadingSubject.next(false))
        );
    }

    logout() {
        localStorage.removeItem(this.authLocalStorageToken);
        this.router.navigate(['/auth/login'], {
            queryParams: {},
        });
    }

    getUserByToken(): Observable<UserType> {
        const auth = this.getAuthFromLocalStorage();
        if (!auth || !auth.authToken) {
            return of(undefined);
        }

        this.isLoadingSubject.next(true);
        let a = new Date();
        a.setFullYear(2100)
        const model = {
            id: 1,
            username: 'admin',
            password: 'demo',
            email: 'admin@demo.com',
            authToken: 'auth-token-' + Math.random(),
            refreshToken: 'auth-token-' + Math.random(),
            roles: [1], // Administrator
            pic: './assets/media/avatars/300-1.jpg',
            fullname: 'Sean S',
            firstname: 'Sean',
            lastname: 'Stark',
            occupation: 'CEO',
            companyName: 'Keenthemes',
            phone: '456669067890',
            language: 'en',
            timeZone: 'International Date Line West',
            website: 'https://keenthemes.com',
            communication: {
                email: true,
                sms: true,
                phone: false,
            },
            address: {
                addressLine: 'L-12-20 Vertex, Cybersquare',
                city: 'San Francisco',
                state: 'California',
                postCode: '45000',
            },
            socialNetworks: {
                linkedIn: 'https://linkedin.com/admin',
                facebook: 'https://facebook.com/admin',
                twitter: 'https://twitter.com/admin',
                instagram: 'https://instagram.com/admin',
            },
        } as UserModel;
        return of(model)
            .pipe(
                map((user: UserType) => {
                    if (user) {
                        this.currentUserSubject.next(user);
                    } else {
                        this.logout();
                    }
                    return user;
                }),
                finalize(() => this.isLoadingSubject.next(false)));

        return this.authHttpService.getUserByToken(auth.authToken).pipe(
            map((user: UserType) => {
                if (user) {
                    this.currentUserSubject.next(user);
                } else {
                    this.logout();
                }
                return user;
            }),
            finalize(() => this.isLoadingSubject.next(false))
        );
    }

    // need create new user then login
    registration(user: UserModel): Observable<any> {
        this.isLoadingSubject.next(true);
        return this.authHttpService.createUser(user).pipe(
            map(() => {
                this.isLoadingSubject.next(false);
            }),
            switchMap(() => this.login(user.email, user.password)),
            catchError((err) => {
                console.error('err', err);
                return of(undefined);
            }),
            finalize(() => this.isLoadingSubject.next(false))
        );
    }

    forgotPassword(email: string): Observable<boolean> {
        this.isLoadingSubject.next(true);
        return this.authHttpService
            .forgotPassword(email)
            .pipe(finalize(() => this.isLoadingSubject.next(false)));
    }

    // private methods
    private setAuthFromLocalStorage(auth: AuthModel): boolean {
        // store auth authToken/refreshToken/epiresIn in local storage to keep user logged in between page refreshes
        if (auth && auth.authToken) {
            localStorage.setItem(this.authLocalStorageToken, JSON.stringify(auth));
            return true;
        }
        return false;
    }

    private getAuthFromLocalStorage(): AuthModel | undefined {
        try {
            const lsValue = localStorage.getItem(this.authLocalStorageToken);
            if (!lsValue) {
                return undefined;
            }

            const authData = JSON.parse(lsValue);
            return authData;
        } catch (error) {
            console.error(error);
            return undefined;
        }
    }

    ngOnDestroy() {
        this.unsubscribe.forEach((sb) => sb.unsubscribe());
    }
}
