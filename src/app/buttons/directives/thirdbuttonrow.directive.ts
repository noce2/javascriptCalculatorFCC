import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[thirdbuttonrow-host]',
    
})

export class ThirdButtonRowDirective {
    constructor(public viewContainerRef: ViewContainerRef) { };
}
