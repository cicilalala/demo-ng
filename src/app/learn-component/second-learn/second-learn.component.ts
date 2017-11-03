import {Component, Inject, OnInit} from '@angular/core';

@Component({
  selector: 'app-second-learn',
  templateUrl: './second-learn.component.html',
  styleUrls: ['./second-learn.component.sass']
})
export class SecondLearnComponent implements OnInit {
  public urlbase;
  public number = 3;

  constructor(@Inject('PIC_CONF') private picconf) {
    this.urlbase = picconf.ur2s;
  }

  ngOnInit() {
  }

  getNumber(num) {
    this.number = num;
  }

}
