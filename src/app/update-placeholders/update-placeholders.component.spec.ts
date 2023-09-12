import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePlaceholdersComponent } from './update-placeholders.component';

describe('UpdatePlaceholdersComponent', () => {
  let component: UpdatePlaceholdersComponent;
  let fixture: ComponentFixture<UpdatePlaceholdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePlaceholdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePlaceholdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
