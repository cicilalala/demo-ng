import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'stockfilter'
})
export class StockfilterPipe implements PipeTransform {
// 第一个参数为要过滤的内容，后面的参数为过滤条件
  transform(list: any[], field: any, keyword: any): any {
    if (!field || !keyword) {
      return list;
    }
    return list.filter(v => {
      const vv = v[field].toLowerCase();
      const kw = keyword.toLowerCase();
      return vv.indexOf(kw) >= 0;
    });

  }

}
