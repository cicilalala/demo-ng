import {NgModule, Optional, SkipSelf} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {DialogboxComponent} from './dialogbox/dialogbox.component';
import {SearchComponent} from './search/search.component';
import {StarsComponent} from './stars/stars.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PopComponent } from './pop/pop.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { MouseoverComponent } from './mouseover/mouseover.component';



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
    ProgressBarComponent,
    MouseoverComponent,

  ],
  exports: [// 记得要导出模板
    DialogboxComponent,
    SearchComponent,
    StarsComponent,
    PopComponent,
    ProgressBarComponent,
    MouseoverComponent
  ]
})
export class SomelittercomponentsModule {
}
