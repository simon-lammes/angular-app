export class Difficulty {
  name: string;
  rowCount: number;
  columnCount: number;
  bombCount: number;
  get description(): string {
    return `${this.name} ||| ${this.rowCount}X${this.columnCount} ||| ${this.bombCount} bombs`;
  }
  get cellCount(): number {
    return this.rowCount * this.columnCount;
  }

  constructor(name: string, rowCount: number, columnCount: number, bombCount: number) {
    this.name = name;
    this.rowCount = rowCount;
    this.columnCount = columnCount;
    this.bombCount = bombCount;
  }
}
