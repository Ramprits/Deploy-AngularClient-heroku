import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthModel } from './authModel';
import { environment } from '../../../environments/environment';
const BAKEND_URL = environment.apiUrl + '/api/users/signup';
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private httpClient: HttpClient) {}
    createUser(email: string, password: string) {
        const data = { email: email, password: password };
        return this.httpClient.post(BAKEND_URL, data).subscribe(data => {
            console.log(data);
        });
    }

    loginUser(email: string, password: string) {
        const data = { email: email, password: password };
        return this.httpClient.post(BAKEND_URL, data).subscribe(data => {
            console.log(data);
        });
    }
}
