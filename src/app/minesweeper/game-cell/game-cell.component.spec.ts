import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCellComponent } from './game-cell.component';
import { GameCell } from './game-cell';
import { By } from '@angular/platform-browser';

describe('GameCellComponent', () => {
  let component: GameCellComponent;
  let fixture: ComponentFixture<GameCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameCellComponent);
    component = fixture.componentInstance;
    component.isGameRunning = true;
  });

  it('should show an explosion for a revealed bomb', () => {
    const bomb = new GameCell(true);
    component.gameCell = bomb;

    bomb.reveal();
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('💥');
  });

  it('should show a flag for a flagged bomb', () => {
    const bomb = new GameCell(true);
    component.gameCell = bomb;
    bomb.isFlagged = true;

    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('⛳');
  });

  it('should show a flag for flagged harmless cell', () => {
    const harmlessCell = new GameCell(false);
    component.gameCell = harmlessCell;
    harmlessCell.isFlagged = true;

    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('⛳');
  });

  it('should show all unflagged bombs when game is lost', () => {
    const unflaggedBomb = new GameCell(true);
    component.gameCell = unflaggedBomb;
    component.isGameRunning = false;

    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('💣');
  });

  it('should show crosses for wrong flags when game is lost', () => {
    const harmlessCell = new GameCell(false);
    component.gameCell = harmlessCell;
    harmlessCell.isFlagged = true;
    component.isGameRunning = false;

    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('❌');
  });

  it('should display nothing when harmless cell with no surrounding bombs is revealed', () => {
    const harmlessCellWithNoSurroundingBombs = new GameCell(false);
    component.gameCell = harmlessCellWithNoSurroundingBombs;

    harmlessCellWithNoSurroundingBombs.reveal();

    expect(component.getRepresentation()).toBe('');
  });

  it('should display the surrounding bomb count when harmless cell is revealed', () => {
    const harmlessCell = new GameCell(false);
    const surroundingBombCount = 23;
    for (let i = 0; i < surroundingBombCount; i++) {
      harmlessCell.neighbors.push(new GameCell(true));
    }
    component.gameCell = harmlessCell;

    harmlessCell.reveal();
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain(surroundingBombCount);
  });

  it ('should not emit revealed when the game is over', () => {
    const gameCell = new GameCell();
    component.gameCell = gameCell;
    component.isGameRunning = false;
    spyOn(component.revealed, 'emit');

    component.tryReveal();
    fixture.detectChanges();

    expect(component.revealed.emit).toHaveBeenCalledTimes(0);
    expect(gameCell.isRevealed).toBe(false);
  });

  it('should emit revealed one time when a not flagged and not revealed game cell is clicked while the game is running', () => {
    const gameCell = new GameCell();
    component.gameCell = gameCell;
    spyOn(component.revealed, 'emit');
    const clickableElement = fixture.debugElement.query(By.css('.wrapper'));

    clickableElement.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.revealed.emit).toHaveBeenCalledTimes(1);
    expect(gameCell.isRevealed).toBe(true);
  });

  it('should not be able to flag when game is over', () => {
    const gameCell = new GameCell();
    component.gameCell = gameCell;
    component.isGameRunning = false;
    spyOn(component.flagged, 'emit');

    const mockEvent = jasmine.createSpyObj(['preventDefault']);
    component.tryFlag(mockEvent);

    expect(component.flagged.emit).toHaveBeenCalledTimes(0);
    expect(gameCell.isFlagged).toBe(false);
  });

  it('should flag upon contextmenu', () => {
    const gameCell = new GameCell();
    component.gameCell = gameCell;
    spyOn(component.flagged, 'emit');
    const nodeUnderTest = fixture.debugElement.query(By.css('.wrapper'));

    const mockEvent = jasmine.createSpyObj(['preventDefault']);
    nodeUnderTest.triggerEventHandler('contextmenu', mockEvent);

    expect(component.flagged.emit).toHaveBeenCalledTimes(1);
    expect(gameCell.isFlagged).toBe(true);
  });

  it('should show nothing when flag is not revealed', () => {
    const gameCell = new GameCell(true);
    const surroundingBombCount = 23;
    for (let i = 0; i < surroundingBombCount; i++) {
      gameCell.neighbors.push(new GameCell(true));
    }
    component.gameCell = gameCell;

    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toBe('');
  });
});
