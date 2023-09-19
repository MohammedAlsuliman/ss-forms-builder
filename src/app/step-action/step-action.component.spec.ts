import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepActionComponent } from './step-action.component';

describe('StepActionComponent', () => {
  let component: StepActionComponent;
  let fixture: ComponentFixture<StepActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
