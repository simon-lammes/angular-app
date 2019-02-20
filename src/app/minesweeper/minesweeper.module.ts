import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MineFieldComponent } from './mine-field/mine-field.component';
import { GameCellComponent } from './game-cell/game-cell.component';

@NgModule({
  declarations: [MineFieldComponent, GameCellComponent],
  imports: [
    CommonModule
  ]
})
export class MinesweeperModule { }
