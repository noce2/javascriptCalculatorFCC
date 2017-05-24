import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[fifthbuttonrow-host]',
    
})

export class FifthButtonRowDirective {
    constructor(public viewContainerRef: ViewContainerRef) { };
}
