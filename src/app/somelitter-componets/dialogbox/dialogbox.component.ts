import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.sass']
})
export class DialogboxComponent implements OnInit {

  constructor(public router: Router) {
  }

  ngOnInit() {
    let startX = 0;
    let startY = 0;
    const el = $('#dialog')[0];
    // 开始拖拽
    el.ondragstart = function (e) {
      startX = e.offsetX;
      startY = e.offsetY;
    };
    // 拖拽中
    el.ondrag = function (e) {
      let x = e.pageX;
      let y = e.pageY;
      if (x === 0 && y === 0) {
        return;
      }
      x -= startX;
      y -= startY;
      el.style.top = y + 'px';
      el.style.left = x + 'px';
    };
    // 结束拖拽
    el.ondragend = function (e) {
      let x = e.pageX;
      let y = e.pageY;
      if (x === 0 && y === 0) {
        return;
      }
      x -= startX;
      y -= startY;
      el.style.top = y + 'px';
      el.style.left = x + 'px';
    };
  }

  close() {
    let urls = [];
    urls = this.router.url.split('(');
    this.router.navigateByUrl(urls[0]);
  }

}
