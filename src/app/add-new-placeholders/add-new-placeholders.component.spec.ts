import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPlaceholdersComponent } from './add-new-placeholders.component';

describe('AddNewPlaceholdersComponent', () => {
  let component: AddNewPlaceholdersComponent;
  let fixture: ComponentFixture<AddNewPlaceholdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewPlaceholdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewPlaceholdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
