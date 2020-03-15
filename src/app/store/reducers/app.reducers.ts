import { ActionReducerMap } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { authReducer } from './auth.reducers';
import { documentsReducer } from './documents.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  auth: authReducer,
  documents: documentsReducer
};
