import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ScreenComponent } from './screen.component';
import { ButtonsComponent } from './buttons.component';
import { CalcButtonComponent } from './calcButton.component';
import { TopButtonRowDirective } from './topbuttonrow.directive'

import { OrchestratorService } from './orchestrator.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ScreenComponent, ButtonsComponent, CalcButtonComponent, TopButtonRowDirective ],
  bootstrap:    [ AppComponent ],
  providers: [ OrchestratorService ]
})
export class AppModule { }
