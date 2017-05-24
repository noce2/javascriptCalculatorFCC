import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ScreenComponent } from './screen/screen.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CalcButtonComponent } from './buttons/calc-button.component';
import { TopButtonRowDirective } from './buttons/directives/topbuttonrow.directive';
import { SecondButtonRowDirective } from './buttons/directives/secondbuttonrow.directive';
import { ThirdButtonRowDirective } from './buttons/directives/thirdbuttonrow.directive';
import { FourthButtonRowDirective } from './buttons/directives/fourthbuttonrow.directive';
import { FifthButtonRowDirective } from './buttons/directives/fifthbuttonrow.directive';

import { OrchestratorService } from './services/orchestrator.service';
import { ScreenService } from './services/screen.service';
import { MathEngineService } from './services/mathEngine.service'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ScreenComponent, ButtonsComponent, 
                  CalcButtonComponent, TopButtonRowDirective, SecondButtonRowDirective,
                  ThirdButtonRowDirective, FourthButtonRowDirective,
                   FifthButtonRowDirective ],
  bootstrap:    [ AppComponent ],
  providers: [ OrchestratorService, ScreenService, MathEngineService ]
})
export class AppModule { }
