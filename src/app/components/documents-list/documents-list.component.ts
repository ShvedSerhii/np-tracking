import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { DocumentStatus, DocumentModel } from "src/app/models/document.model";
import { Store } from "@ngrx/store";
import { IAppState } from "src/app/store/state/app.state";
import { getDocuments } from "src/app/store/selectors/documents.selectors";
import * as DocumentsActions from "./../../store/actions/documents.actions";
import { NewDocumentComponent } from './new-document/new-document.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: "app-documents-list",
  templateUrl: "./documents-list.component.html",
  styleUrls: ["./documents-list.component.scss"]
})
export class DocumentsListComponent {
  public documents$: Observable<Array<DocumentStatus>>;
  constructor(private store: Store<IAppState>, public dialog: MatDialog) {
    this.store.dispatch(new DocumentsActions.GetDocuments());
    this.documents$ = this.store.select(getDocuments);
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(NewDocumentComponent, {
      width: '600px',
      data: new DocumentModel()
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.store.dispatch(new DocumentsActions.AddDocument(result));
    });
  }
}
