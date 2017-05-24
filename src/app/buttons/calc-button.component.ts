import { Component, Input } from '@angular/core';
import { OrchestratorService } from '../services/orchestrator.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'calc-button',
  templateUrl: `./calc-button.component.html`,
  styleUrls: ['./buttons.component.css']
})

export class CalcButtonComponent {
  value: string;
  constructor(private orchestratorservice: OrchestratorService){ }
  press() {
        this.orchestratorservice.getValue(this.value);
    }
}
