import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Step } from './step';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {

  @Input() step: Step;
  @Output() clicked: EventEmitter<Step> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClicked(): void {
    this.clicked.emit(this.step);
  }

}

