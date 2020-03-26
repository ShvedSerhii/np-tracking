import { Component, Input } from '@angular/core';
import { DocumentStatus } from 'src/app/models/document.model';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import * as DocumentsActions from './../../../store/actions/documents.actions';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent {
  @Input() document: DocumentStatus;
  constructor(private store: Store<IAppState>) {}

  deleteDocument() {
    this.store.dispatch(
      new DocumentsActions.DeleteDocument(this.document.Number)
    );
  }

  getValueProgress(statusCode: string) {
    switch (+statusCode) {
      case 2:
      case 3:
        return 0;
      case 1:
      case 4:
      case 41:
        return 25;
      case 5:
      case 6:
      case 104:
        return 50;
      case 7:
      case 8:
      case 101:
        return 75;
      default:
        return 100;
    }
  }
}
