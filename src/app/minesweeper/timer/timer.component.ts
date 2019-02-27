import { GameCell } from './../game-cell/game-cell';
import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  @Input() gameField: GameCell[][];
  secondsPassed: number;
  interval;
  private isRunning = false;

  startIfNecessary() {
    if (this.isRunning) {
      return;
    }
    this.secondsPassed = 0;
    this.interval = setInterval(() => {
      this.secondsPassed++;
    }, 1000);
    this.isRunning = true;
  }

  stop() {
    clearInterval(this.interval);
    this.isRunning = false;
  }
}
