import { GameCell } from './game-cell';

describe('GameCell', () => {

  it('should count the surrounding bombs correctly', () => {
    const sut = new GameCell();
    sut.neighbors = [
      new GameCell(true),
      new GameCell(false),
      new GameCell(true)
    ];
    expect(sut.getSurroundingBombCount()).toBe(2);
  });

  it('should be able to switch isFlagged on and off', () => {
    const sut = new GameCell();
    expect(sut.isFlagged).toBe(false);

    sut.switchFlag();
    expect(sut.isFlagged).toBe(true);

    sut.switchFlag();
    expect(sut.isFlagged).toBe(false);
  });

  it('should not be able to unreveal itself', () => {
    const sut = new GameCell();
    expect(sut.isRevealed).toBe(false);
    sut.reveal();
    expect(sut.isRevealed).toBe(true);
    sut.reveal();
    expect(sut.isRevealed).toBe(true);
  })

  it('should reveal all neighbors when it is revealed and there is no bomb around and it is not a bomb itself', () => {
    const sut = new GameCell(false);
    sut.neighbors = [new GameCell(false), new GameCell(false), new GameCell(false)];

    sut.reveal();

    for (const neighbor of sut.neighbors) {
      expect(neighbor.isRevealed).toBe(true);
    }
  });

  it ('should reveal the neighbors in a cascading style', () => {
    const sut = new GameCell(false);
    const firstNeighbor = new GameCell(false);
    const secondNeighbor = new GameCell(false);
    const thirdNeighbor = new GameCell(false);
    const bombsNeighbor = new GameCell(false);
    const bomb = new GameCell(true);
    sut.neighbors = [firstNeighbor];
    firstNeighbor.neighbors = [secondNeighbor];
    secondNeighbor.neighbors = [thirdNeighbor];
    thirdNeighbor.neighbors = [bomb, bombsNeighbor];

    sut.reveal();

    expect(firstNeighbor.isRevealed).toBe(true);
    expect(secondNeighbor.isRevealed).toBe(true);
    //the third neighbor has surrounding bombs (one in this example) so it should be last game cell revealed in cascading style
    expect(thirdNeighbor.isRevealed).toBe(true);
    // the cascade should not reach to far
    expect(bomb.isRevealed).toBe(false);
    expect(bombsNeighbor.isRevealed).toBe(false);
  });
});
