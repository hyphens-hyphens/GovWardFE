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
    login(username: string, password: string): Observable<UserType> {
        this.isLoadingSubject.next(true);
        return this.authHttpService.login(username, password).pipe(
            map((auth: AuthModel) => {
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
        if (!auth || !auth.token) {
            return of(undefined);
        }

        this.isLoadingSubject.next(true);
        let a = new Date();
        a.setFullYear(2100)
        const model = {
            id: 1,
            isLogin: true,
            username: 'admin',
            password: 'demo',
            email: 'admin@demo.com',
            token: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIwbEZtNVpYV3lPc0Z0MkxHZ2xSTUdBX1FPVUxHUGstUUdRTE1uN3RKaG1vIn0.eyJleHAiOjE3MDQ2Mjg3NjAsImlhdCI6MTcwNDYyODcwMCwiYXV0aF90aW1lIjoxNzA0NjI4Njk5LCJqdGkiOiI1Y2FlM2Y1NS1iZjUxLTQ2NDItOWVmOC04ZTlhZjAzMmI0ZGYiLCJpc3MiOiJodHRwczovL2tleWNsb2FrLmRlbW8uZGlyaWdlci5jby9hdXRoL3JlYWxtcy9kaXJpZ2VyIiwiYXVkIjpbImFtZC5hcGkiLCJlcGEuYXBpIiwid21hLmFwaSIsInRzZS5hcGkiLCJkbWEuYXBpIiwiaHViLmFwaSIsImlwYS5hcGkiLCJhY2NvdW50Il0sInN1YiI6ImNlOWY0ODBjLWE3ZmItNGEzMy1iNWU0LWRhOWRjNGU0Y2JhOSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImRtYS51aS5tLmRlbW8iLCJub25jZSI6Ik1uQlpSbG8zTGsxd2RuTnpZMGd3ZW5KT2JrRi1Ua0pMVURsd1RqSlhOMDFCY0haSU5ucHhWVTlLV1hScCIsInNlc3Npb25fc3RhdGUiOiI0YWFlNDg0Yy05YmRjLTQ3NDAtYTBjNi1kNGU2ODdmZGY1YTEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cHM6Ly9tLmRtYS5kZW1vLmRpcmlnZXIuY28iXSwicmVzb3VyY2VfYWNjZXNzIjp7ImRtYS5hcGkiOnsicm9sZXMiOlsiZG1hLXVzZXJzIl19fSwic2NvcGUiOiJvcGVuaWQgZW1haWwgZG1hIHByb2ZpbGUiLCJzaWQiOiI0YWFlNDg0Yy05YmRjLTQ3NDAtYTBjNi1kNGU2ODdmZGY1YTEiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6IlBoYXQgTmd1eWVuIiwicHJlZmVycmVkX3VzZXJuYW1lIjoicGhhdC5uZ3V5ZW5AZGlyaWdlci52biIsImdpdmVuX25hbWUiOiJQaGF0IiwiZmFtaWx5X25hbWUiOiJOZ3V5ZW4iLCJlbWFpbCI6InBoYXQubmd1eWVuQGRpcmlnZXIudm4ifQ.P2a1j0g96UTPFs_dbVOyBPG20-xGYQACu9M3XYB_V5Osu5G8n0bvVTjlNViLHTblT4bukqcm6J-rLjyX0YpZLt46O-EQ5Ojwrz1KAczJPM-AZji05VnSOy_zkvL5L6yKU_SitSYSFMRwzryP9KP125g9D2xjb7g0QhayaVtXDOsIU_c6LbwpTUIcFuypLuKg3nasRJEmKNhENG4g52CSy1JKUdaomLe3-iPmu7JrdL1ecaeHEZGdMxYTguDdjSEdFUHJ-g_uk8bhrm2EXyh4O73vpYwmHTCCaJSNp6151pmDJGGIxx4PyN0FXh6TE-EPmdebTbwPpc7Xfjq7emmEEQ',
            refreshToken: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIwbEZtNVpYV3lPc0Z0MkxHZ2xSTUdBX1FPVUxHUGstUUdRTE1uN3RKaG1vIn0.eyJleHAiOjE3MDQ2Mjg3NjAsImlhdCI6MTcwNDYyODcwMCwiYXV0aF90aW1lIjoxNzA0NjI4Njk5LCJqdGkiOiI1Y2FlM2Y1NS1iZjUxLTQ2NDItOWVmOC04ZTlhZjAzMmI0ZGYiLCJpc3MiOiJodHRwczovL2tleWNsb2FrLmRlbW8uZGlyaWdlci5jby9hdXRoL3JlYWxtcy9kaXJpZ2VyIiwiYXVkIjpbImFtZC5hcGkiLCJlcGEuYXBpIiwid21hLmFwaSIsInRzZS5hcGkiLCJkbWEuYXBpIiwiaHViLmFwaSIsImlwYS5hcGkiLCJhY2NvdW50Il0sInN1YiI6ImNlOWY0ODBjLWE3ZmItNGEzMy1iNWU0LWRhOWRjNGU0Y2JhOSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImRtYS51aS5tLmRlbW8iLCJub25jZSI6Ik1uQlpSbG8zTGsxd2RuTnpZMGd3ZW5KT2JrRi1Ua0pMVURsd1RqSlhOMDFCY0haSU5ucHhWVTlLV1hScCIsInNlc3Npb25fc3RhdGUiOiI0YWFlNDg0Yy05YmRjLTQ3NDAtYTBjNi1kNGU2ODdmZGY1YTEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cHM6Ly9tLmRtYS5kZW1vLmRpcmlnZXIuY28iXSwicmVzb3VyY2VfYWNjZXNzIjp7ImRtYS5hcGkiOnsicm9sZXMiOlsiZG1hLXVzZXJzIl19fSwic2NvcGUiOiJvcGVuaWQgZW1haWwgZG1hIHByb2ZpbGUiLCJzaWQiOiI0YWFlNDg0Yy05YmRjLTQ3NDAtYTBjNi1kNGU2ODdmZGY1YTEiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6IlBoYXQgTmd1eWVuIiwicHJlZmVycmVkX3VzZXJuYW1lIjoicGhhdC5uZ3V5ZW5AZGlyaWdlci52biIsImdpdmVuX25hbWUiOiJQaGF0IiwiZmFtaWx5X25hbWUiOiJOZ3V5ZW4iLCJlbWFpbCI6InBoYXQubmd1eWVuQGRpcmlnZXIudm4ifQ.P2a1j0g96UTPFs_dbVOyBPG20-xGYQACu9M3XYB_V5Osu5G8n0bvVTjlNViLHTblT4bukqcm6J-rLjyX0YpZLt46O-EQ5Ojwrz1KAczJPM-AZji05VnSOy_zkvL5L6yKU_SitSYSFMRwzryP9KP125g9D2xjb7g0QhayaVtXDOsIU_c6LbwpTUIcFuypLuKg3nasRJEmKNhENG4g52CSy1JKUdaomLe3-iPmu7JrdL1ecaeHEZGdMxYTguDdjSEdFUHJ-g_uk8bhrm2EXyh4O73vpYwmHTCCaJSNp6151pmDJGGIxx4PyN0FXh6TE-EPmdebTbwPpc7Xfjq7emmEEQ',
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

        return this.authHttpService.getUserByToken(auth.token).pipe(
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
        if (auth && auth.token) {
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
