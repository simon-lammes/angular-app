export class ArrayCell {
  value: number;
  marked: boolean;

  constructor(value: number, marked = false) {
    this.value = value;
    this.marked = marked;
  }

  switchMarked(): any {
    this.marked = !this.marked;
  }

  copy(): ArrayCell {
    return new ArrayCell(this.value, this.marked);
  }
}
