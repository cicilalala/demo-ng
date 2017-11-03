/* 使用说明
页面
<app-pop #pop (falseOrTrue)="getState($event)" ></app-pop>
ts:通过#pop模板引入当前组件，以便使用当前组件的函数，通过openPop调出组件
 @ViewChild('pop') pop
 通过(falseOrTrue)发射false or true
 父组件需要通过函数getStete($event)来接收这个布尔值，也可以用一个变量来接收
 */
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-pop',
  templateUrl: './pop.component.html',
  styleUrls: ['./pop.component.sass'],
  animations: [trigger('appear', [
    state('void', style({'height': 0, 'display': 'hidden'})),
    state('close', style({'height': 150, 'display': 'none', 'width': 200})),
    state('open', style({'height': 200, 'display': 'flex', 'width': 300})),
    transition('close => open', animate(200))
  ])]
})
export class PopComponent implements OnInit {
  @Input() text: string;
  public content: string;
  public animateState = 'close';
  @Output() falseOrTrue: EventEmitter<Boolean> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  openPop(word?) {
    this.animateState = 'open';
    if (word) {
      this.text = word;
    } else {
      this.text = '需要这样操作吗？';
    }

  }

  close(e) {
    this.animateState = "close";
    this.falseOrTrue.emit(e);
  }
}
