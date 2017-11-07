import {Component, Input, OnChanges, OnInit, OnDestroy, ElementRef, AfterViewInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.sass']
})
export class ProgressBarComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  @Input()// 圆环的长宽
  public size? = 200;
  @Input()// 当前值的百分比
  public value? = 100;
  @Input()// 环的底色
  public circleColorUper? = 'red';
  @Input()// 外环的数值色
  public circleColorDown? = '#ddd';
  @Input()// 外环的宽度
  public circleArc? = 30;
  @Input()// 当前圈中的文字
  public text? = '100';
  @Input()// 文字的颜色
  public textColor? = 'red';
  @Input()// 文字大小
  public fontSize? = '1em';
  @Input()// 文字粗细
  public fontWeight? = 'bold';
  @Input()// 文字类型
  public fontFamilay? = ' Arial';


  constructor(private elementRef: ElementRef) { // 通过ElementRef引用当前组件的元素

  }

  ngOnInit() {

  }

  ngOnChanges() {
  }

  ngAfterViewInit() {
    this.wirteCircle(); // 待视图完成后再开始绘画
  }

  ngOnDestroy() {
  }

  wirteCircle() {
    const cxt = this.elementRef.nativeElement.querySelector('canvas').getContext('2d');
    const a = Math.PI * 2 / 100;
    let b = 0;
    const s = 1000 / this.value; // 不管数值多少1秒钟画完
    const timer = setInterval(() => {
      cxt.clearRect(0, 0, this.size, this.size); // 清除原来画布
      // 底层
      cxt.beginPath();
      cxt.arc(this.size / 2, this.size / 2, this.size / 2 - this.circleArc, 0, Math.PI * 2);
      cxt.strokeStyle = this.circleColorDown;
      cxt.lineWidth = this.circleArc;
      cxt.stroke();
      cxt.closePath();

      // 文字
      cxt.font = `${this.fontWeight} ${this.fontSize}  ${this.fontFamilay}`;
      cxt.textAlign = 'center';
      cxt.fillStyle = this.textColor;
      cxt.textBaseline = 'middle';
      cxt.moveTo(this.size / 2, this.size / 2);
      cxt.fillText(`${this.text}${b}%`, 100, 100);
      // 路径
      cxt.beginPath();
      cxt.arc(this.size / 2, this.size / 2, this.size / 2 - this.circleArc, 0, a * b);
      cxt.strokeStyle = this.circleColorUper;
      cxt.lineWidth = this.circleArc;
      cxt.stroke();
      cxt.closePath();
      b++;
      if (b > this.value) {
        clearInterval(timer);
      }
    }, s);
  }
}
