import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginRoutingModule} from './login-routing.module';
import {LoginInComponent} from './login-in/login-in.component';
import {LoginRegistComponent} from './login-regist/login-regist.component';
import {LoginService} from "./login.service";

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginInComponent,
    LoginRegistComponent
  ],
  providers: [LoginService]
})
export class LoginModule {
}
