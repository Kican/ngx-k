import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFilePreviousListComponent } from './form-file-previous-list.component';

describe('FormFilePreviousListComponent', () => {
  let component: FormFilePreviousListComponent;
  let fixture: ComponentFixture<FormFilePreviousListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFilePreviousListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFilePreviousListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
