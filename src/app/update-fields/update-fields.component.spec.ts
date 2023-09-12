import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFieldsComponent } from './update-fields.component';

describe('UpdateFieldsComponent', () => {
  let component: UpdateFieldsComponent;
  let fixture: ComponentFixture<UpdateFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFieldsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
