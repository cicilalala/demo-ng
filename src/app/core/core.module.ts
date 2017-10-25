import {NgModule, Optional, SkipSelf} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,

  ],
  exports: [// 记得要导出模板
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  providers: [
    {
      provide: "BASE_CONFIG",
      useValue: {
        api: "http://localhost:3000"
      }
    }
  ]
})
export class CoreModule {
  /* 把只需要加载依次的组件放在coremodule中， @Optional()避免初次加载为空的情况 @SkipSelf() 跳过自己，防止死循环 */
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error('该模块第只加载一次');
    }
  }
}
