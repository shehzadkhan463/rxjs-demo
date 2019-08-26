import { NgModule } from '@angular/core';

import { MultiselectDemoComponent } from './multiselect-demo.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { SimpleSelectComponent } from './simple-select/simple-select.component';
import { MultiselectModule } from '@ngx-commons/multiselect';
import { MultiselectRoutingModule } from './multiselect-demo-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MultiselectModule,
    MultiselectRoutingModule,
  ],
  declarations: [
    MultiselectDemoComponent,
    SimpleSelectComponent
  ]
})
export class MultiselectDemoModule { }
