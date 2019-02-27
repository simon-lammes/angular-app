import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MineFieldComponent } from './mine-field/mine-field.component';
import { GameCellComponent } from './game-cell/game-cell.component';
import { MinesweeperGameComponent } from './minesweeper-game/minesweeper-game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [MineFieldComponent, GameCellComponent, MinesweeperGameComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatSelectModule
  ]
})
export class MinesweeperModule { }
