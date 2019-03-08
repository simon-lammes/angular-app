import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MergeSortComponent } from './merge-sort/merge-sort.component';
import { RouterModule } from '@angular/router';
import { ArrayCellComponent } from './array-cell/array-cell.component';
import { MergeSortArrayComponent } from './merge-sort-array/merge-sort-array.component';

@NgModule({
  declarations: [MergeSortComponent, ArrayCellComponent, MergeSortArrayComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'mergesort', component: MergeSortComponent },
    ]),
  ]
})
export class SortingGamesModule { }
