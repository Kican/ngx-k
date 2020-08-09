import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarDynamicMenuComponent } from './sidebar-dynamic-menu.component';

describe('SidebarDynamicMenuComponent', () => {
  let component: SidebarDynamicMenuComponent;
  let fixture: ComponentFixture<SidebarDynamicMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarDynamicMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarDynamicMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
