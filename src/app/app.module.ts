import { MinesweeperGameComponent } from './minesweeper/minesweeper-game/minesweeper-game.component';
import { MineFieldComponent } from './minesweeper/mine-field/mine-field.component';
import { GameCellComponent } from './minesweeper/game-cell/game-cell.component';
import { MinesweeperModule } from './minesweeper/minesweeper.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    MinesweeperModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'minesweeper', component: MinesweeperGameComponent },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },

  ])],
  bootstrap: [AppComponent]
})
export class AppModule { }
