import {
  ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef,
  Injectable, Injector, OnInit, Type
} from '@angular/core';
import {Modals} from "../../../shared/interfaces";



@Injectable({
  providedIn: 'root'
})

export class DialogService{

  private modals: Modals[] = [];

  constructor(private appRef: ApplicationRef,
              private componentFactoryResolver: ComponentFactoryResolver,
              private injector: Injector,) { }

  add(modal: Modals) {
    this.modals.push(modal);
  }

  openDialog<TData,TResult>(component: Type<TData>, updater: (instance: TData, close: (res: TResult) => void) => void) {
  this.modals.length ?  this.modals[0].dialog.destroy() : null;


    const componentRef = this.createComponentInBody(component)

    this.add({
      dialog: componentRef,
    })

    updater(componentRef.instance, (res: TResult) => {
      this.close(componentRef);
    });
  }

  close<TData>(componentRef: ComponentRef<TData>) {
    componentRef.destroy();
    this.modals = [];
  }

  private createComponentInBody<TData>(component: Type<TData>, initializer?: (instance: TData) => void): ComponentRef<TData> {
    // 1. Create a component reference from the component
    const componentRef = this.componentFactoryResolver.resolveComponentFactory(component).create(this.injector);

    // 1.1 set component inputs
    initializer && initializer(componentRef.instance);

    // 2. Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(componentRef.hostView);

    // 3. Get DOM element from component
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

    // 4. Append DOM element to the body
    document.body.appendChild(domElem);

    return componentRef;
  }
}

