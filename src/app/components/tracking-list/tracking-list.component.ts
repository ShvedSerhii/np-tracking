import { Component, OnInit } from '@angular/core';
import { TrackDocumentsControllerService } from 'src/app/services/track-documents-controller/track-documents-controller.service';

@Component({
  selector: 'app-tracking-list',
  templateUrl: './tracking-list.component.html',
  styleUrls: ['./tracking-list.component.scss']
})
export class TrackingListComponent implements OnInit {

  constructor(private trackDocumentsController: TrackDocumentsControllerService) { }

  ngOnInit(): void {
  }

  public getDocuments(): void {
    this.trackDocumentsController.updateTrackDocuments().subscribe(data => console.log(data.data)); 
  }
}
