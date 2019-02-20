import { MinesweeperService } from './../minesweeper.service';
import { GameCell } from './../game-cell/game-cell';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mine-field',
  templateUrl: './mine-field.component.html',
  styleUrls: ['./mine-field.component.css']
})
export class MineFieldComponent implements OnInit {

  gameCells: GameCell[][];
  isGameRunning: boolean;
  cellCount: number;
  bombCount: number;
  get revealedCellCount() {
    let count = 0;
    for (const row of this.gameCells) {
      for (const gameCell of row) {
        if (gameCell.isRevealed) {
          count++;
        }
      }
    }
    return count;
  }

  constructor(private minesweeperService: MinesweeperService) { }

  ngOnInit() {
    this.isGameRunning = true;
    this.bombCount = 5;
    this.cellCount = 100;
    this.gameCells = this.minesweeperService.getGameField(10, 10, this.bombCount);
  }

  onRevealed(gameCell: GameCell) {
    if (gameCell.isBomb) {
      this.isGameRunning = false;
      return;
    }
    if (this.revealedCellCount === this.cellCount - this.bombCount) {
      alert('You have won');
      this.isGameRunning = false;
    }
  }
}
