import { Component } from '@angular/core';
import { CalcButton } from './calcButton.class';
import { OrchestratorService } from './orchestrator.service';

@Component({
  selector: 'calcButton0',
  templateUrl: `./calcButton.component.html`,
  styleUrls: ['./buttons.component.css']
})

export class CalcButtonComponent {
  calcButton = new CalcButton('0');
  constructor(private orchestratorservice: OrchestratorService){ }
  press() {
        this.orchestratorservice.getValue(this.calcButton.value);
    }
}
