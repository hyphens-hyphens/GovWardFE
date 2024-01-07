import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from '../../models/user.model';
import { environment } from '../../../../../environments/environment';
import { AuthModel } from '../../models/auth.model';
import { UserRegistrationDto } from 'src/app/api-login/models';

const API_USERS_URL = `${environment.apiUrl_GOV}/api/authentication`;

@Injectable({
    providedIn: 'root',
})
export class AuthHTTPService {
    constructor(private http: HttpClient) { }

    // public methods
    login(userName: string, password: string): Observable<any> {
        // let a = new Date();
        // a.setFullYear(2100)
        // return of(
        //     {
        //         authToken: 'Bearer ' + Math.random(),
        //         expiresIn: a,
        //         refreshToken: 'Bearer ' + Math.random(),
        //     } as AuthModel
        // )

        return this.http.post<AuthModel>(`${API_USERS_URL}/login`, {
            userName,
            password,
        });
    }

    // CREATE =>  POST: add a new user to the server
    createUser(user: UserModel): Observable<UserModel> {

        const body = {
            password: user.password,
            userName: user.username,
            email: user.email,
            firstName: user.firstname,
            lastName: user.lastname,
            roles: [
                'User'
            ],
            phoneNumber: '0909999999'
        } as UserRegistrationDto;

        return this.http.post<UserModel>(API_USERS_URL + '/register', body);
    }

    // Your server should check email => If email exists send link to the user and return true | If email doesn't exist return false
    forgotPassword(email: string): Observable<boolean> {
        return this.http.post<boolean>(`${API_USERS_URL}/forgot-password`, {
            email,
        });
    }

    getUserByToken(token: string): Observable<UserModel> {
        const httpHeaders = new HttpHeaders({
            Authorization: `${token}`,
        });
        return this.http.get<UserModel>(`${API_USERS_URL}/me`, {
            headers: httpHeaders,
        });
    }
}
