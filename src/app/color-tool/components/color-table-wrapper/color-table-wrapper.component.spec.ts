import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorTableWrapperComponent } from './color-table-wrapper.component';

describe('ColorTableWrapperComponent', () => {
  let component: ColorTableWrapperComponent;
  let fixture: ComponentFixture<ColorTableWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorTableWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorTableWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
