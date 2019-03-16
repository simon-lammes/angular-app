import { TestBed } from '@angular/core/testing';

import { RandomArrayService } from './random-array.service';

describe('RandomArrayService', () => {
  let service: RandomArrayService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(RandomArrayService);
  });

  it('provide the requested kind of arrays', () => {
    const requestedLength = 15;
    const requestedMinValue = 0;
    const requestedMaxValue = 3;

    const result = service.getRandomArray(requestedLength, requestedMinValue, requestedMaxValue);

    expect(result.length).toBe(requestedLength);
    for (const arrayCell of result) {
      const val = arrayCell.value;
      expect(val).toBeGreaterThanOrEqual(requestedMinValue);
      expect(val).toBeLessThanOrEqual(requestedMaxValue);
    }
  });
});
