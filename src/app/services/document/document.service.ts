import { Injectable } from '@angular/core';
import { CookiesService } from '../cookies/cookies.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DocumentModel } from 'src/app/models/document.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private BASE_URL = 'https://goshved.herokuapp.com';

  constructor(private http: HttpClient, private cookie: CookiesService) {}

  addDocument(payload: DocumentModel): Observable<any> {
    const url = `${this.BASE_URL}/api/documents`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.cookie.getCookie('token')}`,
        'Content-Type': 'application/json'
      })
    };
    const data = {
      number: payload.DocumentNumber,
      phone: payload.Phone
    };
    return this.http.post(url, data, httpOptions);
  }
  
  getDocuments(): Observable<any> {
    const url = `${this.BASE_URL}/api/documents`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.cookie.getCookie('token')}`
      })
    };
    return this.http.get(url, httpOptions);
  }

  getStatusDocuments(payload: DocumentModel[]): Observable<any> {
    const url = 'https://api.novaposhta.ua/v2.0/json/';
    const data = {
      "apiKey": "",
      "modelName": "TrackingDocument",
      "calledMethod": "getStatusDocuments",
      "methodProperties": {
          "Documents": payload
      }
  }
    return this.http.post(url, data);
  }

  deleteDocument(payload: DocumentModel): Observable<any> {
    const url = `${this.BASE_URL}/api/documents/${payload.ID}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.cookie.getCookie('token')}`
      })
    };
    return this.http.delete(url, httpOptions);
  }

  updateDocument(payload: DocumentModel): Observable<any> {
    const url = `${this.BASE_URL}/api/documents`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.cookie.getCookie('token')}`,
        'Content-Type': 'application/json'
      })
    };
    const data = {
      ID: payload.ID,
      description: payload.Description,
      number: payload.DocumentNumber,
      phone: payload.Phone
    };
    return this.http.put(url, data, httpOptions);
  }
}
