import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyFiledsValuesComponent } from './copy-fileds-values.component';

describe('CopyFiledsValuesComponent', () => {
  let component: CopyFiledsValuesComponent;
  let fixture: ComponentFixture<CopyFiledsValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyFiledsValuesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopyFiledsValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
