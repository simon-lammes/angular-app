import { ArrayCell } from '../array-cell/array-cell';
import { Input } from '@angular/core';
import { Step } from '../step/step';

export class MergeSortArray {
  static stepCreateSubArray: Step = new Step('Create sub-array',
    'When the array we are trying to sort currently does not have two sub-arrays, we need to create them.');
  static stepMergeSubArrays: Step = new Step('Merge sub arrays',
    'When the array we are currently trying to sort already has two sorted sub-arrays, we merge them.');
  static possibleSteps: Step[] = [MergeSortArray.stepCreateSubArray, MergeSortArray.stepMergeSubArrays];
  array: ArrayCell[];
  parentArray: MergeSortArray;
  leftSubArray: MergeSortArray;
  rightSubArray: MergeSortArray;
  isSorted: boolean;
  leftPointer: number;
  rightPointer: number;

  constructor(array: ArrayCell[], parentArray: MergeSortArray) {
    this.parentArray = parentArray;
    this.array = array;
    this.isSorted = array.length === 1;
    this.leftPointer = 0;
    this.rightPointer = 0;
  }

  nextStep(doItForReal = true): Step {
    if (this.isSorted) {
      return;
    }
    if (!this.leftSubArray) {
      if (doItForReal) {
        this.leftSubArray = new MergeSortArray(this.array.slice(0, this.array.length / 2), this);
      }
      return MergeSortArray.stepCreateSubArray;
    }
    if (!this.leftSubArray.isSorted) {
      return this.leftSubArray.nextStep(doItForReal);
    }
    if (!this.rightSubArray) {
      if (doItForReal) {
        this.rightSubArray = new MergeSortArray(this.array.slice(this.array.length / 2, this.array.length), this);
      }
      return MergeSortArray.stepCreateSubArray;
    }
    if (!this.rightSubArray.isSorted) {
      return this.rightSubArray.nextStep(doItForReal);
    }
    if (doItForReal) {
      this.nextStepMerge();
    }
    return MergeSortArray.stepMergeSubArrays;
  }

  nextStepMerge(): any {
    const middlePointer = this.leftPointer + this.rightPointer;
    const leftValue = this.leftSubArray.array[this.leftPointer];
    const rightValue = this.rightSubArray.array[this.rightPointer];
    if (!rightValue || (leftValue && leftValue.value <= rightValue.value)) {
      this.array[middlePointer] = leftValue;
      this.leftPointer++;
    } else {
      this.array[middlePointer] = rightValue;
      this.rightPointer++;
    }
    if (middlePointer === this.array.length - 1) {
      this.isSorted = true;
      this.leftSubArray = null;
      this.rightSubArray = null;
    }
  }

  isMergeable(): boolean {
    return !this.isSorted && this.leftSubArray && this.leftSubArray.isSorted
      && this.rightSubArray && this.rightSubArray.isSorted;
  }

  getPointersForArrayCell(index: number): string[] {
    const pointers = [];
    if (this.isMergeable() && this.leftPointer + this.rightPointer === index) {
      pointers.push('middlePointer');
    } else if (this.parentArray && this.parentArray.isMergeable()) {
      if (this === this.parentArray.leftSubArray && this.parentArray.leftPointer === index) {
        pointers.push('leftPointer');
      } else if (this === this.parentArray.rightSubArray && this.parentArray.rightPointer === index) {
        pointers.push('rightPointer');
      }
    }
    return pointers;
  }
}
