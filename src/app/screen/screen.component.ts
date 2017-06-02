import { Component } from '@angular/core';
import { OrchestratorService } from "../services/orchestrator.service";

@Component({
  selector: 'screen',
  templateUrl: `./screen.component.html`,
  styleUrls: ['./screen.component.css'],
})
export class ScreenComponent  { 
  private upperScreenValue: string = '0';
  private lowerScreenValue: string = '';

  constructor (private orchestratorService: OrchestratorService) { 
    this.orchestratorService._screenService._currentWorkingValue.subscribe( 
      (input: string) => {
        switch(input){
          case '=':
            let result:string = this.orchestratorService.calculate(this.lowerScreenValue);
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
            this.setUpperScreen(input);
        }
      }
    );
  }

  private setLowerScreen(input: string){
    this.lowerScreenValue = this.lowerScreenValue.concat(input);
  }

  private setUpperScreen(input: string){
    this.upperScreenValue = input;
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
      let searchParam = /(?:\d*\.)?\d+$|[*/+-]$/g;
      return (input.split(searchParam))[0];
    } else {
      return "";
    }
    

  }
 }
