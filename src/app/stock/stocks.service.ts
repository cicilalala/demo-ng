import {Inject, Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Http, Headers} from "@angular/http";


@Injectable()
export class StocksService {
  private headers = new Headers({
    'Content-Type': 'application/json'
  });

  constructor(private http: Http, @Inject('BASE_CONFIG') private config) {
  }

  public stocks: Stock[] = [];

  getStocks(): Observable<Stock[]> {
    return this.http.get(`${this.config.api}/stock`).map(value => value.json());
  }

  getStock(id): any {
    return this.http.get(`${this.config.api}/stock/${id}`).map(value => value.json());
  }

  addOrUpdata(stock): any {
    if (stock.id) {
      // 先删除
      this.http.delete(`${this.config.api}/stock/${stock.id}`).map(value => value.json())
        .subscribe(val => {
          if (val) {
            return this.http.post(`${this.config.api}/stock`, JSON.stringify(stock), {headers: this.headers}).map(value => value.json());
          } else {
            return new Error('更新失败');
          }
        })
      // 再增加
      return this.http.post(`${this.config.api}/stock`, JSON.stringify(stock), {headers: this.headers}).map(value => value.json());

    } else {
      // 增加
      return this.http.post(`${this.config.api}/stock`, JSON.stringify(stock), {headers: this.headers}).map(value => value.json());
    }

  }

  delete(id): any {
    return this.http.delete(`${this.config.api}/stock/${id}`).map(value => value.json());
  }
}

export class Stock {
  constructor(public id: number,
              public name: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {

  }
}
