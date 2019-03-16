import { GameCell } from './game-cell/game-cell';
import { Difficulty } from './difficulty';
import { TestBed } from '@angular/core/testing';

import { MinesweeperService } from './minesweeper.service';

describe('MinesweeperService', () => {
  let service: MinesweeperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(MinesweeperService);
  });

  it('should provide the desired gamefield', () => {
    const difficulty = new Difficulty('nameDoesNotMatterHere', 13, 9, 11);

    const gameField = service.getGameField(difficulty);
    let actualBombCount = 0;
    for (const row of gameField) {
      for (const gameCell of row) {
        if (gameCell.isBomb) {
          actualBombCount++;
        }
      }
    }

    expect(gameField.length).toBe(difficulty.rowCount);
    expect(gameField[0].length).toBe(difficulty.columnCount);
    expect(actualBombCount).toBe(difficulty.bombCount);
  });
});
