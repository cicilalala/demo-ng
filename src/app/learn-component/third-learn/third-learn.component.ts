import {Component, Inject, OnInit} from '@angular/core';

@Component({
  selector: 'app-third-learn',
  templateUrl: './third-learn.component.html',
  styleUrls: ['./third-learn.component.sass']
})
export class ThirdLearnComponent implements OnInit {

  constructor(@Inject('PIC_CONF') private config) {
    console.log(" config", config);
  }


  ngOnInit() {
  }

}
