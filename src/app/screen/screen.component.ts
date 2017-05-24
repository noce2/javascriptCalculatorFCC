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
    this.orchestratorService._currentWorkingValue.subscribe(
      (input: string) => {
        this.setLowerScreen(input);
        this.setUpperScreen(input);
      }
    );
  }

  setLowerScreen(input: string){
    this.lowerScreenValue = this.lowerScreenValue.concat(input);
  }

  setUpperScreen(input: string){
    this.upperScreenValue = input;
  }
 }
