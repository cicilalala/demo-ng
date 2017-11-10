import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {ContentComponent} from './content/content.component';
import {FirstPageComponent} from './first-page/first-page.component';
import {CoreModule} from './core/core.module';
import {MenuComponent} from './menu/menu.component';
import {StockModule} from './stock/stock.module';
import {ShareModule} from './share/share.module';
import {LoginModule} from "./login/login.module";
import {AppRoutingModule} from "./app-routing.module";
import {HttpModule} from "@angular/http";
import {SomelittercomponentsModule} from "./somelitter-componets/somelittercomponents.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LearnComponentModule} from "./learn-component/learn-component.module";


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContentComponent,
    FirstPageComponent,
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    StockModule,
    ShareModule,
    LoginModule,
    HttpModule,
    SomelittercomponentsModule,
    BrowserAnimationsModule,
    LearnComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  // bootstrap: [LoginInComponent]
})

export class AppModule {
}
