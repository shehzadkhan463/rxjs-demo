import { Component, OnInit } from '@angular/core';
import { combineLatest, of, timer } from 'rxjs';

@Component({
  selector: 'app-combine',
  templateUrl: './combine.component.html',
  styleUrls: ['./combine.component.scss']
})
export class CombineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.combineLatest();
  }

  combineLatest() {
    
    const firstTimer = timer(1000, 2000);
    const secondTimer = timer(3000, 2000);

    // 2. Call combineLatest operator, inject data stream observables in an array
    const connectStream = combineLatest(firstTimer, secondTimer);

    // 3. Subscibe combineLatest
    connectStream.subscribe(([firstTimer, secondTimer]) => {
      console.log('First Timer' + ' ' + firstTimer);
      console.log('Second Timer' + ' ' + secondTimer);
    })
  }
}
