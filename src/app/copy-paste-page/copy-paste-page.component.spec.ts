import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyPastePageComponent } from './copy-paste-page.component';

describe('CopyPastePageComponent', () => {
  let component: CopyPastePageComponent;
  let fixture: ComponentFixture<CopyPastePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyPastePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopyPastePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
