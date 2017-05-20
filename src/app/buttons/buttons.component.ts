import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';

import { CalcButtonComponent } from './calc-button.component';

import { TopButtonRowDirective } from './directives/topbuttonrow.directive'


@Component({
  selector: 'buttons',
  entryComponents: [CalcButtonComponent],
  templateUrl: `./buttons.component.html`,
  styleUrls: ['./buttons.component.css'],
})

export class ButtonsComponent implements OnInit{
  private topRowVals = ['AC', 'CE', '/', '*'];
  // private secondRowVals = ['7', '8', '9', '-'];
  // private thirdRowVals = ['4', '5', '6', '+'];
  
  @ViewChild(TopButtonRowDirective) topbuttonrowhost: TopButtonRowDirective; // need to write child component values so i nedd this

  constructor(private _componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.topRowVals.forEach((each)=> {
      let factory = this._componentFactoryResolver.resolveComponentFactory(CalcButtonComponent);
      let viewContainerRef = this.topbuttonrowhost.viewContainerRef;
      let compRef = viewContainerRef.createComponent(factory);
      compRef.instance.value = each;
    });
    
    }
  }
 
