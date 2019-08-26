import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.createSubject();
    // this.behaviourSubject();
    // this.replaySubject();
    this.asyncSubject();
  }

  createSubject() {
    const sub = new Subject();
    sub.subscribe({ next: (v) => console.log(`observerA: ${v}`) });
    sub.next(1);
    sub.next(2);
    sub.subscribe({ next: (v) => console.log(`observerB: ${v}`) });
    sub.next(3);

  }

  behaviourSubject() {
    const sub = new BehaviorSubject(0);
    sub.subscribe({ next: (v) => console.log(`observerA: ${v}`) });
    sub.next(1);
    sub.next(2);
    sub.subscribe({ next: (v) => console.log(`observerB: ${v}`) });
    sub.next(3);
  }

  replaySubject() {
    const sub = new ReplaySubject(1);
    sub.next(1);
    sub.next(2);
    sub.subscribe({ next: (v) => console.log(`observerA: ${v}`) });
    sub.next(3);
    sub.next(4);
    sub.subscribe({ next: (v) => console.log(`observerB: ${v}`) });
    sub.next(5);
  }

  asyncSubject() {
    const sub = new AsyncSubject();

    sub.subscribe({ next: (v) => console.log(`observerB: ${v}`) });
    sub.next(0);
    sub.next(1);
    sub.subscribe({ next: (v) => console.log(`observerB: ${v}`) });
    sub.next(2);
    sub.next(3);
    sub.next(4);
    sub.next(5);
    sub.complete();
  }
}
