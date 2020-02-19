import { Injectable } from "@angular/core";
import { STORAGE_KEY } from "../../constants/storage.const";
import { URL, API_KEY } from "../../constants/np-api.const";
import { TrackNumberModel } from "../../components/tracking-list/track-number.model";
import { ApiService } from "../api/api.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TrackDocumentsControllerService {
  public trackNumbers: Array<TrackNumberModel>;

  constructor(private http: ApiService) {
    if (localStorage.getItem(STORAGE_KEY)) {
      this.trackNumbers = JSON.parse(localStorage.getItem(STORAGE_KEY));
    } else {
      this.trackNumbers = [
        {
          DocumentNumber: "20450189696095",
          Phone: ""
        },
        {
          DocumentNumber: "20450169232482",
          Phone: ""
        }
      ];
    }
  }

  public addNumber(number: TrackNumberModel): void {
    this.trackNumbers.unshift(number);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.trackNumbers));
  }
  public deleteNumber(index: number): void {
    this.trackNumbers.splice(index, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.trackNumbers));
  }

  public updateTrackDocuments(): Observable<any> {
    return this.http.post({
      url: URL,
      body: JSON.stringify({
        apiKey: API_KEY,
        modelName: "TrackingDocument",
        calledMethod: "getStatusDocuments",
        methodProperties: {
          Documents: this.trackNumbers
        }
      })
    });
  }
}
