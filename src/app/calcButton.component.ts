import { Component, Input } from '@angular/core';
import { OrchestratorService } from './orchestrator.service';

@Component({
  selector: 'calcButton',
  templateUrl: `./calcButton.component.html`,
  styleUrls: ['./buttons.component.css']
})

export class CalcButtonComponent {
  public value: string = "";
  constructor(private orchestratorservice: OrchestratorService){ }
  press() {
        this.orchestratorservice.getValue(this.value);
    }
}
