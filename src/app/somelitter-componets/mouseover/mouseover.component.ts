import {Component, ElementRef, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable"

@Component({
  selector: 'app-mouseover',
  templateUrl: './mouseover.component.html',
  styleUrls: ['./mouseover.component.sass']
})
export class MouseoverComponent implements OnInit {


  constructor(private ele: ElementRef) {
    console.log(ele);
  }

  ngOnInit() {
    const imgList = this.ele.nativeElement.children;
    const imgList$ = Observable.from(imgList); // 将数组转换成流
    const ele$ = Observable.fromEvent(document, 'mousemove')
    const delayTime = 600;
    ele$.subscribe(v => console.log(v));
    // ele$.subscribe(pos => {
    //   console.log(pos);
    //   // imgList.item.style.transform = 'translate3d(' + pos.x + 'px, ' + pos.y + 'px, 0)';
    // });
  }

}
