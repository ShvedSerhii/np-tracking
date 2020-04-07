import { initialDocumentsState, IDocumentsState } from '../state/documents.state';
import { AllDocumentsActions, DocumentsActionTypes } from '../actions/documents.actions';

export function documentsReducer(
  state = initialDocumentsState,
  action: AllDocumentsActions
): IDocumentsState {
  switch (action.type) {
    case DocumentsActionTypes.SET_DOCUMENTS: {
      return {
        ...state,
        documents: new Array(...action.payload.data).reverse()
      };
    }
    default: {
      return state;
    }
  }
}
