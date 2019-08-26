import { Component, OnInit } from '@angular/core';
import { Subscription, of, interval, Observable } from 'rxjs';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  subscription: Subscription;
  constructor() { }

  ngOnInit() {
    // this.createObservable();
    this.addingSubscription();
  }
  createObservable() {
    this.subscription = of([1, 2, 3]).subscribe(x => {
      console.log(x);
    });
    this.subscription.unsubscribe();
  }

  addingSubscription() {
    const observable1 = interval(400);
    const observable2 = interval(300);

    const subscription = observable1.subscribe(x => console.log('first: ' + x));
    const childSubscription = observable2.subscribe(x => console.log('second: ' + x));
    subscription.add(childSubscription);

    setTimeout(() => {
      // Unsubscribes BOTH subscription and childSubscription
      subscription.unsubscribe();
    }, 5000);
  }
}
