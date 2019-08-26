import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-push-model',
  templateUrl: './push-model.component.html',
  styleUrls: ['./push-model.component.scss']
})
export class PushModelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.createObservable();
  }
  createObservable() {
    const observable = new Observable(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });
    console.log('just before subscribe');
    observable.subscribe({
      next(x) { console.log('got value ' + x); },
      error(err) { console.error('something wrong occurred: ' + err); },
      complete() { console.log('done'); }
    });
    console.log('just after subscribe');
  }

}
