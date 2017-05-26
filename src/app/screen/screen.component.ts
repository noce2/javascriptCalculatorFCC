import { Component } from '@angular/core';
import { OrchestratorService } from "../services/orchestrator.service";

@Component({
  selector: 'screen',
  templateUrl: `./screen.component.html`,
  styleUrls: ['./screen.component.css'],
})
export class ScreenComponent  { 
  private upperScreenValue: string = '0';
  private lowerScreenValue: string = '0';

  constructor (private orchestratorService: OrchestratorService) { 
    this.orchestratorService._screenService._currentWorkingValue.subscribe( 
      (input: string) => {
        switch(input){
          case '=':
            let result:string = this.orchestratorService.calculate(this.lowerScreenValue);
            this.setLowerScreen(`=${result}`);
            this.setUpperScreen(result);
          break;
          case 'AC':
            this.ac();
          break;
          case 'CE':
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

  private ac(){
    this.lowerScreenValue = '0';
    this.setUpperScreen('0');
  }
 }
