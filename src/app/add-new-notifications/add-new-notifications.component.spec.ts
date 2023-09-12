import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewNotificationsComponent } from './add-new-notifications.component';

describe('AddNewNotificationsComponent', () => {
  let component: AddNewNotificationsComponent;
  let fixture: ComponentFixture<AddNewNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewNotificationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
