import { TestBed } from '@angular/core/testing';

import { ApiInstituicoesService } from './api-instituicoes.service';

describe('ApiInstituicoesService', () => {
  let service: ApiInstituicoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiInstituicoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
