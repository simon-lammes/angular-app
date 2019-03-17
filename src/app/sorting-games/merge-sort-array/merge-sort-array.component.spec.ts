import { ArrayCellComponent } from './../array-cell/array-cell.component';
import { ArrayCell } from './../array-cell/array-cell';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeSortArrayComponent } from './merge-sort-array.component';
import { MergeSortArray } from './merge-sort-array';
import { Step } from '../step/step';

describe('MergeSortArrayComponent', () => {
  let component: MergeSortArrayComponent;
  let fixture: ComponentFixture<MergeSortArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergeSortArrayComponent, ArrayCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeSortArrayComponent);
    component = fixture.componentInstance;

  });
});
