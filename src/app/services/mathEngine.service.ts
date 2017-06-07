import { Injectable } from '@angular/core';
import * as _math from 'mathjs';



@Injectable()

export class MathEngineService {

    private digitParams = { 
        notation: 'auto',
        precision: 9,
        exponential: {
            lower: 1,
            upper: 1e5
        }
    };

    evaluate(input: string){
        let toReturn: string;
        let mathAns: number;
        try {
            mathAns = _math.eval(input);
            
            toReturn = this.truncateDigits(mathAns,this.digitParams);

        } catch (error) {
            toReturn = "Syntax Error";
        }
        return toReturn;
        
        
    }

    private truncateDigits (input: number, options: Object){
        return _math.format(input, options);
    }
}
