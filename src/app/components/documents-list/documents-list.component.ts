import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { DocumentStatus, DocumentModel } from "src/app/models/document.model";
import { Store } from "@ngrx/store";
import { IAppState } from "src/app/store/state/app.state";
import { getDocuments } from "src/app/store/selectors/documents.selectors";
import * as DocumentsActions from "./../../store/actions/documents.actions";
import { NewDocumentComponent } from './new-document/new-document.component';
import { MatDialog } from '@angular/material/dialog';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: "app-documents-list",
  templateUrl: "./documents-list.component.html",
  styleUrls: ["./documents-list.component.scss"]
})
export class DocumentsListComponent {
  public documents$: Observable<Array<DocumentStatus>>;
  public loading: boolean;
  constructor(private store: Store<IAppState>, public dialog: MatDialog, private loaderService: LoaderService) {
    this.store.dispatch(new DocumentsActions.GetDocuments());
    this.documents$ = this.store.select(getDocuments);
    this.loaderService.isLoading.subscribe((v) => {
      this.loading = v;
    });
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(NewDocumentComponent, {
      width: '600px',
      data: new DocumentModel(),
      panelClass: 'mat-dialog-custom'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.store.dispatch(new DocumentsActions.AddDocument(result));
    });
  }
}
