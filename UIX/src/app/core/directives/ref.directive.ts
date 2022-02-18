import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[masterRef]'
})
export class RefDirective {
  constructor(public containerRef: ViewContainerRef) {
  }
}
