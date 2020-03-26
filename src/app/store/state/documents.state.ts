import { DocumentStatus } from 'src/app/models/document.model';

export interface IDocumentsState {
  documents: Array<DocumentStatus>;
}

export const initialDocumentsState: IDocumentsState = {
  documents: []
};
