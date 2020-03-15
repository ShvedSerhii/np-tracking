import { Component, Input } from '@angular/core';
import { DocumentStatus } from 'src/app/models/document.model';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import * as DocumentsActions from "./../../../store/actions/documents.actions";

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent {

  @Input() document: DocumentStatus;
  constructor(private store: Store<IAppState>) { }

  deleteDocument() {
    this.store.dispatch(new DocumentsActions.DeleteDocument(this.document.Number)); 
  }
}
