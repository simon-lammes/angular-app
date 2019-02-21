import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GameCell } from './game-cell';
import 'hammerjs';
import { $ } from 'protractor';
import { JsonPipe } from '@angular/common';

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
    if (this.gameCell.isRevealed || this.gameCell.isFlagged) {
      return;
    }
    this.gameCell.reveal();
    this.revealed.emit(this.gameCell);
  }

  onPress(event: any): void {
    if (event.eventType !== 2) {
      this.switchFlag();
    }
  }

  onContextMenu(event: any): boolean {
    this.switchFlag();
    return false;
  }

  switchFlag()  {
    this.gameCell.isFlagged = !this.gameCell.isFlagged;
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
      return ' ';
    }
    if (this.gameCell.getSurroundingBombCount() === 0) {
      return ' ';
    }
    return `${this.gameCell.getSurroundingBombCount()}`;
  }
}
