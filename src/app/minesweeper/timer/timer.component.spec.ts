import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { TimerComponent } from './timer.component';

describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display seconds passed', () => {
    const secondsPassed = 237;
    component.secondsPassed = secondsPassed;

    fixture.detectChanges();
    const displayedText = fixture.nativeElement.textContent;

    expect(displayedText).toContain('' + secondsPassed);
  });

  it('should tick correctly', fakeAsync(() => {
    component.startIfNecessary();
    const secondsPassed = 9857;

    tick(secondsPassed * 1000);

    expect(component.secondsPassed).toBe(secondsPassed);
    component.stop();
  }));

  it ('should tick correctly when it is started multiple times', fakeAsync(() => {
    component.startIfNecessary();
    const secondsPassedFirstInterval = 33;
    const secondsPassedSecondInterval = 44;

    tick(secondsPassedFirstInterval * 1000);
    component.startIfNecessary();
    tick(secondsPassedSecondInterval * 1000);

    expect(component.secondsPassed).toBe(secondsPassedFirstInterval + secondsPassedSecondInterval);
    component.stop();
  }));
});
