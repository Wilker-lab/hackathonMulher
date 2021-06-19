import { TestBed } from '@angular/core/testing';

import { ApiLeisService } from './api-leis.service';

describe('ApiLeisService', () => {
  let service: ApiLeisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiLeisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
