import { AuthActionTypes, AllAuthActions } from '../actions/auth.actions';
import { IAuthState, initialAuthState } from '../state/auth.state';

export function authReducer(
  state = initialAuthState,
  action: AllAuthActions
): IAuthState {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: {
          token: action.payload.account.token,
          email: action.payload.account.email
        },
        errorMessage: null
      };
    }
    case AuthActionTypes.LOGIN_FAILURE: {
      const message = action.payload.message
        ? action.payload.message
        : 'Unknown error. Check your internet connection.';
      return {
        ...state,
        errorMessage: message
      };
    }
    case AuthActionTypes.SIGNUP_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: {
          token: action.payload.account.token,
          email: action.payload.account.email
        },
        errorMessage: null
      };
    }
    case AuthActionTypes.SIGNUP_FAILURE: {
      const message = action.payload.message
        ? action.payload.message
        : 'Unknown error. Check your internet connection.';
      return {
        ...state,
        errorMessage: message
      };
    }
    case AuthActionTypes.LOGOUT: {
      return initialAuthState;
    }
    default: {
      return state;
    }
  }
}
