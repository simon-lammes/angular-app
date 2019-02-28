import { GameCell } from './game-cell';

describe('GameCell', () => {
  it('should create an instance', () => {
    expect(new GameCell(true)).toBeTruthy();
  });

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
});
