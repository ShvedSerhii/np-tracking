import { CookiesService } from 'src/app/services/cookies/cookies.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL as BASE_URL } from '../../constants/goshved-api'

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private cookie: CookiesService) {}

  getToken(): string {
    return this.cookie.getCookie('token');
  }

  getEmail(): string {
    return this.cookie.getCookie('email');
  }

  logIn(payload): Observable<any> {
    const url = `${BASE_URL}/user/login`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'text/plain'
      })
    };
    return this.http.post<any>(url, payload, httpOptions);
  }

  signUp(payload): Observable<any> {
    const url = `${BASE_URL}/user/new`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'text/plain'
      })
    };
    return this.http.post<any>(url, payload, httpOptions);
  }
}
