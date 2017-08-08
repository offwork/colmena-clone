import {Injectable} from '@angular/core';
import {Actions, Effect} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";

import * as auth from './auth.actions';

@Injectable()
export class AuthEffects {
  @Effect({ dispatch: false })
  login: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.AUTH_LOGIN)
    .do(action => {
      this.userApi.login(action.payload, 'user', true)
        .subscribe(
          (success) => this.store.dispatch(new auth.AuthLoginSuccessAction(success)),
          (error) => this.store.dispatch(new auth.AuthLoginErrorAction(error)),
        )
    })

  constructor(private actions$: Actions, private store: Store<any>) {}
}
