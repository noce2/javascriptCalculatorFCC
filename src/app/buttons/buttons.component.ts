import { Component, ComponentFactoryResolver, OnInit, ViewChild, Directive } from '@angular/core';

import { CalcButtonComponent } from './calc-button.component';

import { TopButtonRowDirective } from './directives/topbuttonrow.directive';
import { SecondButtonRowDirective } from './directives/secondbuttonrow.directive';
import { ThirdButtonRowDirective } from './directives/thirdbuttonrow.directive';
import { FourthButtonRowDirective } from './directives/fourthbuttonrow.directive';
import { FifthButtonRowDirective } from './directives/fifthbuttonrow.directive';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'buttons',
  entryComponents: [CalcButtonComponent],
  templateUrl: `./buttons.component.html`,
  styleUrls: ['./buttons.component.css'],
})

export class ButtonsComponent implements OnInit{
  private topRowVals = ['AC', 'CE', '(', ')'];
  private secondRowVals = ['7', '8', '9', '/'];
  private thirdRowVals = ['4', '5', '6', '*'];
  private fourthRowVals = ['1', '2', '3', '-'];
  private fifthRowVals = ['0','.','=','+']
  
  @ViewChild(TopButtonRowDirective) topbuttonrowhost: TopButtonRowDirective; 
  @ViewChild(SecondButtonRowDirective) secondbuttonrowhost: SecondButtonRowDirective;
  @ViewChild(ThirdButtonRowDirective) thirdbuttonrowhost: ThirdButtonRowDirective;
  @ViewChild(FourthButtonRowDirective) fourthbuttonrowhost: FourthButtonRowDirective;
  @ViewChild(FifthButtonRowDirective) fifthbuttonrowhost: FifthButtonRowDirective;

  // the above allows you to write child component values so i need this

  constructor(private _componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.createButtonsInView(this.topRowVals,this.topbuttonrowhost);
    this.createButtonsInView(this.secondRowVals,this.secondbuttonrowhost);
    this.createButtonsInView(this.thirdRowVals,this.thirdbuttonrowhost);
    this.createButtonsInView(this.fourthRowVals,this.fourthbuttonrowhost);
    this.createButtonsInView(this.fifthRowVals,this.fifthbuttonrowhost);
    
  }
  
  createButtonsInView(buttonValues: String[],targetHost:any){
    buttonValues.forEach((each) => { // arrow functions ensure that "this" keeps original context
      let factory = this._componentFactoryResolver.resolveComponentFactory(CalcButtonComponent);
      let viewContainerRef = targetHost.viewContainerRef;
      let compRef = viewContainerRef.createComponent(factory);
      compRef.instance.value = each;
    });
  }
  }
 
