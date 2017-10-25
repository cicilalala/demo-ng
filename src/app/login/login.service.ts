import {Inject, Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Http, Headers} from "@angular/http";


@Injectable()
export class LoginService {
  private headers = new Headers({
    'Content-Type': 'application/json'
  });

  constructor(private http: Http, @Inject('BASE_CONFIG') private config) {
  }
}

export class User{
  constructor(public id: number,
              public name: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {

  }
}
