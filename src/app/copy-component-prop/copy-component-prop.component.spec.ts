import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyComponentPropComponent } from './copy-component-prop.component';

describe('CopyComponentPropComponent', () => {
  let component: CopyComponentPropComponent;
  let fixture: ComponentFixture<CopyComponentPropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyComponentPropComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopyComponentPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
