import { IAuthState, initialAuthState } from './auth.state';

export interface IAppState {
  auth: IAuthState;
}

export const initialAppState: IAppState = {
  auth: initialAuthState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
