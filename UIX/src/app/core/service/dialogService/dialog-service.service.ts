import {
  ApplicationRef,
  ComponentFactoryResolver, ComponentRef,
  EmbeddedViewRef,
  Injectable, Injector, OnInit, Type
} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class DialogService{

  private modals: any[] = [];

  constructor(private appRef: ApplicationRef,
              private componentFactoryResolver: ComponentFactoryResolver,
              private injector: Injector,) { }
  add(modal: any) {
    this.modals.push(modal);
  }

  remove(id: string) {
    this.modals = this.modals.filter(x => x.id !== id);
  }

  // open<T>(id: string, component?: Type<T>) {
  //   let modal: any = this.modals.filter(x => x.id === id)[0];
  //   modal.open();
  //   // @ts-ignore
  //   const componentRef = this.createComponentInBody(component)
  //   console.log(componentRef)
  // }
  // @ts-ignore
  openDialog<TData,TResult>(component?: Type<TData>, updater: (instance: TData, close: (res: TResult) => void) => void) {
   // let modal: any = this.modals.filter(x => x.id === id)[0];
   // modal.open();
    // @ts-ignore
    const componentRef = this.createComponentInBody(component)
    console.log(componentRef.instance)
    this.add({
      dialog: componentRef,
      destroy: () => this.removeComponentFromBody(componentRef),
    })
    updater(componentRef.instance, (res: TResult) => {
      this.close(componentRef.instance);
    });
    console.log(componentRef)
  }

  private removeComponentFromBody<T>(componentRef: ComponentRef<T>): void {
    if (componentRef) {
      this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();
    }
  }

  close(id: any) {
    let modal: any = this.modals.filter(x => x.id === id)[0];
    modal.close();
  }

  private createComponentInBody<T>(component: Type<T>, initializer?: (instance: T) => void): ComponentRef<T> {
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

