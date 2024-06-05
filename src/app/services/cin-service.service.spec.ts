import { TestBed } from '@angular/core/testing';

import { CinServiceService } from './cin-service.service';

describe('CinServiceService', () => {
  let service: CinServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CinServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
