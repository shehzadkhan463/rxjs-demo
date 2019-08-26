import { Component, OnInit, Input, forwardRef, ContentChildren, QueryList } from '@angular/core';
import { OnChange } from '../../../core/';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MultiSelectConfiguration, Select, SelectTemplate } from './multiselect.model';

@Component({
  selector: 'ngx-multiselect',
  templateUrl: './multiselect.component.html',
  styles: [`
    `],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => MultiselectComponent), multi: true }
  ]
})
export class MultiselectComponent implements OnInit, ControlValueAccessor {
  @OnChange<Select[]>(function(value, simpleChange) {
    console.log({ value, simpleChange })
  })
  @Input() public items: Select[];
  @OnChange<MultiSelectConfiguration>(function() {

  })
  @Input() public configurations: MultiSelectConfiguration;
  public isOpen: boolean;
  constructor() {
    this.isOpen = false;
  }

  @ContentChildren('options') public options: QueryList<SelectTemplate[]>;


  ngOnInit() {
  }

  setItems(value, simpleChange) {
    console.log({value, simpleChange})
  }
  writeValue() { }

  registerOnChange() { }

  registerOnTouched() { }

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
