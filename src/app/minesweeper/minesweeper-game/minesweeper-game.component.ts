import { TimerComponent } from './../timer/timer.component';
import { MinesweeperService } from './../minesweeper.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GameCell } from '../game-cell/game-cell';
import { Difficulty } from '../difficulty';
import { timer } from 'rxjs';

@Component({
  selector: 'app-minesweeper-game',
  templateUrl: './minesweeper-game.component.html',
  styleUrls: ['./minesweeper-game.component.css']
})
export class MinesweeperGameComponent implements OnInit {

  selected: Difficulty;
  difficulties: Difficulty[];
  gameCells: GameCell[][];
  flaggedCount: number;
  isGameRunning: boolean;
  @ViewChild(TimerComponent)
  timerComponent: TimerComponent;

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

  get suspectedRemainingBombCount() {
    if (!this.selected) {
      return 0;
    }
    let value = this.selected.bombCount - this.flaggedCount;
    if (value < 0) {
      value = 0;
    }
    return value;
  }

  constructor(private minesweeperService: MinesweeperService) {
    this.difficulties = minesweeperService.difficulties;
    this.gameCells = [];
  }

  ngOnInit() {
    this.isGameRunning = true;
  }

  startNewGame(): any {
    this.gameCells = this.minesweeperService.getGameField(this.selected);
    this.isGameRunning = true;
    this.flaggedCount = 0;
    this.timerComponent.reset();
  }

  onRevealed(gameCell: GameCell) {
    if (gameCell.isBomb) {
      this.isGameRunning = false;
      this.timerComponent.stop();
      return;
    }
    this.timerComponent.startIfNecessary();
    if (this.revealedCellCount === this.selected.cellCount - this.selected.bombCount) {
      this.timerComponent.stop();
      alert('You have won');
      this.isGameRunning = false;
    }
  }

  onFlagged(flagged: boolean) {
    if (flagged) {
      this.flaggedCount++;
    } else {
      this.flaggedCount--;
    }
  }
}
