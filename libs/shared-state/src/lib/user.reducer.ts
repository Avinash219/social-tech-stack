import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';

export const initialState = {
  user: null,
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loginSuccess, (state, { user }) => {
    console.log('Login Success Action:', user);
    return { ...state, user };
  }),
  on(UserActions.loginFailure, (state, { error }) => ({ ...state, error })),
  on(UserActions.signupSuccess, (state, { user }) => ({ ...state, user })),
  on(UserActions.signupFailure, (state, { error }) => ({ ...state, error })),
  on(UserActions.logout, (state) => ({ ...state, user: null }))
);
