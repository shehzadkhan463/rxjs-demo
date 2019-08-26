import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const source = of(1, 2, 3, 4, 5);
    const example = source.pipe(take(3));
    example.subscribe(val => console.log(val));

    // takeLast
  }

}
