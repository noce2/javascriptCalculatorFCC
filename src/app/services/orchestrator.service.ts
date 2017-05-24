import { Injectable } from '@angular/core';

import { ScreenService } from './screen.service';
import { MathEngineService } from './mathEngine.service';

import { Subject } from 'rxjs/Subject';

@Injectable()

export class OrchestratorService {
    /* 
        The function of this Orchestrator is to decide what to do based on the 
        button input it receives.
    */
    
    private currentWorkingValue: string;
    
    _currentWorkingValue = new Subject<string> ();

    
    constructor(private _screenService: ScreenService){}

    getValue(input: string){
        // decides what to do based on a set of stored descriptions
        this.currentWorkingValue = input;
        //this.pushToScreen(input);
        console.log(this.currentWorkingValue);
        this._currentWorkingValue.next(input);
    }

    pushToScreen(input: string){
        //this._screenService.pushToScreen(input);
    }
    
}