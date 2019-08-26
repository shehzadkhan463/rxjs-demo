import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.scss']
})
export class TakeUntilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const source = interval(1000);
    const timer$ = timer(5000);
    const example = source.pipe(takeUntil(timer$));
    example.subscribe(val => console.log(val));
  }

}
