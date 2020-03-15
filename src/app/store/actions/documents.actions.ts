import { Action } from '@ngrx/store';

export enum DocumentsActionTypes {
  SET_DOCUMENTS = '[document] SET_DOCUMENTS',
  GET_DOCUMENTS = '[document] GET_DOCUMENTS',
  ADD_DOCUMENT = '[document] ADD_DOCUMENT',
  UPDATE_DOCUMENT = '[document] UPDATE_DOCUMENT',
  DELETE_DOCUMENT = '[document] DELETE_DOCUMENT',
  GET_STATUS_DOCUMENT = '[document] GET_STATUS_DOCUMENT',
}

export class SetDocuments implements Action {
  readonly type = DocumentsActionTypes.SET_DOCUMENTS;
  constructor(public payload: any) {}
}

export class GetDocuments implements Action {
  readonly type = DocumentsActionTypes.GET_DOCUMENTS;
}

export class AddDocument implements Action {
  readonly type = DocumentsActionTypes.ADD_DOCUMENT;
  constructor(public payload: any) {}
}

export class UpdateDocument implements Action {
  readonly type = DocumentsActionTypes.UPDATE_DOCUMENT;
  constructor(public payload: any) {}
}

export class DeleteDocument implements Action {
  readonly type = DocumentsActionTypes.DELETE_DOCUMENT;
  constructor(public payload: any) {}
}

export class GetStatusDocument implements Action {
  readonly type = DocumentsActionTypes.GET_STATUS_DOCUMENT;
  constructor(public payload: any) {}
}

export type AllDocumentsActions =
  | SetDocuments
  | GetDocuments
  | AddDocument
  | UpdateDocument
  | DeleteDocument
  | GetStatusDocument;
  
