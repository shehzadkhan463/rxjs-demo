import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.scss']
})
export class FunctionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // console.log('before function call');
    // const x = this.myFunction();
    // console.log('function call1', x);
    // const y = this.myFunction();
    // console.log('function call2', y);
    // console.log('after function call');
    this.myObservable();
  }

  myFunction(): number {
    console.log('Hello');
    return 42;
    return 56;
  }

  myObservable() {
    const x = new Observable(observer => {
      console.log('Hello');
      observer.next(42);
      observer.next(452);
      // observer.error()
      observer.complete();
      observer.next(777)
      setTimeout(() => {
        observer.next(300); // happens asynchronously
      }, 5000);
      // observer.error();

    });
    console.log('before subscribe');
    x.subscribe(val1 => {
      console.log('observable1', val1);
    });
    x.subscribe(val2 => {
      console.log('observable2', val2);
    });
    console.log('after subscribe');
  }
}


