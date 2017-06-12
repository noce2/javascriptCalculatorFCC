import { Component } from '@angular/core';
import { OrchestratorService } from './services/orchestrator.service';

//Import app-wide fonts and css styling
import '../styles.css';

@Component({
  selector: 'calc-app',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent  { 

  constructor(private orchestratorService: OrchestratorService){ }
  
 }
