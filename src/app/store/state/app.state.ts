import { IAuthState, initialAuthState } from './auth.state';
import { IDocumentsState, initialDocumentsState } from './documents.state';

export interface IAppState {
  auth: IAuthState;
  documents: IDocumentsState;
}

export const initialAppState: IAppState = {
  auth: initialAuthState,
  documents: initialDocumentsState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
