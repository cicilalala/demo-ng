import {NgModule, Optional, SkipSelf} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {DialogboxComponent} from './dialogbox/dialogbox.component';
import {SearchComponent} from './search/search.component';
import {StarsComponent} from './stars/stars.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PopComponent } from './pop/pop.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DialogboxComponent,
    SearchComponent,
    StarsComponent,
    PopComponent,

  ],
  exports: [// 记得要导出模板
    DialogboxComponent,
    SearchComponent,
    StarsComponent,
    PopComponent,
  ]
})
export class SomelittercomponentsModule {
}
