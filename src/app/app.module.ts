import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ScreenComponent } from './screen/screen.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CalcButtonComponent } from './buttons/calc-button.component';
import { TopButtonRowDirective } from './buttons/directives/topbuttonrow.directive'

import { OrchestratorService } from './services/orchestrator.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ScreenComponent, ButtonsComponent, CalcButtonComponent, TopButtonRowDirective ],
  bootstrap:    [ AppComponent ],
  providers: [ OrchestratorService ]
})
export class AppModule { }
