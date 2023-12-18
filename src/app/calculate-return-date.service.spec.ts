import { TestBed } from '@angular/core/testing';

import { CalculateReturnDateService } from './calculate-return-date.service';

describe('CalculateReturnDateService', () => {
  let service: CalculateReturnDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculateReturnDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
