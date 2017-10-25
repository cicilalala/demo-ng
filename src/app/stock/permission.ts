import {
  ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanDeactivate, NavigationEnd, Resolve, Router,
  RouterStateSnapshot
} from '@angular/router';
import 'rxjs/add/operator/filter';
import {NewstockComponent} from '../stock/newstock/newstock.component';


export class PermissionGuard implements CanActivate {
  public a: boolean;
// 路由守卫之canActivate，进入此路由前应该做哪些操作
  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.a = window.confirm('canActivate要付费吗？yes or no,yes~~');
    if (this.a) {
      return true; // 可以进入
    } else {
      alert('您没有权限');
      return false; // 不可以进入
    }
  }
}

export class RefuseGuard implements CanDeactivate<NewstockComponent> {
  // 路由守卫之canDeactivate，即：离开当前路由是应该做哪些操作，注意，此处应把当前的组件传进来<NewstockComponent>
  canDeactivate(component: NewstockComponent) {
    if (component.isFocus()) {
      return true; // 可以离开
    } else {
      return window.confirm('canDeactivate不关注就离开吗？');
    }
  }
}




