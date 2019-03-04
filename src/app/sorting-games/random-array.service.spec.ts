import { TestBed } from '@angular/core/testing';

import { RandomArrayService } from './random-array.service';

describe('RandomArrayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomArrayService = TestBed.get(RandomArrayService);
    expect(service).toBeTruthy();
  });
});
