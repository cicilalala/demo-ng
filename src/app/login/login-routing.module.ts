import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginInComponent} from "./login-in/login-in.component";
import {LoginRegistComponent} from "./login-regist/login-regist.component";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginInComponent},
  {path: 'regist', component: LoginRegistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
