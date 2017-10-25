import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StockFormComponent} from './stock-form/stock-form.component';
import {StockManageComponent} from './stock-manage/stock-manage.component';
import {GupiaodetailComponent} from './gupiaodetail/gupiaodetail.component';
import {NewstockComponent} from './newstock/newstock.component';
import {DialogboxComponent} from '../somelitter-componets/dialogbox/dialogbox.component';
import {PermissionGuard, RefuseGuard} from './permission';


const routerConfig: Routes = [
  {path: 'stock', component: StockManageComponent},
  {path: 'gupiaodetail', component: GupiaodetailComponent, canActivate: [PermissionGuard]},
  {path: 'newstock', component: NewstockComponent, canDeactivate: [RefuseGuard]},
  {path: 'stock/:id', component: StockFormComponent},
  {path: 'dialog', component: DialogboxComponent, outlet: 'dialog'}, /*在dialog这个组件上显示DialogboxComponent这个组件*/

];

@NgModule({
  imports: [RouterModule.forChild(routerConfig)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
