import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MineFieldComponent } from './../mine-field/mine-field.component';
import { BombCounterComponent } from './../bomb-counter/bomb-counter.component';
import { MatSelectModule } from '@angular/material/select';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinesweeperGameComponent } from './minesweeper-game.component';
import { TimerComponent } from '../timer/timer.component';
import { GameCellComponent } from '../game-cell/game-cell.component';

describe('MinesweeperGameComponent', () => {
  let component: MinesweeperGameComponent;
  let fixture: ComponentFixture<MinesweeperGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinesweeperGameComponent, TimerComponent, BombCounterComponent, MineFieldComponent, GameCellComponent ],
      imports: [ BrowserAnimationsModule, MatSelectModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinesweeperGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
