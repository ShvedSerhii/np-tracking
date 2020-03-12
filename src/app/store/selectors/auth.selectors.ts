import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IAuthState } from '../state/auth.state';

const selectAuth = (state: IAppState) => state.auth;

export const isAuthenticated = createSelector(
  selectAuth,
  (state: IAuthState) => state.isAuthenticated
);
