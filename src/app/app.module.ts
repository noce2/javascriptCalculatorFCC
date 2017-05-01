import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ScreenComponent } from './screen.component'
import { ButtonsComponent } from './buttons.component'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ScreenComponent, ButtonsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
