import { MineFieldComponent } from './minesweeper/mine-field/mine-field.component';
import { GameCellComponent } from './minesweeper/game-cell/game-cell.component';
import { MinesweeperModule } from './minesweeper/minesweeper.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MinesweeperModule,
    RouterModule.forRoot([
      { path: 'minesweeper', component: MineFieldComponent },
      { path: '**', redirectTo: 'minesweeper', pathMatch: 'full' },

  ])],
  bootstrap: [AppComponent]
})
export class AppModule { }
