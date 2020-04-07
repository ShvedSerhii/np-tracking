import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL as BASE_URL } from '../../constants/goshved-api';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  public logIn(payload): Observable<any> {
    const url = `${BASE_URL}/user/login`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'text/plain'
      })
    };
    return this.http.post<any>(url, payload, httpOptions);
  }

  public signUp(payload): Observable<any> {
    const url = `${BASE_URL}/user/new`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'text/plain'
      })
    };
    return this.http.post<any>(url, payload, httpOptions);
  }
}
