import { Component, Input } from '@angular/core';
import { OrchestratorService } from '../services/orchestrator.service';

@Component({
  selector: 'calc-button',
  templateUrl: `./calc-button.component.html`,
  styleUrls: ['./buttons.component.css']
})

export class CalcButtonComponent {
  public value: string = "";
  constructor(private orchestratorservice: OrchestratorService){ }
  press() {
        this.orchestratorservice.getValue(this.value);
    }
}
