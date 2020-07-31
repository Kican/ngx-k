import { TestBed } from '@angular/core/testing';

import { AlertDismissService } from './alert-dismiss.service';

describe('AlertDismissService', () => {
  let service: AlertDismissService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertDismissService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
