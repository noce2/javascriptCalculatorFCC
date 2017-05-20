import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[secondbuttonrow-host]',
    
})

export class SecondButtonRowDirective {
    constructor(public viewContainerRef: ViewContainerRef) { };
}
