import { Component } from '@angular/core';
import { CalcButtonComponent } from './calcButton.component';


@Component({
  selector: 'buttons',
  templateUrl: `./buttons.component.html`,
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent  {
  topRowValues = ['AC', 'CE', '/', '*'];

 }
