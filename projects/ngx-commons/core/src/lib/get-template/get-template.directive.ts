import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[ngxGetTemplate]'
})
export class GetTemplateDirective<T> {
  @Input('ngxGetTemplate') public set ngxGetTemplate(value: string | TemplateRef<HTMLElement>) {
    if (typeof value === 'string') {
      console.log('hey');
    } else {
      console.log('vwe')
    }
    console.log(value)
  }
  constructor(
    public container: ViewContainerRef,
    public template: TemplateRef<any>
  ) { }

  getTemplate(): any {
    return this.container.createEmbeddedView(this.template);
  }
}
