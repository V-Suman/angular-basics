import { TestBed } from '@angular/core/testing';

import { ExternalfacingService } from './externalfacing.service';

describe('ExternalfacingService', () => {
  let service: ExternalfacingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExternalfacingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
