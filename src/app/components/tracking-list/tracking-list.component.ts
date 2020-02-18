import { Component, OnInit } from '@angular/core';
import { TrackDocumentsControllerService } from 'src/app/services/track-documents-controller/track-documents-controller.service';
import { TrackDocumentModel } from './track-document/track-document.model';

@Component({
  selector: 'app-tracking-list',
  templateUrl: './tracking-list.component.html',
  styleUrls: ['./tracking-list.component.scss']
})
export class TrackingListComponent implements OnInit {
  public trackDocuments: Array<TrackDocumentModel>;

  constructor(private trackDocumentsController: TrackDocumentsControllerService) { 
    this.trackDocuments = trackDocumentsController.getTrackDocuments();
  }

  ngOnInit(): void {
  }

}
