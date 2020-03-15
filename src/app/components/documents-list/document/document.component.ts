import { Component, OnInit, Input } from '@angular/core';
import { DocumentStatus } from 'src/app/models/document.model';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

  @Input() document: DocumentStatus;
  constructor() { }

  ngOnInit(): void {
  }

}
