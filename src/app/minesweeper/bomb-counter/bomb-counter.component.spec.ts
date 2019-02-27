import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BombCounterComponent } from './bomb-counter.component';

describe('BombCounterComponent', () => {
  let component: BombCounterComponent;
  let fixture: ComponentFixture<BombCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BombCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BombCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
