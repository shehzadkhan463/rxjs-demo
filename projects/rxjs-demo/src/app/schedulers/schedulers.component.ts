import { Component, OnInit } from '@angular/core';
import { of, asyncScheduler, asapScheduler, queueScheduler, merge } from 'rxjs';
import { startWith, filter } from 'rxjs/operators';

@Component({
  selector: 'app-schedulers',
  templateUrl: './schedulers.component.html',
  styleUrls: ['./schedulers.component.scss']
})
export class SchedulersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // stl
    // console.log('script start');

    // setTimeout(function () {
    //   console.log('setTimeout'); // macrotask queue
    // }, 0);

    // Promise.resolve().then(function () {
    //   console.log('promise1'); // microtask queue
    // }).then(function () {
    //   console.log('promise2'); // microtask queue
    // });

    // console.log('script end');
    this.runSchedulers();
  }

  runSchedulers() {
    const async = of('')
      .pipe(startWith('async', asyncScheduler)); // macro

    const asap = of('')
      .pipe(startWith('asap', asapScheduler)); // micro

    const queue = of('')
      .pipe(startWith('queue', queueScheduler)); // synch
    
      merge(
        async,
        asap,
        queue)
      .pipe(filter(x => !!x))
      .subscribe(console.log);
    
    console.log('after subscription')
  }

}
