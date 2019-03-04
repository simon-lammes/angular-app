import { ArrayCell } from './array-cell/array-cell';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomArrayService {

  constructor() { }

  getRandomArray(length: number, minValue: number, maxValue: number): ArrayCell[] {
    const result = [];
    for (let i = 0; i < length; i++) {
      const randomValue = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
      result.push(new ArrayCell(randomValue));
    }
    return result;
  }
}
