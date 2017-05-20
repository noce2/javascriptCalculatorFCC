import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[topbuttonrow-host]',
    
})

export class TopButtonRowDirective {
    constructor(public viewContainerRef: ViewContainerRef) { };
}
