import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderBs4Component } from './form-builder-bs4.component';

describe('FormBuilderBs4Component', () => {
  let component: FormBuilderBs4Component;
  let fixture: ComponentFixture<FormBuilderBs4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBuilderBs4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuilderBs4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
