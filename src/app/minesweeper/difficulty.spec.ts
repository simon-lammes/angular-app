import { Difficulty } from './difficulty';

describe('Difficulty', () => {
  it('should contain all important information inside description', () => {
    const name = 'dsahdslkahf';
    const rowCount = 547572539;
    const columnCount = 3984587;
    const bombCount = 328893;
    const difficulty = new Difficulty(name, rowCount, columnCount, bombCount);

    const description = difficulty.description;

    expect(description).toContain(name);
    expect(description).toContain('' + rowCount);
    expect(description).toContain('' + columnCount);
    expect(description).toContain('' + bombCount);
  });
});
