import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bomb-counter',
  templateUrl: './bomb-counter.component.html',
  styleUrls: ['./bomb-counter.component.css']
})
export class BombCounterComponent implements OnInit {

  @Input() suspectedRemainingBombs: number;

  constructor() { }

  ngOnInit() {
  }

}
