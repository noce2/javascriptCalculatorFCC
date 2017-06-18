import { Component } from '@angular/core';
import { OrchestratorService } from "../services/orchestrator.service";

@Component({
  selector: 'screen',
  templateUrl: `./screen.component.html`,
  styleUrls: ['./screen.component.css'],
})
export class ScreenComponent  { 
  private upperScreenValue: string;
  private lowerScreenValue: string;
  private searchParam = /(?:\d*\.)?\d+(?:e[+-]\d+)?$|[*/+-]$/g;
  private upperScreenDigitLimit = 13;
  private lowerScreenDigitLimit = 21;

  constructor (private _orchestratorService: OrchestratorService) { 
    this._orchestratorService.subscribeToPressedButtonValues( 
      this,this.subscribeCallBacks
    );
    this.upperScreenValue = '0';
    this.lowerScreenValue = '';

  }
  
  private setLowerScreen(input: string){
    console.log(this.lowerScreenValue.length);
    if (this.lowerScreenValue.length > this.lowerScreenDigitLimit){
      this.resetLowerScreen();
      this.lowerScreenValue = this.lowerScreenValue.
                                concat('Digit Limit Exceeded - Press AC');
    } else {
      this.lowerScreenValue = this.lowerScreenValue.concat(input);
    }
    
  }

  private setUpperScreen(input: string){
    this.upperScreenValue = input;
  }

  private setUpperScreenToLastDigitOrOperator(){
    let result = this.lowerScreenValue.match(this.searchParam);
    // below is necessary because above is an Array of results.
    let actualMatch: string
    if(result){
      actualMatch = result[result.length-1];
      if(actualMatch.length < this.upperScreenDigitLimit){
            this.setUpperScreen(actualMatch);
          } else {
            this.setUpperScreen('Digit Limit');
          }
    }
    

    
  }

  private resetLowerScreen(){
    this.lowerScreenValue = '';
  }

  private resetUpperScreen(){
    this.setUpperScreen('0');
  }

  private ac(){
    this.resetLowerScreen();
    this.resetUpperScreen();
  }

  
  private clearLastDigitOrOp(input: string){
    if(input){
      
      return (input.split(this.searchParam))[0];
    } else {
      return "";
    }
    

  }

  private subscribeCallBacks(input: string) {
        switch(input){
          case '=':
            let result:string = this._orchestratorService.calculate(this.lowerScreenValue);
            this.resetLowerScreen();
            this.setLowerScreen(`${result}`);
            this.setUpperScreen(result);
          break;
          case 'AC':
            this.ac();
          break;
          case 'CE':
            let lastInLower = this.lowerScreenValue;
            this.resetLowerScreen();
            this.resetUpperScreen();
            this.setLowerScreen(this.clearLastDigitOrOp(lastInLower));
          break;
          default:
            this.setLowerScreen(input);
            this.setUpperScreenToLastDigitOrOperator();
        }
      }
 }
