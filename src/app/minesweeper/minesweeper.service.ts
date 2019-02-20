import { Injectable } from '@angular/core';
import { GameCell } from './game-cell/game-cell';

@Injectable({
  providedIn: 'root'
})
export class MinesweeperService {

  constructor() { }

  getGameField(rowCount: number, columnCount: number, bombCount: number): GameCell[][] {
    const gameCells = [];
    const bombIndexes = this.getBombIndexes(rowCount * columnCount, bombCount);

    let i = 0;
    for (let row = 0; row < rowCount; row++) {
      gameCells[row] = [];
      for (let column = 0; column < columnCount; column++) {
        gameCells[row][column] = new GameCell(bombIndexes.includes(i));
        i++;
      }
    }
    this.updateNeighbors(gameCells);
    return gameCells;
  }

  updateNeighbors(gameCells: GameCell[][]) {
    const offsets = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1], [0, 1],
      [1, -1], [1, 0], [1, 1]
    ];
    for (let row = 0; row < gameCells.length; row++) {
      for (let column = 0; column < gameCells[row].length; column++) {
        for (const offset of offsets) {
          const neighborRow = row + offset[0];
          const neighborColumn = column + offset[1];
          if (neighborRow >= 0 && neighborRow < gameCells.length
            && neighborColumn >= 0 && neighborColumn < gameCells[row].length) {
              gameCells[row][column].neighbors.push(gameCells[neighborRow][neighborColumn]);
          }
        }
      }
    }
  }

  getBombIndexes(length: number, bombCount: number): number[] {
    const bombIndexes = [];
    while (bombIndexes.length < bombCount) {
      const randomIndex = Math.floor(Math.random() * length);
      if (!bombIndexes.includes(randomIndex)) {
        bombIndexes.push(randomIndex);
      }
    }
    return bombIndexes;
  }
}
