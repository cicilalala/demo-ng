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

export class User {
  constructor(public id: number,
              public name: string,
              public password: string,
              public password1: string,
              public sex: string,
             ) {

  }
}

export class loginUser {
  constructor(public id: number,
              public name: string,
              public password: string) {

  }
}
