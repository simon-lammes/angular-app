import { ArrayCell } from './array-cell';

describe('ArrayCell', () => {
  it('should set marked to false on marked cell when switchMarked() is called', () => {
    const sut = new ArrayCell(19, true);

    sut.switchMarked();

    expect(sut.marked).toBe(false);
  });

  it('should set marked to true on unmarked cell when switchMarked() is called', () => {
    const sut = new ArrayCell(19, false);

    sut.switchMarked();

    expect(sut.marked).toBe(true);
  });
});
