import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MineFieldComponent } from './mine-field/mine-field.component';
import { GameCellComponent } from './game-cell/game-cell.component';
import { MinesweeperGameComponent } from './minesweeper-game/minesweeper-game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { TimerComponent } from './timer/timer.component';
import { BombCounterComponent } from './bomb-counter/bomb-counter.component';

@NgModule({
  declarations: [MineFieldComponent, GameCellComponent, MinesweeperGameComponent, TimerComponent, BombCounterComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatSelectModule
  ]
})
export class MinesweeperModule { }
