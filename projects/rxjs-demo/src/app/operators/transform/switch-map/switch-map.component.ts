import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const clicks = fromEvent(document.querySelector('button'), 'click');
    const result = clicks.pipe(switchMap((ev) => interval(1000)));
    result.subscribe(x => console.log(x));
  }

}
