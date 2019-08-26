import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-distinct-until-changed',
  templateUrl: './distinct-until-changed.component.html',
  styleUrls: ['./distinct-until-changed.component.scss']
})
export class DistinctUntilChangedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const source$ = from([1, 1, 2, 2, 1, "1", 3, 3]);

    source$
      .pipe(distinctUntilChanged())
      .subscribe(console.log);
      //distinctUntilKeyChanged
  }

}
