import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlRenderComponent } from './html-render.component';

describe('HtmlRenderComponent', () => {
  let component: HtmlRenderComponent;
  let fixture: ComponentFixture<HtmlRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlRenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
