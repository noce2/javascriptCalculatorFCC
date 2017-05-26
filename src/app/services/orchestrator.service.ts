import { Injectable } from '@angular/core';

import { ScreenService } from './screen.service';
import { MathEngineService } from './mathEngine.service';


@Injectable()

export class OrchestratorService {
    /* 
        The function of this Orchestrator is to decide what to do based on the 
        button input it receives.
    */
    
    private currentWorkingValue: string;
    
    

    
    constructor(public _screenService: ScreenService,
                private _mathEngineService: MathEngineService){ }
    // _screenService is public so that it can be accessed via the orchestrator
    // during subscription in other components


    calculate(input: string){
        return this._mathEngineService.evaluate(input);
        
    }

    private pushToScreen(input: string){
        this._screenService._currentWorkingValue.next(input);
    }
    
    whatDoIDo(input: string) {
        switch (input) {
            case "=":
            case "AC":
            case "CE":
            default:
                this.pushToScreen(input);
        }
    }
}