import { MergeSortArray } from './../merge-sort-array/merge-sort-array';
import { Step } from './../step/step';
import { Component, OnInit, Inject } from '@angular/core';
import { RandomArrayService } from '../random-array.service';

@Component({
  selector: 'app-merge-sort',
  templateUrl: './merge-sort.component.html',
  styleUrls: ['./merge-sort.component.css']
})
export class MergeSortComponent implements OnInit {

  array: MergeSortArray;
  mistakeCount: number;
  get possibleSteps(): Step[] {
    return MergeSortArray.possibleSteps;
  }

  constructor(private randomArrayService: RandomArrayService) { }

  ngOnInit() {
    this.array = new MergeSortArray(this.randomArrayService.getRandomArray(4, 0, 20), null);
    this.mistakeCount = 0;
  }

  onStepSelected(step: Step): void {
    const nextStep = this.array.nextStep(false);
    if (nextStep === step) {
      this.array.nextStep(true);
    } else {
      this.mistakeCount++;
    }
  }
}
