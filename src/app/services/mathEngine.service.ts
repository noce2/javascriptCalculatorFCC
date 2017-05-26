import { Injectable } from '@angular/core';
import { ScreenService } from './screen.service';
import * as _math from 'mathjs';



@Injectable()

export class MathEngineService {
    constructor( private _screenService: ScreenService) { }
    evaluate(input: string){
        let toReturn: string;
        try {
            toReturn = (_math.eval(input)).toString();
        } catch (error) {
            toReturn = "Syntax Error";
        }
        return toReturn;
        
        
    }
}
