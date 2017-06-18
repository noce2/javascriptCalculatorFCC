import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';


@Injectable()

export class ScreenService {
    private _currentWorkingValue = new Subject<string> ();

    updateCurrentWorkingValue(input: string){
        this._currentWorkingValue.next(input);
    }

    subscribeToScreenService(_thisObj: object, callback: (input: string)=> void){
        // console.log(_thisObj);
        // console.log(callback);
        this._currentWorkingValue.subscribe(
            function(_nextValue){
                callback.call(_thisObj,_nextValue);
            }
            
        );
    }
}