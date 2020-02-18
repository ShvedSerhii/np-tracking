import { Injectable } from '@angular/core';
import { STORAGE_KEY } from '../../constants/storage.const'
import { URL, API_KEY } from '../../constants/np-api.const'
import { TrackNumberModel } from '../../components/tracking-list/track-number.model'
import { TrackDocumentModel } from '../../components/tracking-list/track-document/track-document.model'
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TrackDocumentsControllerService {

  public trackNumbers: Array<TrackNumberModel>;
  public trackDocuments: Array<TrackDocumentModel>;


  constructor(private http: ApiService) {
    if (localStorage.getItem(STORAGE_KEY)) {
      this.trackNumbers = JSON.parse(localStorage.getItem(STORAGE_KEY));
      this.updateTrackDocuments().subscribe(data => this.trackDocuments = data.data)
    } else {
      this.trackNumbers = [
        {
            "DocumentNumber": '20450189696095',
            "Phone":""
        },
        {
            "DocumentNumber": "20450169232482",
            "Phone":""
        }
      ];
      this.trackDocuments = [];
      //localStorage.setItem(STORAGE_KEY, JSON.stringify(this.trackNumbers));
    }
  }

  public addNumber(number: TrackNumberModel): void {
    this.trackNumbers.unshift(number);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.trackNumbers));
    this.updateTrackDocuments().subscribe(data => this.trackDocuments = data.data)
  }
  public deleteNumber(index: number): void {
    this.trackNumbers.splice(index, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.trackNumbers));
    this.updateTrackDocuments().subscribe(data => this.trackDocuments = data.data)
  }

  public getTrackDocuments(): Array<TrackDocumentModel> {
    this.updateTrackDocuments().subscribe(data => this.trackDocuments = data.data)
    return this.trackDocuments; 
  }

  private updateTrackDocuments(): Observable<any> { 
    return this.http.post({
      url: URL,
      body: JSON.stringify({
        "apiKey": API_KEY,
        "modelName": "TrackingDocument",
        "calledMethod": "getStatusDocuments",
        "methodProperties": {
            "Documents": this.trackNumbers
        } 
      })
    })
  }
}
