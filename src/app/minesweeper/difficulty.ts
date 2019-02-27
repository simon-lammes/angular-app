export class Difficulty {
  name: string;
  rowCount: number;
  columnCount: number;
  bombCount: number;

  constructor(name: string, rowCount: number, columnCount: number, bombCount: number) {
    this.name = name;
    this.rowCount = rowCount;
    this.columnCount = columnCount;
    this.bombCount = bombCount;
  }
}
