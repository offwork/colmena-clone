import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

export const routes: Routes = [
  { path: '', children: [
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutesModule { }
