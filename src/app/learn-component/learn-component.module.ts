import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LearnComponentRoutingModule} from './learn-component-routing.module';
import {LearnComponentComponent} from './learn-component.component';
import {FirstLearnComponent} from './first-learn/first-learn.component';
import {SecondLearnComponent} from './second-learn/second-learn.component';
import {ThirdLearnComponent} from './third-learn/third-learn.component';
import {ForthLearnComponent} from './forth-learn/forth-learn.component';
import {SomelittercomponentsModule} from "../somelitter-componets/somelittercomponents.module";


@NgModule({
  imports: [
    CommonModule,
    LearnComponentRoutingModule,
    SomelittercomponentsModule
  ],
  declarations: [LearnComponentComponent, FirstLearnComponent, SecondLearnComponent, ThirdLearnComponent, ForthLearnComponent],
  providers: [{
    provide: "PIC_CONF",
    useValue: {
      ur1s: "../../../assets/img/learn-first/",
      ur2s: "../../../assets/img/learn-second/",
      ur3s: "../../../assets/img/learn-third/",
      ur4s: "../../../assets/img/learn-four/"
    }
  }]
})
export class LearnComponentModule {
}
