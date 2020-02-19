import { Component } from "@angular/core";
import { TrackDocumentsControllerService } from "src/app/services/track-documents-controller/track-documents-controller.service";
import { TrackDocumentModel } from "./track-document/track-document.model";

@Component({
  selector: "app-tracking-list",
  templateUrl: "./tracking-list.component.html",
  styleUrls: ["./tracking-list.component.scss"]
})
export class TrackingListComponent {
  public trackDocuments: Array<TrackDocumentModel>;

  constructor(
    private trackDocumentsController: TrackDocumentsControllerService
  ) {
    trackDocumentsController
      .updateTrackDocuments()
      .subscribe(data => (this.trackDocuments = data.data));
  }

  public deleteDocument(index: number) {
    this.trackDocumentsController.deleteNumber(index);
    this.trackDocumentsController
      .updateTrackDocuments()
      .subscribe(data => (this.trackDocuments = data.data));
  }
}
