import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-do',
  templateUrl: './do.component.html',
  styleUrls: ['./do.component.scss']
})
export class DoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const source = of(1, 2, 3, 4, 5);
    const example = source.pipe(
      tap(val => console.log(`BEFORE MAP: ${val}`)),
      map(val => val + 10),
      tap(val => console.log(`AFTER MAP: ${val}`))
    );
    example.subscribe(val => console.log(val));
  }

}
