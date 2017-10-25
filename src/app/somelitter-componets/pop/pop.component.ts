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

  openPop(word) {
    this.animateState = 'open';
    this.text = word;
  }

  close(e) {
    this.animateState = "close";
    this.falseOrTrue.emit(e);
  }
}
