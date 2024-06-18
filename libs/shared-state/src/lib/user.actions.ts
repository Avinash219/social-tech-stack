import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[User] Login',
  props<{ email: string; password: string }>()
);
export const loginSuccess = createAction(
  '[User] Login Success',
  props<{ user: any }>()
);
export const loginFailure = createAction(
  '[User] Login Failure',
  props<{ error: any }>()
);

export const signup = createAction(
  '[User] Signup',
  props<{ email: string; password: string }>()
);
export const signupSuccess = createAction(
  '[User] Signup',
  props<{ user: any }>()
);
export const signupFailure = createAction(
  '[User] Signup',
  props<{ error: any }>()
);

export const logout = createAction('[User] logout');
