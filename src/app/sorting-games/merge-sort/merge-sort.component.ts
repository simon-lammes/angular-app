import { ArrayCellComponent } from './../array-cell/array-cell.component';
import { Component, OnInit } from '@angular/core';
import { RandomArrayService } from '../random-array.service';
import { ArrayCell } from '../array-cell/array-cell';
import { ArrayDataSource } from '@angular/cdk/collections';
import { last } from '@angular/router/src/utils/collection';
import { MergeSortArray } from '../merge-sort-array/merge-sort-array';
import { Step } from '../step/step.enum';
import { StepService } from '../step.service';

@Component({
  selector: 'app-merge-sort',
  templateUrl: './merge-sort.component.html',
  styleUrls: ['./merge-sort.component.css']
})
export class MergeSortComponent implements OnInit {

  array: MergeSortArray;
  possibleSteps: Step[];

  constructor(private randomArrayService: RandomArrayService, private stepService: StepService) { }

  ngOnInit() {
    this.array = new MergeSortArray(this.randomArrayService.getRandomArray(4, 0, 20), null);
    this.possibleSteps = this.stepService.getAllSteps();
  }

  onContinueClicked() {
    this.array.nextStep();
  }

  onStepClicked(step: Step) {
  }
}
