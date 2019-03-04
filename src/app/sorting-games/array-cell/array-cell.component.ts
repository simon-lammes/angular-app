import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ArrayCell } from './array-cell';

@Component({
  selector: 'app-array-cell',
  templateUrl: './array-cell.component.html',
  styleUrls: ['./array-cell.component.css']
})
export class ArrayCellComponent implements OnInit {

  @Input() arrayCell: ArrayCell;
  @Input() pointers: string[];

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.arrayCell.switchMarked();
  }
}
