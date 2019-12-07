import { TestBed } from '@angular/core/testing';

import { PepDataService } from './pep-data.service';

describe('PepDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PepDataService = TestBed.get(PepDataService);
    expect(service).toBeTruthy();
  });
});
