import { Injectable } from '@angular/core';


@Injectable()

export class MathEngineService {
    evaluate(input: string){
        console.log(math.abs(-1));
        //mathjs is exported as a globally available namespace
        return (math.eval(input)).toString();
        
        /*let answer: any = mathjs.eval(input)
        let answerString: string = answer.toString();
        return answerString;*/
    }
}
