import { MergeSortArrayComponent } from './../merge-sort-array/merge-sort-array.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeSortComponent } from './merge-sort.component';
import { MergeSortArray } from '../merge-sort-array/merge-sort-array';
import { ArrayCell } from '../array-cell/array-cell';
import { ArrayCellComponent } from '../array-cell/array-cell.component';
import { By } from '@angular/platform-browser';
import { StepComponent } from '../step/step.component';

describe('MergeSortComponent', () => {
  let component: MergeSortComponent;
  let fixture: ComponentFixture<MergeSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergeSortComponent, MergeSortArrayComponent, ArrayCellComponent, StepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
