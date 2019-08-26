import { Component, OnInit } from '@angular/core';

import { of, concat, interval } from 'rxjs';
import { delay, take, mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.concatObservables();
  }

  concatObservables() {
    // concat(of(1, 2, 3), of(4, 5, 6)).subscribe(console.log);
    // concat(of(1, 2, 3).pipe(delay(3000)), of(4, 5, 6)).subscribe(console.log);
    const first = interval(9000).pipe(take(3));
    const second = interval(4000).pipe(take(3));
    const third = interval(2000).pipe(take(3));
    const concatObservable = concat(first.pipe(mapTo('FIRST!')),
    second.pipe(mapTo('SECOND!')),
    third.pipe(mapTo('THIRD')));
    concatObservable.subscribe(x => console.log(x));
  }

}
