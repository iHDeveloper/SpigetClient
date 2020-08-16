import { TestBed } from '@angular/core/testing';

import { SpigetService } from './spiget.service';

describe('SpigetService', () => {
  let service: SpigetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpigetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
