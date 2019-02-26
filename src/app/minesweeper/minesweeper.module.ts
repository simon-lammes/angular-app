import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MineFieldComponent } from './mine-field/mine-field.component';
import { GameCellComponent } from './game-cell/game-cell.component';
import { MinesweeperGameComponent } from './minesweeper-game/minesweeper-game.component';

@NgModule({
  declarations: [MineFieldComponent, GameCellComponent, MinesweeperGameComponent],
  imports: [
    CommonModule
  ]
})
export class MinesweeperModule { }
