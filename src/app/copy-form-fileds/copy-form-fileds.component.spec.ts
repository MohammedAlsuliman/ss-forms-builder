import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyFormFiledsComponent } from './copy-form-fileds.component';

describe('CopyFormFiledsComponent', () => {
  let component: CopyFormFiledsComponent;
  let fixture: ComponentFixture<CopyFormFiledsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyFormFiledsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopyFormFiledsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
