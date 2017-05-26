import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';


@Injectable()

export class ScreenService {
    _currentWorkingValue = new Subject<string> ();
}