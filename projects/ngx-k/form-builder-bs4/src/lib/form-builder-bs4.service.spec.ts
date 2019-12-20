import { TestBed } from '@angular/core/testing';

import { FormBuilderBs4Service } from './form-builder-bs4.service';

describe('FormBuilderBs4Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormBuilderBs4Service = TestBed.get(FormBuilderBs4Service);
    expect(service).toBeTruthy();
  });
});
