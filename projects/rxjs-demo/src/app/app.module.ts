import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PullComponent } from './intro/pull/pull.component';
import { PushComponent } from './intro/push/push.component';
import { WhyRxjsComponent } from './intro/why-rxjs/why-rxjs.component';
import { PushModelComponent } from './observables/push-model/push-model.component';
import { FunctionsComponent } from './observables/functions/functions.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { CombineComponent } from './operators/join/combine/combine.component';
import { ConcatComponent } from './operators/join/concat/concat.component';
import { MergeComponent } from './operators/join/merge/merge.component';
import { StartWithComponent } from './operators/join/start-with/start-with.component';
import { DebounceTimeComponent } from './operators/filter/debounce-time/debounce-time.component';
import { DistinctUntilChangedComponent } from './operators/filter/distinct-until-changed/distinct-until-changed.component';
import { TakeComponent } from './operators/filter/take/take.component';
import { TakeUntilComponent } from './operators/filter/take-until/take-until.component';
import { ConcatMapComponent } from './operators/transform/concat-map/concat-map.component';
import { SwitchMapComponent } from './operators/transform/switch-map/switch-map.component';
import { DoComponent } from './operators/utility/do/do.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { SchedulersComponent } from './schedulers/schedulers.component';

export const routes: Routes = [
  { path: 'pull', component: PullComponent },
  { path: 'push', component: PushComponent },
  { path: 'why-rxjs', component: WhyRxjsComponent },
  {
    path: 'observables', children: [
      { path: 'intro', component: PushModelComponent },
      { path: 'function-vs-observable', component: FunctionsComponent },
    ]
  },
  { path: 'subscription', component: SubscriptionComponent },
  {
    path: 'operators', children: [
      { path: 'combine', component: CombineComponent },
      { path: 'concat', component: ConcatComponent },
      { path: 'merge', component: MergeComponent },
      { path: 'start-with', component: StartWithComponent },
      { path: 'debounce-time', component: DebounceTimeComponent },
      { path: 'distinct-until-changed', component: DistinctUntilChangedComponent },
      { path: 'take', component: TakeComponent },
      { path: 'take-until', component: TakeUntilComponent },
      { path: 'concat-map', component: ConcatMapComponent },
      { path: 'switch-map', component: SwitchMapComponent },
      { path: 'do-tap', component: DoComponent }
    ]
  },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'schedulers', component: SchedulersComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PullComponent,
    PushComponent,
    WhyRxjsComponent,
    PushModelComponent,
    FunctionsComponent,
    SubscriptionComponent,
    CombineComponent,
    ConcatComponent,
    MergeComponent,
    StartWithComponent,
    DebounceTimeComponent,
    DistinctUntilChangedComponent,
    TakeComponent,
    TakeUntilComponent,
    ConcatMapComponent,
    SwitchMapComponent,
    DoComponent,
    SubjectsComponent,
    SchedulersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
