import { IAppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';
import { IDocumentsState } from '../state/documents.state';

const selectDocuments = (state: IAppState) => state.documents;

export const getDocuments = createSelector(
  selectDocuments,
  (state: IDocumentsState) => state.documents
);