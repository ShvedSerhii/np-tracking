import { Injectable } from '@angular/core';
import { CookiesService } from '../cookies/cookies.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DocumentModel } from 'src/app/models/document.model';
import { URL as BASE_GO_URL } from '../../constants/goshved-api';
import { URL as BASE_NP_URL } from '../../constants/np-api'

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient, private cookie: CookiesService) {}

  addDocument(payload: DocumentModel): Observable<any> {
    const url = `${BASE_GO_URL}/documents`;
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.cookie.getCookie('token')}`,
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<any>(url, JSON.stringify(payload), httpOptions);
  }

  getDocuments(): Observable<any> {
    const url = `${BASE_GO_URL}/documents`;
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.cookie.getCookie('token')}`
      })
    };
    return this.http.get<any>(url, httpOptions);
  }

  getStatusDocuments(payload: DocumentModel[]): Observable<any> {
    const data = {
      apiKey: '',
      modelName: 'TrackingDocument',
      calledMethod: 'getStatusDocuments',
      methodProperties: {
        Documents: payload
      }
    };
    return this.http.post<any>(BASE_NP_URL, JSON.stringify(data));
  }

  deleteDocument(payload: DocumentModel): Observable<any> {
    const url = `${BASE_GO_URL}/documents/${payload}`;
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.cookie.getCookie('token')}`
      })
    };
    return this.http.delete(url, httpOptions);
  }
}
