import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadningPageComponent } from './ladning-page.component';

describe('LadningPageComponent', () => {
  let component: LadningPageComponent;
  let fixture: ComponentFixture<LadningPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LadningPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LadningPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
