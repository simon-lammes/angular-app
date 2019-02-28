import { GameCellComponent } from './../game-cell/game-cell.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MineFieldComponent } from './mine-field.component';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
