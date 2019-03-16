import { MinesweeperService } from './../minesweeper.service';
import { GameCell } from './../game-cell/game-cell';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MineFieldComponent } from './../mine-field/mine-field.component';
import { BombCounterComponent } from './../bomb-counter/bomb-counter.component';
import { MatSelectModule, MatSelect } from '@angular/material/select';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MinesweeperGameComponent } from './minesweeper-game.component';
import { TimerComponent } from '../timer/timer.component';
import { GameCellComponent } from '../game-cell/game-cell.component';
import { DomPortalHost } from '@angular/cdk/portal';
import { By } from '@angular/platform-browser';
import { MatFormField } from '@angular/material/form-field';
import { Difficulty } from '../difficulty';

describe('MinesweeperGameComponent', () => {
  let component: MinesweeperGameComponent;
  let fixture: ComponentFixture<MinesweeperGameComponent>;
  let mockMinesweeperService: any;

  beforeEach(async(() => {
    mockMinesweeperService = jasmine.createSpyObj(['getGameField']);
    TestBed.configureTestingModule({
      declarations: [ MinesweeperGameComponent, TimerComponent, BombCounterComponent, MineFieldComponent, GameCellComponent ],
      imports: [ BrowserAnimationsModule, MatSelectModule ],
      providers: [
        { provide: MinesweeperService, useValue: mockMinesweeperService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinesweeperGameComponent);
    component = fixture.componentInstance;
    component.selected = new Difficulty('mock', 1, 1, 1);
    component.isGameRunning = true;
  });

  it('should count revealed cells correctly', () => {
    const gameCells = [
      [new GameCell(true), new GameCell(false)],
      [new GameCell(false), new GameCell(true)]
    ];
    component.gameCells = gameCells;
    fixture.detectChanges();

    gameCells[0][1].reveal();
    gameCells[0][0].reveal();

    expect(component.revealedCellCount).toBe(2);
  });

  it('should have a correct suspected remaining bomb count', () => {
    const bombCount = 13;
    component.selected = new Difficulty('mock', 10, 10, bombCount);
    component.flaggedCount = 6;

    fixture.detectChanges();
    const bombCountComponent = fixture.debugElement.query(By.directive(BombCounterComponent));

    expect(component.suspectedRemainingBombCount).toBe(7);
    expect(bombCountComponent.nativeElement.textContent).toContain('' + 7);
  });

  it('should have a suspected remaining bomb count of 0 if there are more flags than bombs', () => {
    component.flaggedCount = 55;

    expect(component.suspectedRemainingBombCount).toBe(0);
  });

  it('should setup the game correctly', () => {
    const mockDifficulty = new Difficulty('mockDifficulty', 9, 6, 4);
    component.selected = mockDifficulty;
    const picker = fixture.debugElement.query(By.directive(MatSelect));
    spyOn(component.timerComponent, 'reset');

    picker.triggerEventHandler('selectionChange', null);

    expect(mockMinesweeperService.getGameField).toHaveBeenCalledWith(mockDifficulty);
    expect(component.isGameRunning).toBe(true);
    expect(component.flaggedCount).toBe(0);
    expect(component.timerComponent.reset).toHaveBeenCalledTimes(1);
  });

  it('should end the game properly when bomb is revealed by player', () => {
    const mineField = fixture.debugElement.query(By.directive(MineFieldComponent));
    spyOn(component.timerComponent, 'stop');

    mineField.triggerEventHandler('revealed', new GameCell(true));

    expect(component.isGameRunning).toBe(false);
    expect(component.timerComponent.stop).toHaveBeenCalledTimes(1);
  });

  it('should start timer if necessary', () => {
    const mineField = fixture.debugElement.query(By.directive(MineFieldComponent));
    spyOn(component.timerComponent, 'startIfNecessary');

    mineField.triggerEventHandler('revealed', new GameCell(false));

    expect(component.timerComponent.startIfNecessary).toHaveBeenCalledTimes(1);
  });

  it('should end game properly', () => {
    const mineField = fixture.debugElement.query(By.directive(MineFieldComponent));
    component.selected = new Difficulty('mockDifficulty', 2, 2, 2);
    component.gameCells = [
      [new GameCell(), new GameCell()],
      [new GameCell(true), new GameCell(true)]
    ];
    spyOn(component.timerComponent, 'stop');

    component.gameCells[0][0].reveal();
    component.gameCells[0][1].reveal();
    mineField.triggerEventHandler('revealed', component.gameCells[0][1]);

    expect(component.isGameRunning).toBe(false);
    expect(component.timerComponent.stop).toHaveBeenCalledTimes(1);
  });

  it('should increment flag count when cell is flagged', () => {
    const initialFlagCount = 152;
    component.flaggedCount = initialFlagCount;
    const gameField = fixture.debugElement.query(By.directive(MineFieldComponent));

    gameField.triggerEventHandler('flagged', true);

    expect(component.flaggedCount).toBe(initialFlagCount + 1);
  });

  it('should decrement flag count when cell is deflagged', () => {
    const initialFlagCount = 152;
    component.flaggedCount = initialFlagCount;
    const gameField = fixture.debugElement.query(By.directive(MineFieldComponent));

    gameField.triggerEventHandler('flagged', false);

    expect(component.flaggedCount).toBe(initialFlagCount - 1);
  });

  it('should have suspected remaining bomb count set to 0, when no difficulty is selected', () => {
    component.selected = null;

    expect(component.suspectedRemainingBombCount).toBe(0);
  });
});
