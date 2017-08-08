import { Component, OnInit } from "@angular/core";
import { MdSnackBar } from "@angular/material";
import { Store } from "@ngrx/store";

@Component({
  selector: 'router-redirect'
})
export class RouterComponent implements OnInit{
  constructor(
    private store: Store<any>,
    public snackBar: MdSnackBar) {
    this.openSnackBar('Redirecting.', 'Dance');
  }

  ngOnInit(): void {
    this.store
      .select('auth')
      .subscribe((res: any) => {
        return this.store.dispatch({ type: res.loggedIn ? 'APP_REDIRECT_DASHBOARD' : 'APP_REDIRECT_LOGIN' });
      });
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
