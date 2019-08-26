import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { GetTemplateDirective } from '@ngx-commons/core/src/lib/get-template/get-template.directive';
import { SelectTemplate } from '../multiselect.model';

@Directive({
  selector: '[ngxGetOptions]'
})
export class GetOptionsDirective extends GetTemplateDirective<SelectTemplate> {

  constructor(
    public template: TemplateRef<any>,
    public viewRef: ViewContainerRef
    ) {
    super(viewRef, template);
    console.log(this.ngxGetTemplate)
  }

}
