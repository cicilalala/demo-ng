import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-newstock',
  templateUrl: './newstock.component.html',
  styleUrls: ['./newstock.component.sass']
})
export class NewstockComponent implements OnInit {
  public isFocu: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  isFocus() {
    this.isFocu = Math.random() > .5;
    return this.isFocu;
  }
}
