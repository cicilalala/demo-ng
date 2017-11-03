import {Component, Inject, OnInit} from '@angular/core';

@Component({
  selector: 'app-first-learn',
  templateUrl: './first-learn.component.html',
  styleUrls: ['./first-learn.component.sass']
})
export class FirstLearnComponent implements OnInit {
  public urlbase; // 图片路径的前缀

  constructor(@Inject('PIC_CONF') private picconf) {
    this.urlbase = picconf.ur1s;
  }

  ngOnInit() {
  }

}
