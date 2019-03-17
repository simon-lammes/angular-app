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
  possibleArrayLengths: number[];
  selectedArrayLength: number;
  get possibleSteps(): Step[] {
    return MergeSortArray.possibleSteps;
  }
  get successMessage(): string {
    if (this.mistakeCount === 1) {
      return 'You finished with ' + this.mistakeCount + ' mistake.';
    } else {
      return 'You finished with ' + this.mistakeCount + ' mistakes.';
    }
  }

  constructor(private randomArrayService: RandomArrayService) { }

  ngOnInit() {
    this.possibleArrayLengths = [4, 5, 6, 7];
    this.selectedArrayLength = 4;
    this.startNewGame();
  }

  startNewGame(): any {
    this.array = new MergeSortArray(this.randomArrayService.getRandomArray(this.selectedArrayLength, 0, 20), null);
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
