import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstPageComponent} from './first-page/first-page.component';
import {DialogboxComponent} from './somelitter-componets/dialogbox/dialogbox.component';


const routerConfig: Routes = [
  {path: 'firstpage', component: FirstPageComponent},
  {path: 'dialog', component: DialogboxComponent, outlet: 'dialog'}, /*在dialog这个组件上显示DialogboxComponent这个组件*/

];

@NgModule({
  imports: [RouterModule.forRoot(routerConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
