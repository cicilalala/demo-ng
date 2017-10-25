import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StockRoutingModule} from './stock-routing.module';
import {StockFormComponent} from './stock-form/stock-form.component';
import {StockManageComponent} from './stock-manage/stock-manage.component';
import {GupiaodetailComponent} from './gupiaodetail/gupiaodetail.component';
import {NewstockComponent} from './newstock/newstock.component';
import {StocksService} from './stocks.service';
import {PermissionGuard, RefuseGuard} from './permission';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SomelittercomponentsModule} from '../somelitter-componets/somelittercomponents.module';
import {StockfilterPipe} from './stockfilter.pipe';



@NgModule({
  imports: [
    CommonModule,
    StockRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SomelittercomponentsModule,
  ],
  declarations: [
    StockFormComponent,
    StockManageComponent,
    GupiaodetailComponent,
    NewstockComponent,
    StockfilterPipe,
  ],
  exports: [
    StockFormComponent,
    StockManageComponent,
    GupiaodetailComponent,
    NewstockComponent
  ],
  providers: [PermissionGuard, RefuseGuard, StocksService],
})
export class StockModule {
}
