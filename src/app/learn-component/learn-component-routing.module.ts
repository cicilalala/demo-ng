import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LearnComponentComponent} from "./learn-component.component";
import {FirstLearnComponent} from "./first-learn/first-learn.component";
import {SecondLearnComponent} from "./second-learn/second-learn.component";
import {ThirdLearnComponent} from "./third-learn/third-learn.component";
import {ForthLearnComponent} from "./forth-learn/forth-learn.component";

const routes: Routes = [
  {
    path: 'learncomponent', component: LearnComponentComponent,
    children: [{path: '', redirectTo: 'first', pathMatch: 'full'},
      {path: 'first', component: FirstLearnComponent},
      {path: 'second', component: SecondLearnComponent},
      {path: 'third', component: ThirdLearnComponent},
      {path: 'four', component: ForthLearnComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnComponentRoutingModule {
}
