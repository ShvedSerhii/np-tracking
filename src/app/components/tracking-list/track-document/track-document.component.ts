import { Component, OnInit, Input } from '@angular/core';
import { TrackDocumentModel } from './track-document.model';
import { TrackDocumentsControllerService } from 'src/app/services/track-documents-controller/track-documents-controller.service';

@Component({
  selector: 'app-track-document',
  templateUrl: './track-document.component.html',
  styleUrls: ['./track-document.component.scss']
})
export class TrackDocumentComponent implements OnInit {

  @Input() index: number;
  @Input() document: TrackDocumentModel;

  constructor(public trackDocumentsController: TrackDocumentsControllerService) { }

  ngOnInit(): void { 
  }

}
