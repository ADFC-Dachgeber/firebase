import { TestBed } from '@angular/core/testing';

import { DachgeberService } from './dachgeber.service';

describe('DachgeberService', () => {
  let service: DachgeberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DachgeberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
