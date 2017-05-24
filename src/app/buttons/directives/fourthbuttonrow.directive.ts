import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[fourthbuttonrow-host]',
    
})

export class FourthButtonRowDirective {
    constructor(public viewContainerRef: ViewContainerRef) { };
}
