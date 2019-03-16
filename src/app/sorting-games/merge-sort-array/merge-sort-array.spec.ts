import { GameCell } from './../../minesweeper/game-cell/game-cell';
import { MergeSortArray } from './merge-sort-array';
import { ArrayCell } from '../array-cell/array-cell';

describe('MergeSortArray', () => {
  it('should be able to sort arrays', () => {
    const sut = new MergeSortArray([new ArrayCell(345), new ArrayCell(42), new ArrayCell(12), new ArrayCell(23), new ArrayCell(78)], null);

    while (!sut.isSorted) {
      sut.nextStep();
    }

    expect(sut.array[0].value).toBe(12);
    expect(sut.array[1].value).toBe(23);
    expect(sut.array[2].value).toBe(42);
    expect(sut.array[3].value).toBe(78);
    expect(sut.array[4].value).toBe(345);
  });

  it('should stay sorted when next step is called even after it is already sorted', () => {
    const sut = new MergeSortArray([new ArrayCell(345), new ArrayCell(42), new ArrayCell(12), new ArrayCell(23), new ArrayCell(78)], null);

    while (!sut.isSorted) {
      sut.nextStep();
    }
    sut.nextStep();
    sut.nextStep();

    expect(sut.array[0].value).toBe(12);
    expect(sut.array[1].value).toBe(23);
    expect(sut.array[2].value).toBe(42);
    expect(sut.array[3].value).toBe(78);
    expect(sut.array[4].value).toBe(345);
  });

  it('should get the middle pointer correctly', () => {
    const sut = new MergeSortArray([new ArrayCell(345), new ArrayCell(42), new ArrayCell(12), new ArrayCell(23), new ArrayCell(78)], null);
    while (!sut.isMergeable()) {
      sut.nextStep();
    }

    for (let i = 0; i < sut.array.length; i++) {
      const pointers = sut.getPointersForArrayCell(i);

      if (i === sut.leftPointer + sut.rightPointer) {
        expect(pointers).toContain('middlePointer');
        expect(pointers.length).toBe(1);
      } else {
        expect(pointers.length).toBe(0);
      }
    }
  });

  it('should get left pointer correctly', () => {
    const root = new MergeSortArray([new ArrayCell(345), new ArrayCell(42), new ArrayCell(12), new ArrayCell(23), new ArrayCell(78)], null);
    while (!root.isMergeable()) {
      root.nextStep();
    }
    const sut = root.leftSubArray;

    for (let i = 0; i < root.array.length; i++) {
      const pointers = sut.getPointersForArrayCell(i);

      if (i === root.leftPointer) {
        expect(pointers).toContain('leftPointer');
        expect(pointers.length).toBe(1);
      } else {
        expect(pointers.length).toBe(0);
      }
    }
  });

  it('should get right pointer correctly', () => {
    const root = new MergeSortArray([new ArrayCell(345), new ArrayCell(42), new ArrayCell(12), new ArrayCell(23), new ArrayCell(78)], null);
    while (!root.isMergeable()) {
      root.nextStep();
    }
    const sut = root.rightSubArray;

    for (let i = 0; i < root.array.length; i++) {
      const pointers = sut.getPointersForArrayCell(i);

      if (i === root.rightPointer) {
        expect(pointers).toContain('rightPointer');
        expect(pointers.length).toBe(1);
      } else {
        expect(pointers.length).toBe(0);
      }
    }
  });
});
