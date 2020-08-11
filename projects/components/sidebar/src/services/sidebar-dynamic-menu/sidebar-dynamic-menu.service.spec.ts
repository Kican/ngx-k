import { TestBed } from '@angular/core/testing';

import { SidebarDynamicMenuService } from './sidebar-dynamic-menu.service';

describe('SidebarDynamicMenuService', () => {
  let service: SidebarDynamicMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarDynamicMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
