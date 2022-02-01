import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AuthenticationComponent } from "../../core/authentication/authentication.component";
import { RefDirective } from "../../core/directives/ref.directive";

@Component({
  selector: 'master-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild(RefDirective, {static: false}) refDir!: RefDirective;
  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  openModalForRegistration() {
    const modalFactory = this.resolver.resolveComponentFactory(AuthenticationComponent);
    if(!this.refDir.containerRef.get(0)) {
      this.refDir.containerRef.clear();
      const component = this.refDir.containerRef.createComponent(modalFactory);
      component.instance.title = 'dddd'
      component.instance.close.subscribe(()=>{
        setTimeout(()=>this.refDir.containerRef.clear(),500)
        component.destroy()
      })
    }
  }
}
