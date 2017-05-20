import { Component } from '@angular/core';
import { OrchestratorService } from './services/orchestrator.service'

@Component({
  selector: 'calc-app',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent  { 
  constructor(private orchestratorService: OrchestratorService){ }

 }
