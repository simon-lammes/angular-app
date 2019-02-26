import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minesweeper-game',
  templateUrl: './minesweeper-game.component.html',
  styleUrls: ['./minesweeper-game.component.css']
})
export class MinesweeperGameComponent implements OnInit {

  selectedCar: any;

  constructor() { }

  ngOnInit() {
  }

}
