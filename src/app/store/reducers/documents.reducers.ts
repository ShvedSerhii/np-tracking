import { initialDocumentsState, IDocumentsState } from '../state/documents.state';
import { AllDocumentsActions, DocumentsActionTypes } from '../actions/documents.actions';

export function documentsReducer(
    oldState = initialDocumentsState,
    action: AllDocumentsActions
  ): IDocumentsState {
    const state = JSON.parse(JSON.stringify(oldState));
    switch (action.type) {
      case DocumentsActionTypes.SET_DOCUMENTS: {
        state.documents = action.payload.data;
        return state;
      }
      default: {
        return state;
      } 
    }
  }