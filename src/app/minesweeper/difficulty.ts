export class Difficulty {
  name: string;
  rowCount: number;
  columnCount: number;
  bombCount: number;
  get description(): string {
    return `${this.name} ||| ${this.rowCount}X${this.columnCount} ||| ${this.bombCount} bombs`;
  }

  constructor(name: string, rowCount: number, columnCount: number, bombCount: number) {
    this.name = name;
    this.rowCount = rowCount;
    this.columnCount = columnCount;
    this.bombCount = bombCount;
  }
}
