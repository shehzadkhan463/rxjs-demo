import { Component, OnInit } from '@angular/core';
import { merge, interval } from 'rxjs';
import { take, mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const first = interval(9000).pipe(take(3));
    const second = interval(4000).pipe(take(3));
    const third = interval(2000).pipe(take(3));
    const merged = merge(first.pipe(mapTo('FIRST!')),
    second.pipe(mapTo('SECOND!')),
    third.pipe(mapTo('THIRD')));
    merged.subscribe(x => console.log(x));
  }

}
