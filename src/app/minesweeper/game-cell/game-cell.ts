export class GameCell {
  isBomb: boolean;
  isFlagged: boolean;
  isRevealed: boolean;
  neighbors: GameCell[];

  constructor(isBomb: boolean = false) {
    this.isBomb = isBomb;
    this.isRevealed = false;
    this.isFlagged = false;
    this.neighbors = [];
  }

 getSurroundingBombCount(): number {
    let count = 0;
    for (const neighbor of this.neighbors) {
      if (neighbor.isBomb) {
        count++;
      }
    }
    return count;
  }

  reveal(): void {
    if (this.isRevealed) {
      return;
    }
    this.isRevealed = true;
    if (this.getSurroundingBombCount() > 0 || this.isBomb) {
      return;
    }
    for (const neighbor of this.neighbors) {
      neighbor.reveal();
    }
  }
}
