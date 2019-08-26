import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Select } from '@ngx-commons/multiselect';
import { AutoUnsubscribe } from '../auto';
import { interval } from 'rxjs';

@Component({
  selector: 'app-multiselect-demo',
  templateUrl: './multiselect-demo.component.html',
  styleUrls: ['./multiselect-demo.component.scss']
})
@AutoUnsubscribe()
export class MultiselectDemoComponent implements OnInit, OnDestroy {
  list: Select[];
  selectForm: FormGroup;
  two$: any;
  constructor(private formBuilder: FormBuilder) {
    this.list = [];
    this.selectForm = this.formBuilder.group({
      team: '',
      league: ''
    });
  }

  ngOnInit() {
    this.list = [
      { id: '1', value: 'FC Barcelona' },
      { id: '2', value: 'Real Madrid FC' },
      { id: '2', value: 'Juventus FC' }
    ];

    this.two$ = interval(1000).subscribe(data => {});
  }

  addItem() {
    this.list = this.list.concat({ id: '4', value: 'Manchester United FC' });
  }
  ngOnDestroy() {
    console.log('destroy')
  }
}
