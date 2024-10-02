import { TestBed } from '@angular/core/testing';

import { Day2dayService } from './day2day.service';

describe('Day2dayService', () => {
  let service: Day2dayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Day2dayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
