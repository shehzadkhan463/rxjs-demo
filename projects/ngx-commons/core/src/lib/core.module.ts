import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { GetTemplateDirective } from './get-template/get-template.directive';

@NgModule({
  declarations: [
    CoreComponent,
    GetTemplateDirective
  ],
  imports: [
  ],
  exports: [
    CoreComponent,
    GetTemplateDirective
  ]
})
export class CoreModule { }
