import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import {
  DocumentsActionTypes,
  GetDocuments,
  SetDocuments,
  AddDocument,
  DeleteDocument,
  GetStatusDocument
} from '../actions/documents.actions';
import { map, switchMap } from 'rxjs/operators';
import { DocumentService } from 'src/app/services/document/document.service';

@Injectable()
export class DocumentsEffects {
  constructor(
    private actions: Actions,
    private documentServices: DocumentService
  ) {}

  @Effect()
  GetDocuments: Observable<any> = this.actions.pipe(
    ofType(DocumentsActionTypes.GET_DOCUMENTS),
    map((action: GetDocuments) => action),
    switchMap(() => {
      return this.documentServices.getDocuments().pipe(
        map(data => {
          return new GetStatusDocument(data);
        })
      );
    })
  );

  @Effect()
  GetStatusDocuments: Observable<any> = this.actions.pipe(
    ofType(DocumentsActionTypes.GET_STATUS_DOCUMENT),
    map((action: GetStatusDocument) => action),
    switchMap(data => {
      return this.documentServices.getStatusDocuments(data.payload.data).pipe(
        map(values => {
          return new SetDocuments(values);
        })
      );
    })
  );

  @Effect()
  AddDocument: Observable<any> = this.actions.pipe(
    ofType(DocumentsActionTypes.ADD_DOCUMENT),
    map((action: AddDocument) => action.payload),
    switchMap(payload => {
      return this.documentServices.addDocument(payload).pipe(
        map(() => {
          return new GetDocuments();
        })
      );
    })
  );

  @Effect()
  DeleteDocument: Observable<any> = this.actions.pipe(
    ofType(DocumentsActionTypes.DELETE_DOCUMENT),
    map((action: DeleteDocument) => action.payload),
    switchMap(payload => {
      return this.documentServices.deleteDocument(payload).pipe(
        map(() => {
          return new GetDocuments();
        })
      );
    })
  );
}
