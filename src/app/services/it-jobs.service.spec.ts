import { TestBed } from '@angular/core/testing';

import { ItJobsService } from './it-jobs.service';

describe('ItJobsService', () => {
  let service: ItJobsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItJobsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
