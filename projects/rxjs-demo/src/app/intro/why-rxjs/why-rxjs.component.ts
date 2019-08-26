import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'app-why-rxjs',
  templateUrl: './why-rxjs.component.html',
  styleUrls: ['./why-rxjs.component.scss']
})
export class WhyRxjsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.applyClickListener();
  }

  applyClickListener() {
    const button = document.querySelector('button');
    // click listeners
    // vanilla javascript
    button.addEventListener('click', () => {

      console.log('vanilla-js click event');
    });
    // // ****************
    // // rxjs
    fromEvent(button, 'click').subscribe(() => {
      console.log('rxjs click');
    });
  }

}
