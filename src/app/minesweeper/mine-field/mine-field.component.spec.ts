import { GameCellComponent } from './../game-cell/game-cell.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MineFieldComponent } from './mine-field.component';
import { By } from '@angular/platform-browser';
import { GameCell } from '../game-cell/game-cell';

describe('MineFieldComponent', () => {
  let component: MineFieldComponent;
  let fixture: ComponentFixture<MineFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MineFieldComponent, GameCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MineFieldComponent);
    component = fixture.componentInstance;
    component.gameCells = [[new GameCell()]];
    component.isGameRunning = true;
    fixture.detectChanges();
  });

  it('should forward onRevealed event', () => {
    const nodeUnderTest = fixture.debugElement.query(By.directive(GameCellComponent));
    spyOn(component.revealed, 'emit');

    const isRevealed = true;
    nodeUnderTest.triggerEventHandler('revealed', isRevealed);

    expect(component.revealed.emit).toHaveBeenCalledTimes(1);
    expect(component.revealed.emit).toHaveBeenCalledWith(isRevealed);
  });

  it('should forward onFlagged event', () => {
    const nodeUnderTest = fixture.debugElement.query(By.directive(GameCellComponent));
    spyOn(component.flagged, 'emit');

    const isFlagged = true;
    nodeUnderTest.triggerEventHandler('flagged', isFlagged);

    expect(component.flagged.emit).toHaveBeenCalledTimes(1);
    expect(component.flagged.emit).toHaveBeenCalledWith(isFlagged);
  });
});
