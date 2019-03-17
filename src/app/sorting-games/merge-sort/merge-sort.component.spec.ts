import { MergeSortArrayComponent } from './../merge-sort-array/merge-sort-array.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeSortComponent } from './merge-sort.component';
import { MergeSortArray } from '../merge-sort-array/merge-sort-array';
import { ArrayCell } from '../array-cell/array-cell';
import { ArrayCellComponent } from '../array-cell/array-cell.component';
import { By } from '@angular/platform-browser';
import { StepComponent } from '../step/step.component';
import { Step } from '../step/step';

describe('MergeSortComponent', () => {
  let component: MergeSortComponent;
  let fixture: ComponentFixture<MergeSortComponent>;
  let mergeSortArrayMock: any;
  let correctNextStep: Step;
  let wrongStep: Step;

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
    mergeSortArrayMock = jasmine.createSpyObj(['nextStep']);
    correctNextStep = new Step('Correct Step', 'This step is correct.');
    mergeSortArrayMock.nextStep.and.returnValue(correctNextStep);
    component.array = mergeSortArrayMock;
    wrongStep = new Step('Wrong step', 'This step is wrong.');
  });

  it('should do next step for real if user chose correct step', () => {
    component.onStepSelected(correctNextStep);

    expect(component.array.nextStep).toHaveBeenCalledTimes(2);
    expect(component.array.nextStep).toHaveBeenCalledWith(true);
  });

  it('should count mistakes correctly', () => {
    const rightAnswers = 13;
    const wrongAnswers = 4;

    for (let i = 0; i < rightAnswers; i++) {
      component.onStepSelected(correctNextStep);
    }
    for (let i = 0; i < wrongAnswers; i++) {
      component.onStepSelected(wrongStep);
    }

    expect(component.mistakeCount).toBe(wrongAnswers);
  })
});
