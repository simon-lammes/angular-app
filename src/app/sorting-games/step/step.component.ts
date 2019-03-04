import { StepService } from './../step.service';

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Step } from './step.enum';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {

  @Input() step: Step;
  @Output() stepClicked: EventEmitter<Step> = new EventEmitter<Step>();

  constructor(private stepSevice: StepService) { }

  ngOnInit() {
  }

  onStepClicked() {
    this.stepClicked.emit(this.step);
  }
}
