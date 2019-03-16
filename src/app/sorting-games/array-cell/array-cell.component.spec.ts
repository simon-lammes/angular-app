import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayCellComponent } from './array-cell.component';
import { ArrayCell } from './array-cell';

describe('ArrayCellComponent', () => {
  let component: ArrayCellComponent;
  let fixture: ComponentFixture<ArrayCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayCellComponent);
    component = fixture.componentInstance;
    component.arrayCell = new ArrayCell(224);
  });

  it('should display the number of the array cell', () => {
    const val = 93857239;
    component.arrayCell = new ArrayCell(val);

    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain(val);
  });

  it('should switch marked on cell when it is clicked', () => {
    const clickableNode = fixture.debugElement.query(By.css('div'));
    spyOn(component.arrayCell, 'switchMarked');

    clickableNode.triggerEventHandler('click', null);

    expect(component.arrayCell.switchMarked).toHaveBeenCalledTimes(1);
  });
});
