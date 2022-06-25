import { fetch } from '@nrwl/angular';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as UserActions from './user.actions';
import * as UserFeature from './user.reducer';

@Injectable()
export class UserEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.init),
      fetch({
        run: (action) => {
          return UserActions.loadUserSuccess({
            user: [
              { name: 'John', email: 'john@test.com' },
              { name: 'Snow', email: 'snow@test.com' },
            ],
          });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return UserActions.loadUserFailure({ error });
        },
      })
    )
  );

  constructor(private readonly actions$: Actions) {}
}
