import { ArrayCell } from '../array-cell/array-cell';
import { Input } from '@angular/core';

export class MergeSortArray {
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
    if (array.length === 1) {
      this.isSorted = true;
    }
    this.leftPointer = 0;
    this.rightPointer = 0;
  }

  nextStep() {
    if (this.isSorted) {
      return;
    }
    if (!this.leftSubArray) {
      this.leftSubArray = new MergeSortArray(this.array.slice(0, this.array.length / 2), this);
      return;
    }
    if (!this.leftSubArray.isSorted) {
      this.leftSubArray.nextStep();
      return;
    }
    if (!this.rightSubArray) {
      this.rightSubArray = new MergeSortArray(this.array.slice(this.array.length / 2, this.array.length), this);
      return;
    }
    if (!this.rightSubArray.isSorted) {
      this.rightSubArray.nextStep();
      return;
    }
    this.nextStepMerge();
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