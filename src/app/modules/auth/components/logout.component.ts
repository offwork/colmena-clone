import { Component } from '@angular/core';
import {Store} from '@ngrx/store';

import * as auth from '../state/auth.actions';

@Component({
  template: `
    <md-card>
      <md-card-title>Logout</md-card-title>
      <md-card-content>
        <div fxLayout="column">
          <p>You are being logged out.</p>
        </div>
      </md-card-content>
    </md-card>
  `,
})

export class LogoutComponentComponent {
  constructor(private store: Store<any>) { this.store.dispatch(new auth.AuthLogoutAction()); }
}
