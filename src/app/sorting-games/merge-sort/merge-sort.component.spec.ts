import { MergeSortArrayComponent } from './../merge-sort-array/merge-sort-array.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeSortComponent } from './merge-sort.component';
import { MergeSortArray } from '../merge-sort-array/merge-sort-array';
import { ArrayCell } from '../array-cell/array-cell';
import { ArrayCellComponent } from '../array-cell/array-cell.component';
import { By } from '@angular/platform-browser';

describe('MergeSortComponent', () => {
  let component: MergeSortComponent;
  let fixture: ComponentFixture<MergeSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergeSortComponent, MergeSortArrayComponent, ArrayCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should perform next step on array when continue is clicked', () => {
    const array = new MergeSortArray([new ArrayCell(5), new ArrayCell(4)], null);
    component.array = array;
    const continueButton = fixture.debugElement.query(By.css('button'));
    spyOn(array, 'nextStep');

    continueButton.triggerEventHandler('click', null);

    expect(array.nextStep).toHaveBeenCalledTimes(1);
  });
});
