import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarDropdownItemComponent } from './sidebar-dropdown-item.component';

describe('SidebarDropdownItemComponent', () => {
  let component: SidebarDropdownItemComponent;
  let fixture: ComponentFixture<SidebarDropdownItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarDropdownItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarDropdownItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
