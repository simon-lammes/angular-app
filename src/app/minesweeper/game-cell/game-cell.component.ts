import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { GameCell } from './game-cell';
import { fromEventPattern } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-game-cell',
  templateUrl: './game-cell.component.html',
  styleUrls: ['./game-cell.component.css']
})
export class GameCellComponent {
  @Input() gameCell: GameCell;
  @Input() isGameRunning: boolean;
  @Output() revealed: EventEmitter<GameCell> = new EventEmitter<GameCell>();

  tryReveal() {
    if (this.gameCell.isRevealed || this.gameCell.isFlagged  || !this.isGameRunning) {
      return;
    }
    this.gameCell.reveal();
    this.revealed.emit(this.gameCell);
  }

  tryFlag(event: any): void {
    event.preventDefault();
    if (!this.isGameRunning) {
      return;
    }
    this.gameCell.switchFlag();
  }

  getRepresentation(): string {
    if (!this.isGameRunning && this.gameCell.isBomb) {
      if (this.gameCell.isRevealed) {
        return '💥';
      }
      if (this.gameCell.isFlagged) {
        return '⛳';
      }
      return '💣';
    }
    if (!this.gameCell.isRevealed) {
      if (this.gameCell.isFlagged) {
        return '⛳';
      }
      return '';
    }
    if (this.gameCell.getSurroundingBombCount() === 0) {
      return '';
    }
    return `${this.gameCell.getSurroundingBombCount()}`;
  }
}
