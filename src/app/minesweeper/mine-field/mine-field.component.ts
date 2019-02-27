import { MinesweeperService } from './../minesweeper.service';
import { GameCell } from './../game-cell/game-cell';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mine-field',
  templateUrl: './mine-field.component.html',
  styleUrls: ['./mine-field.component.css']
})
export class MineFieldComponent {

  @Input() gameCells: GameCell[][];
  @Input() isGameRunning: boolean;
  @Output() revealed: EventEmitter<GameCell> = new EventEmitter<GameCell>();
  @Output() flagged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private minesweeperService: MinesweeperService) { }

  onRevealed(gameCell: GameCell) {
    this.revealed.emit(gameCell);
  }

  onFlagged(flagged: boolean) {
    this.flagged.emit(flagged);
  }
}
