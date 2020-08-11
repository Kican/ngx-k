import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarItemsContainerComponent } from './sidebar-items-container.component';

describe('SidebarItemsContainerComponent', () => {
  let component: SidebarItemsContainerComponent;
  let fixture: ComponentFixture<SidebarItemsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarItemsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarItemsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
