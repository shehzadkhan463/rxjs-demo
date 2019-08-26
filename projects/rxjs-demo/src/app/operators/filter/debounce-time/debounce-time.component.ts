import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss']
})
export class DebounceTimeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // filter
    const searchBox = document.getElementById('search');

    const keyup$ = fromEvent(searchBox, 'keyup');

    keyup$
      .pipe(
        map((i: any) => i.currentTarget.value),
        debounceTime(1000)
      )
      .subscribe(console.log);
  }

}
