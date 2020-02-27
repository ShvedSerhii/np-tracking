import { Component, OnInit } from '@angular/core';
import { TrackDocumentsControllerService } from 'src/app/services/track-documents-controller/track-documents-controller.service';
import { TrackNumberModel } from '../track-number.model';

@Component({
  selector: 'app-add-track-document',
  templateUrl: './add-track-document.component.html',
  styleUrls: ['./add-track-document.component.scss']
})
export class AddTrackDocumentComponent implements OnInit {

  constructor(public controller: TrackDocumentsControllerService) { }

  public addNumber(num: string) {
    const number = new TrackNumberModel();
    number.DocumentNumber = num;
    this.controller.addNumber(number);
  }

  ngOnInit(): void {
  }

}
