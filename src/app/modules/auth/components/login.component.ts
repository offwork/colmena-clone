import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as auth from '../state/auth.actions'

@Component({
  template: `
    <md-card>
      <md-card-title>Login</md-card-title>
      <md-card-content>
        <div fxLayout="column">
          <md-input-container fxFlex="100%">
            <input mdInput required placeholder="Email" [(ngModel)]="credentials.email" />
          </md-input-container>
          <md-input-container fxFlex="100%">
            <input mdInput required type="password" placeholder="Password" [(ngModel)]="credentials.password" />
          </md-input-container>
          <button md-raised-button color="accent" type="submit" (click)="login()">Login</button>
        </div>
      </md-card-content>
    </md-card>
  `,
})

export class LoginComponentComponent {
  public settings: any;
  public credentials = {
    email: '',
    password: '',
  };

  constructor(private store: Store<any>) {
    this.store
      .select('app')
      .subscribe((res: any) => {
        this.settings = res.settings;
        if(this.settings.nodeEnv === 'development') {
          this.credentials.email = 'kerem.ozdemir@kalemyazilim.com';
          this.credentials.password = 'kalem123';
        }
      });
  }

  login(): void {
    this.store.dispatch({ type: auth.ActionTypes.AUTH_LOGIN, payload: this.credentials });
  }
}
