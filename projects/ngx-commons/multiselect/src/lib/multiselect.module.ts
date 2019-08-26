import { NgModule } from '@angular/core';
import { MultiselectComponent } from './multiselect.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { GetOptionsDirective } from './get-options/get-options.directive';

@NgModule({
  declarations: [
    MultiselectComponent,
    GetOptionsDirective
  ],
  imports: [
    CommonModule,
    OverlayModule
  ],
  exports: [
    MultiselectComponent,
    GetOptionsDirective
  ]
})
export class MultiselectModule { }
