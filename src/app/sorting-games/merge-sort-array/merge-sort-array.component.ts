import { Component, OnInit, Input } from '@angular/core';
import { ArrayCell } from '../array-cell/array-cell';
import { MergeSortArray } from './merge-sort-array';

@Component({
  selector: 'app-merge-sort-array',
  templateUrl: './merge-sort-array.component.html',
  styleUrls: ['./merge-sort-array.component.css']
})
export class MergeSortArrayComponent implements OnInit {

  @Input() array: MergeSortArray;

  constructor() { }

  ngOnInit() {
  }

}
