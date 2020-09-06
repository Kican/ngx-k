import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputHiddenComponent } from './input-hidden.component';

describe('InputHiddenComponent', () => {
  let component: InputHiddenComponent;
  let fixture: ComponentFixture<InputHiddenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputHiddenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputHiddenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
