import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import * as $ from 'jquery';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  menus: Array<Menu>;
  currentId: number = 1;


  constructor(public router: Router) {
  }

  ngOnInit() {
    this.menus = [
      new Menu(1, '首页', 'firstpage'),
      new Menu(2, '股票管理', 'stock'),
      new Menu(3, '组件学习', 'learncomponent'),
    ];
  }

  nav(menu: Menu) {
    $('#gupiaoxiangqing').removeClass('menu-open');
    this.router.navigateByUrl(menu.link);
    this.currentId = menu.id;
  }

  gupiao(item, event, state) {
    if (state === 2) {
      event.stopPropagation();//阻止冒泡事件
    }
    if (item === 11) {
      this.router.navigateByUrl('gupiaodetail');
      this.currentId = 11;
    } else {
      this.router.navigateByUrl('newstock');
      this.currentId = 22;
    }
  }

}

export class Menu {
  constructor(public id: number,
              public name: string,
              public link: string) {

  }
}


