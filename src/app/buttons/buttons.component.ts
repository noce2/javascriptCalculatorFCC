import { Component, ComponentFactoryResolver, OnInit, ViewChild, Directive } from '@angular/core';

import { CalcButtonComponent } from './calc-button.component';

import { TopButtonRowDirective } from './directives/topbuttonrow.directive';
import { SecondButtonRowDirective } from './directives/secondbuttonrow.directive';
import { ThirdButtonRowDirective } from './directives/thirdbuttonrow.directive';


@Component({
  selector: 'buttons',
  entryComponents: [CalcButtonComponent],
  templateUrl: `./buttons.component.html`,
  styleUrls: ['./buttons.component.css'],
})

export class ButtonsComponent implements OnInit{
  private topRowVals = ['AC', 'CE', '/', '*'];
  private secondRowVals = ['7', '8', '9', '-'];
  private thirdRowVals = ['4', '5', '6', '+'];
  
  @ViewChild(TopButtonRowDirective) topbuttonrowhost: TopButtonRowDirective; 
  // the above allows you need to write child component values so i need this
  @ViewChild(SecondButtonRowDirective) secondbuttonrowhost: SecondButtonRowDirective;
  @ViewChild(ThirdButtonRowDirective) thirdbuttonrowhost: ThirdButtonRowDirective;

  constructor(private _componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.createButtonsInView(this.topRowVals,this.topbuttonrowhost);
    this.createButtonsInView(this.secondRowVals,this.secondbuttonrowhost);
    this.createButtonsInView(this.thirdRowVals,this.thirdbuttonrowhost);
    /*
    this.topRowVals.forEach((each)=> {
      let factory = this._componentFactoryResolver.resolveComponentFactory(CalcButtonComponent);
      let viewContainerRef = this.topbuttonrowhost.viewContainerRef;
      let compRef = viewContainerRef.createComponent(factory);
      compRef.instance.value = each;
    });
    */
  }
  
  createButtonsInView(buttonValues: String[],targetHost:any){
    buttonValues.forEach((each) => {
      let factory = this._componentFactoryResolver.resolveComponentFactory(CalcButtonComponent);
      let viewContainerRef = targetHost.viewContainerRef;
      let compRef = viewContainerRef.createComponent(factory);
      compRef.instance.value = each;
    });
  }
  }
 
