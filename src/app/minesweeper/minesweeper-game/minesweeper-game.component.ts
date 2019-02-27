import { MinesweeperService } from './../minesweeper.service';
import { Component, OnInit } from '@angular/core';
import { GameCell } from '../game-cell/game-cell';
import { Difficulty } from '../difficulty';

@Component({
  selector: 'app-minesweeper-game',
  templateUrl: './minesweeper-game.component.html',
  styleUrls: ['./minesweeper-game.component.css']
})
export class MinesweeperGameComponent implements OnInit {

  selected: Difficulty;
  difficulties: Difficulty[];
  gameCells: GameCell[][];
  cellCount: number;
  bombCount: number;
  isGameRunning: boolean;

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

  constructor(private minesweeperService: MinesweeperService) {
    this.difficulties = minesweeperService.difficulties;
    this.gameCells = [];
  }

  ngOnInit() {
    this.isGameRunning = true;
  }

  onSelectionChange(): void {
    this.gameCells = this.minesweeperService.getGameField(this.selected);
    this.isGameRunning = true;
    this.bombCount = this.selected.bombCount;
    this.cellCount = this.selected.rowCount * this.selected.columnCount;
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
