import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Stock} from "../../stock/stocks.service";

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.sass']
})
export class StarsComponent implements OnInit, OnChanges {
  @Input() rating = 0;
  @Input() canClick: boolean;
  @Output() ratingChange: EventEmitter<Number> = new EventEmitter();
  stars: Array<boolean>;
  isDisabled: boolean;


  constructor() {
  }

  ngOnInit() {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
    this.isDisabled = !this.canClick;
  }

  ngOnChanges() { // 注意，如果属性是随时变化的，应该实现这个钩子
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
    this.isDisabled = !this.canClick;
  }

  change(index) {
    if (!this.canClick) {
      return;
    }
    const sts = [];
    for (let i = 0; i < 5; i++) {
      sts.push(i >= index + 1);
    }
    this.stars = sts;
    this.ratingChange.emit(index + 1);
  }

}

