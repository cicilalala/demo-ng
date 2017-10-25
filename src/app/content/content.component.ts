import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent implements OnInit {
  public pageTitle = '';
  public pageContent = '';

  constructor(public router: Router) {
    router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        if (event.url.startsWith('/stock')) {
          event.url = '/stock';
        }
        switch (event.url) {
          case '/firstpage':
            this.pageTitle = '首页';
            this.pageContent = '';
            break;
          case '/stock':
            this.pageTitle = '股票信息管理';
            this.pageContent = '个人中心';
            break;
          case '/gupiaodetail':
            this.pageTitle = '股票详情';
            this.pageContent = '股票走势';
            break;
          case '/newstock':
            this.pageTitle = '股票详情';
            this.pageContent = '新股发行';
            break;
        }
      });
  }

  ngOnInit() {
  }

}
