import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeSortArrayComponent } from './merge-sort-array.component';

describe('MergeSortArrayComponent', () => {
  let component: MergeSortArrayComponent;
  let fixture: ComponentFixture<MergeSortArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergeSortArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeSortArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
