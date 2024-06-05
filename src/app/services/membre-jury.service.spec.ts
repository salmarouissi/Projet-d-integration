import { TestBed } from '@angular/core/testing';

import { MembreJuryService } from './membre-jury.service';

describe('MembreJuryService', () => {
  let service: MembreJuryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MembreJuryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
