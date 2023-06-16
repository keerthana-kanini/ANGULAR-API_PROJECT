import { TestBed } from '@angular/core/testing';

import { DPService } from './dp.service';

describe('DPService', () => {
  let service: DPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
