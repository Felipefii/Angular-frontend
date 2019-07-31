import { TestBed } from '@angular/core/testing';

import { ParticipantesServiceService } from './participantes-service.service';

describe('ParticipantesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParticipantesServiceService = TestBed.get(ParticipantesServiceService);
    expect(service).toBeTruthy();
  });
});
