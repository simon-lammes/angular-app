import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StepComponent } from './step.component';
import { Step } from './step';

describe('StepComponent', () => {
  let component: StepComponent;
  let fixture: ComponentFixture<StepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepComponent);
    component = fixture.componentInstance;
  });

  it('should display title and description', () => {
    const title = 'Mock Title';
    const description = 'Mock description. BlaBlaBla';
    component.step = new Step(title, description);

    fixture.detectChanges();
    const titleElement = fixture.debugElement.query(By.css('h3')).nativeElement;
    const descriptionElement = fixture.debugElement.query(By.css('p')).nativeElement;

    expect(titleElement.textContent).toBe(title);
    expect(descriptionElement.textContent).toBe(description);
  });

  it('should forward click event', () => {
    component.step = new Step('', '');
    fixture.detectChanges();
    const clickableElement = fixture.debugElement.query(By.css('button'));
    spyOn(component.clicked, 'emit');

    clickableElement.triggerEventHandler('click', null);

    expect(component.clicked.emit).toHaveBeenCalledTimes(1);
    expect(component.clicked.emit).toHaveBeenCalledWith(component.step);
  })
});
