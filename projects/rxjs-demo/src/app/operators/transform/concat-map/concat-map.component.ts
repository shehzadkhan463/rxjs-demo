import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { concatMap, delay, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // map
    // concat map vs merge map
    //emit delay value
    const source = of(3000, 1000, 2000, 6000, 4000, 500);
    // map value from source into inner observable, when complete emit result and move to next
    const example = source.pipe(
      concatMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
    );
    example.subscribe(val =>
      console.log(`With concatMap: ${val}`)
    );

    // flatMap
    // source
    //   .pipe(
    //     // just so we can log this after the first example has run
    //     delay(5000),
    //     mergeMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
    //   )
    //   .subscribe(val => console.log(`With mergeMap: ${val}`));
  }

}
