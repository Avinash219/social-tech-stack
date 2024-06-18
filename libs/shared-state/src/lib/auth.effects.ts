import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AuthActions from './user.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { AuthService } from '@client/auth/data-access-auth';

@Injectable()
export class AuthEffects {
  constructor(private action$: Actions, private _auth: AuthService) {}

  login$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.login),
      mergeMap(({ email, password }) =>
        this._auth.login({ email, password }).pipe(
          map((user) => AuthActions.loginSuccess({ user })),
          catchError((error) => of(AuthActions.loginFailure({ error })))
        )
      )
    )
  );

  signup$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.signup),
      mergeMap(({ email, password }) =>
        this._auth.signup({ email, password }).pipe(
          map((user) => AuthActions.signupSuccess({ user })),
          catchError((error) => of(AuthActions.signupFailure({ error })))
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.logout),
      map(() => {
        return {
          type: '[User] Logout Success',
        };
      })
    )
  );
}
