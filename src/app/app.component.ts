import { Component } from '@angular/core';
import { OrchestratorService } from './orchestrator.service'

@Component({
  selector: 'my-app',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent  { 
  constructor(private orchestratorService: OrchestratorService){ }

 }
