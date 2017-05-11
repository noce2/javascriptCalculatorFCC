import { Injectable } from '@angular/core';

@Injectable()

export class OrchestratorService {
    getValue(input: string){
        // decides what to do based on a set of stored descriptions
        console.log(input);
    }
}