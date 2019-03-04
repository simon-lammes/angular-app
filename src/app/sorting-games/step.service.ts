import { Injectable } from '@angular/core';
import { Step } from './step/step.enum';

@Injectable({
  providedIn: 'root'
})
export class StepService {

  constructor() { }

  getAllSteps(): Step[] {
    return [Step.DIVIDE, Step.MERGE];
  }
}
