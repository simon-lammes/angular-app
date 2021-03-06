import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MergeSortComponent } from './merge-sort/merge-sort.component';
import { RouterModule } from '@angular/router';
import { ArrayCellComponent } from './array-cell/array-cell.component';
import { MergeSortArrayComponent } from './merge-sort-array/merge-sort-array.component';
import { StepComponent } from './step/step.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [MergeSortComponent, ArrayCellComponent, MergeSortArrayComponent, StepComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    BrowserAnimationsModule,
    RouterModule.forChild([
      { path: 'mergesort', component: MergeSortComponent },
    ]),
  ]
})
export class SortingGamesModule { }
