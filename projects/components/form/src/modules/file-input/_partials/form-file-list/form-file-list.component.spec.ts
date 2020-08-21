import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFileListComponent } from './form-file-list.component';

describe('FormFileListComponent', () => {
  let component: FormFileListComponent;
  let fixture: ComponentFixture<FormFileListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFileListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
